import { ArrowDown } from "lucide-react";

const DecorativeSticker = () => {
  const text = "VIOLET TO RED • CHALLENGE • ";
  const repeatedText = text.repeat(2);

  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
      {/* Outer ring with rotating text */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text className="fill-primary text-[11px] font-medium tracking-widest uppercase">
            <textPath href="#circlePath">
              {repeatedText}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Inner circle */}
      <div className="absolute inset-8 md:inset-10 lg:inset-12 rounded-full bg-secondary flex items-center justify-center">
        <ArrowDown size={32} className="text-primary" />
      </div>

      {/* Subtle glow */}
      <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl -z-10" />
    </div>
  );
};

export default DecorativeSticker;
