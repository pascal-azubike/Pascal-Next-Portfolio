import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const BackgroundBeamsWithCollisionPlum = () => {
  const [currentAnimation, setCurrentAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % 4);
    }, 4000); // 8 seconds for each animation

    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundBeamsWithCollision className="rounded-lg h-[20rem] w-[100%] lg:w-[120%]  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,109,198,0.3),rgba(255,255,255,0))] flex justify-center items-center relative overflow-hidden">
      {/* Slide-In from Left Animation */}
      {currentAnimation === 0 && (
        <motion.div
          className="text-white text-center px-6  text-3xl font-bold absolute"
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            delay: 0
          }}
          exit={{ opacity: 0, x: "-100vw", transition: { duration: 2 } }}
        >
          Hi! Were Plumbrees Puzzle
        </motion.div>
      )}
      {/* Fade-In and Scale-Up Animation */}
      {currentAnimation === 1 && (
        <motion.div
          className="text-white  text-center px-6 text-3xl font-bold absolute"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0
          }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 2 } }}
        >
          Transforming Gods Word into Playful Learning Experience
        </motion.div>
      )}

      {/* Rotate and Fade Animation */}
      {currentAnimation === 2 && (
        <motion.div
          className="text-white  text-center px-6 text-3xl font-bold absolute"
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{
            duration: 2,
            delay: 0
          }}
          exit={{ opacity: 0, rotate: 180, transition: { duration: 2 } }}
        >
          Spreading Joy and Salvation
        </motion.div>
      )}

      {/* Bounce and Color Change Animation */}
      {currentAnimation === 3 && (
        <motion.div
          className="text-white  text-center px-6 text-3xl font-bold absolute"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -20 }}
          transition={{
            duration: 2,
            delay: 0
          }}
          exit={{ opacity: 0, y: 0, transition: { duration: 2 } }}
        >
          Through Scripture-Based Games and Puzzles
        </motion.div>
      )}
    </BackgroundBeamsWithCollision>
  );
};

export default BackgroundBeamsWithCollisionPlum;
