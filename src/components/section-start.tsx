import Image from "next/image";
import monogramV1 from "./assets/monogram-v1.svg";

export function SectionStart() {
  return (
    <div className="min-h-screen relative w-screen">
      <span className="absolute right-4 md:right-8 top-4 text-lg">
        Pitch/2025
      </span>

      <div className="min-h-screen relative flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8">
        {/* Arena Logo - Better mobile positioning */}
        <div className="absolute top-[20%] left-4 md:left-0 md:top-auto md:bottom-[650px] scale-75 md:scale-100">
          <Image
            src={monogramV1}
            alt="Arena Logo"
            width={193}
            height={193}
            className="w-[193px] h-[193px] dark:invert"
          />
        </div>

        {/* ARENA text - Better mobile responsiveness */}
        <h1 className="text-[72px] sm:text-[94px] md:text-[362px] absolute bottom-[30%] left-4 md:right-0 md:bottom-8 md:left-auto leading-none">
          ARENA
        </h1>
      </div>
    </div>
  );
}
