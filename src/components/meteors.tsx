import { cn } from "../lib/utils";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

// Pre-generate random values at module level (runs once on import)
// This avoids calling Math.random during render
const preGeneratedRandoms = Array.from({ length: 100 }, () => ({
  left: Math.floor(Math.random() * 100),
  delayFactor: Math.random(),
  durationFactor: Math.random(),
}));

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  return (
    <>
      {Array.from({ length: number }, (_, idx) => {
        const randoms = preGeneratedRandoms[idx % preGeneratedRandoms.length];
        const duration =
          randoms.durationFactor * (maxDuration - minDuration) + minDuration;
        const delay = randoms.delayFactor * (maxDelay - minDelay) + minDelay;

        const style: React.CSSProperties = {
          "--angle": `${angle}deg`,
          top: -5,
          left: `${randoms.left}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        } as React.CSSProperties;

        return (
          <span
            key={idx}
            style={style}
            className={cn(
              "pointer-events-none absolute size-0.5 animate-meteor rounded-full bg-white shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-px before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-white before:to-transparent before:content-['']",
              className,
            )}
          />
        );
      })}
    </>
  );
};

export default Meteors;
