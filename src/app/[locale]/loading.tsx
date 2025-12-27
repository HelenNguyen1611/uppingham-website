import Image from 'next/image';

const slides = ['FOR THE THINKERS', 'FOR THE MAKERS', 'FOR THE PIONEERS'];

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#070A2B]">
      <SplashSequence />
    </div>
  );
}

/** Server-safe animated sequence */
function SplashSequence() {
  return (
    <div className="flex flex-col items-center gap-4 animate-fade">
      <Image
        src="/uppingham-crest.svg"
        alt="Uppingham Logo"
        width={156}
        height={194}
        priority
      />
      <p className="text-[10px] tracking-[0.28em] text-white/70">{slides[0]}</p>
    </div>
  );
}
