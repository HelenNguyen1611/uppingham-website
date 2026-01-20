'use client';

import { RedLine } from './RedLine';

/**
 * Wrapper component that conditionally renders RedLine based on route configuration
 */
type RedLineWrapperProps = {
  show?: boolean;
  autoFillFirstFold?: boolean;
};

export function RedLineWrapper({
  show = true,
  autoFillFirstFold = false,
}: RedLineWrapperProps) {
  if (!show) {
    return null;
  }

  return <RedLine autoFillFirstFold={autoFillFirstFold} />;
}
