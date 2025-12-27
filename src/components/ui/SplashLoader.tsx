'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

type Slide = { id: string; text: string };

const slides: Slide[] = [
  { id: 'thinkers', text: 'FOR THE THINKERS' },
  { id: 'makers', text: 'FOR THE MAKERS' },
  { id: 'pioneers', text: 'FOR THE PIONEERS' },
];

const STORAGE_LAST_SHOWN = 'uppingham_splash_last_shown_ts';

export function SplashLoader({
  children,
  durationMs = 3000, // total duration of the splash loader
  minVisibleMs = 1500, // minimum time the splash loader must be visible
  showOncePerDay = true, // show again after N days
  showAgainAfterDays = 1, // show again after N days
}: {
  children: React.ReactNode;
  durationMs?: number;
  minVisibleMs?: number;
  showOncePerDay?: boolean;
  showAgainAfterDays?: number;
}) {
  const [done, setDone] = useState(false);
  const [index, setIndex] = useState(0);

  // animation flags
  const [mounted, setMounted] = useState(false);

  const startedRef = useRef(false);

  // each slide must be visible for at least 700ms to read
  const stepMs = useMemo(() => {
    const raw = Math.floor(durationMs / slides.length);
    return Math.max(1400, raw);
  }, [durationMs]);

  const logoAnimMs = 800; // sync with CSS duration-700/1000 for smooth
  const textAnimMs = 600; // sync with CSS duration-600 for smooth

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (startedRef.current) return;
    startedRef.current = true;

    // show again after N days (using localStorage)
    if (showOncePerDay) {
      const lastTsStr = localStorage.getItem(STORAGE_LAST_SHOWN);
      const lastTs = lastTsStr ? Number(lastTsStr) : 0;
      const showAgainAfterMs = showAgainAfterDays * 24 * 60 * 60 * 1000;

      if (lastTs && Date.now() - lastTs < showAgainAfterMs) {
        setDone(true);
        return;
      }
      localStorage.setItem(STORAGE_LAST_SHOWN, Date.now().toString());
    }

    setMounted(true);

    const start = performance.now();
    const timers: number[] = [];

    // important: ensure slide 0 has visible time,
    // then switch to slide 1,2 according to stepMs
    for (let i = 1; i < slides.length; i++) {
      timers.push(
        window.setTimeout(
          () => {
            setIndex(i);
          },
          logoAnimMs + i * stepMs
        ) // i*stepMs (not (i-1))
      );
    }

    // end: after logo + (slides.length * stepMs)
    const runTotal = logoAnimMs + slides.length * stepMs;

    timers.push(
      window.setTimeout(() => {
        const elapsed = performance.now() - start;
        const remaining = Math.max(0, minVisibleMs - elapsed);

        window.setTimeout(() => {
          setDone(true);
        }, remaining);
      }, runTotal)
    );

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [logoAnimMs, minVisibleMs, showAgainAfterDays, showOncePerDay, stepMs]);

  if (done) return <>{children}</>;

  return (
    <div
      className={`fixed inset-0 z-[9999] grid place-items-center bg-[#070A2B] transition-opacity duration-700 ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/uppingham-logo.svg"
          alt="Uppingham Logo"
          width={156}
          height={194}
          priority
          className={`transition-transform duration-1000 ease-out will-change-transform ${
            mounted ? 'scale-100' : 'scale-90'
          }`}
        />

        <p
          key={slides[index].id}
          className={`text-[10px] tracking-[0.28em] text-white/70
    motion-safe:animate-[fadeInUp_.6s_ease-out_both]
  `}
        >
          {slides[index].text}
        </p>
      </div>
    </div>
  );
}
