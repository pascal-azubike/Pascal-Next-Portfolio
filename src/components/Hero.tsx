import { ArrowUp } from "lucide-react";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      <div className="pb-20 pt-16 md:pt-24 lg:pt-36 w-full  h-full absolute bg-black opacity-80 z-50"></div>
      <div className="pb-20 pt-16 md:pt-24 lg:pt-36 header relative">
        {/* Spotlights */}

        {/* Dark overlay with radial gradient */}
        <div className="h-screen w-full dark:bg-black-100 absolute top-0 left-0 flex items-center justify-center">
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
            [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        {/* Text Content */}
        <div className="flex justify-center z-[100] relative my-20">
          <div className="max-w-[89vw] lg:max-w-[60vw] flex flex-col items-center gap-5 text-white justify-center">
            <p className="uppercase tracking-widest text-xs text-center max-w-80">
              Scriptural fun with Plumbrees Puzzle
            </p>

            <TextGenerateEffect
              words="Transforming God's Word into Playfull Learning Experience"
              className="text-center text-[40px] lg:text-6xl"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! we&apos;re Plumbrees Puzzle, spreading joy and salvation
              through scripture-based games and puzzles
            </p>

            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<ArrowUp />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
