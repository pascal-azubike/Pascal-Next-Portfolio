import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "framer-motion";
import PrimaryHeading from "./primaryHeading";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className=" -z-[10] absolute top-[40px] left-0 h-72 md:h-[18rem] ">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="  lg:text-lg lg:text-white w-full"
      >
        <PrimaryHeading>
          <h2 className="text-2xl relative z-20 md:text-4xl  font-bold text-center text-white font-sans tracking-tight">
            Scriptural fun with{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-green-500 via-green-300 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Plumbrees Puzzle.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-green-500 via-green-300 to-pink-500 py-4">
                <span className="">Plumbrees Puzzle.</span>
              </div>
            </div>
          </h2>
        </PrimaryHeading>
      </motion.p>
    </BackgroundBeamsWithCollision>
  );
}
