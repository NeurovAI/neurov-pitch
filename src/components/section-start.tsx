import Image from "next/image";
import monogram from "./assets/monogram.svg";
import blackLogoText from "./assets/black-logo-text.svg";

export function SectionStart() {
  return (
    <div className="min-h-screen relative w-screen">
      <span className="absolute right-4 md:right-8 top-4 text-lg">
        Pitch/2025
      </span>

      <div className="min-h-screen relative flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8">
        <div className="absolute bottom-auto mt-[150px] -ml-[35px] md:ml-0 md:mt-0 md:bottom-[650px] scale-50 md:scale-100">
          <Image
            src={monogram}
            alt="Arena Logo"
            width={193}
            height={193}
            className="w-[193px] h-[193px]"
          />
        </div>
        <h1 className="text-[94px] bottom-[250px] left-2 md:text-[362px] absolute md:right-0 md:bottom-8 md:left-auto">
          ARENA
        </h1>

        {/* "Brought to you by" text and logo - positioned at bottom of screen */}
        <div className="absolute bottom-0 right-0 pb-6 pr-4 md:pr-8 flex items-center gap-4 text-2xl md:text-5xl">
          <span className="black">brought to you by</span>
          <Image
            src={blackLogoText}
            alt="Neurov Logo"
            width={240}
            height={120}
            className="w-[240px] h-auto md:w-[300px] -translate-y-1"
          />
        </div>
      </div>
    </div>
  );
}
