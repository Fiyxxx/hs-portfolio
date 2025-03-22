import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "life purpose.",
  "adding value.",
  "moving lives.",
  "moneyyy.                   (jk)"
];

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showArrow, setShowArrow] = useState(true); // ✅ add scroll arrow toggle

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 50);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 30);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // ✅ run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-left min-h-screen w-full pb-20"
    >
      <h1 className="pl-10 text-center text-7xl sm:text-8xl font-bold leading-tight">
        <span className="block sm:inline">passion? no,</span>{" "}
        <span className="block sm:inline text-violet-400 glow">
          {displayedText}
          <span className="cursor ml-[1px] font-light"></span>
        </span>
      </h1>

      <AnimatePresence>
        {showArrow && (
          <motion.a
            key="scroll-arrow"
            href="#about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-2xl"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            > 
              ↓
            </motion.div>
          </motion.a>
        )}
    </AnimatePresence>
    </section>
  );
};

export default Hero;