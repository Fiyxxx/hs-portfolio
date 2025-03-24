import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";

import profile1 from "../assets/bitavatar.png";
import profile2 from "../assets/pic.jpg";
import profile3 from "../assets/selfie1.jpg";
import profile4 from "../assets/selfie2.jpg";
import spark from "../assets/spark.json"; // Lottie animation

const images = [profile1, profile2, profile3, profile4];

const About = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showSpark, setShowSpark] = useState(false);

  const handleClick = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
    setShowSpark(true);
    setTimeout(() => setShowSpark(false), 300);
  };

  return (
    <section
      id="about"
      className="scroll-mt-20 w-full min-h-screen px-6 py-10 flex justify-center relative"
    >
      <div className="max-w-2xl w-full flex flex-col md:flex-row items-center justify-between gap-12 relative">
        {/* Section Title */}
        <div className="absolute top-6 left-0 w-full flex justify-center">
          <div className="max-w-screen-md w-full">
            <h2 className="text-3xl sm:text-7xl text-white font-bold tracking-wider">
              about.
            </h2>
          </div>
        </div>

        {/* Left: Text Content */}
        <div className="flex-1.5 text-white">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            hi, i’m han sheng <span className="inline-block">👋</span>
          </h3>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl">
            i'm a computing undergraduate majoring in ai systems. beyond passion,
            i believe in building great systems that change lives.
            my main interests are systems, ai/ml, and quant finance. 
            i love exchanging ideas, and taking on new challenges, reach out to me!
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-4 text-white text-2xl">
            <a
              href="https://www.linkedin.com/in/goh-han-sheng"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/fiyxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          {/* Spark sits outside the image box */}
          <AnimatePresence>
            {showSpark && (
              <motion.div
                key="spark"
                className="absolute z-30 pointer-events-none"
                style={{
                  top: "-20%",
                  left: "50%",
                  width: "230px",
                  height: "230px",
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Lottie
                  animationData={spark}
                  loop={false}
                  style={{ width: "100%", height: "100%" }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Image box (separated) */}
          <motion.div
            onClick={handleClick}
            className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <motion.img
              key={imageIndex}
              src={images[imageIndex]}
              alt="Han Sheng"
              className="w-full h-full object-cover rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          <p className="text-sm text-white-400 mt-3 ml-3">click me! 👆</p>
        </div>
      </div>
    </section>
  );
};

export default About;