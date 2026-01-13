import Image from "next/image";
import { Banner } from "@/types/types";

const SectionBanner = ({
  heading,
  description,
  className,
  backgroundImagePath,
}: Banner) => {
  return (
    <div
      className={`${className} relative w-full h-64 lg:h-96 2xl:[450px] flex items-center justify-center overflow-hidden`}
    >
      {backgroundImagePath && (
        <Image
          src={backgroundImagePath}
          alt={`${heading} | Banner of a1 lifts`}
          fill
          className="object-cover"
          priority
        />
      )}

      {/* Overlay */}
      {backgroundImagePath && (
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      )}

      {/* Text content */}
      <div className="relative z-20 text-center max-w-2xl px-4">
        <h1 className="text-3xl 2xl:text-5xl font-bold mb-6 text-white">
          {heading}
        </h1>
        {description && <p className="lg:text-lg text-white">{description}</p>}
      </div>
    </div>
  );
};

export default SectionBanner;
