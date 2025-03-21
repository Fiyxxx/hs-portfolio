import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = ["Hello", "Hola", "Bonjour", "안녕하세요", "こんにちは", "你好"];

const Preloader = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    console.log("✅ Preloader started...");

    // Cycle through greetings every 800ms
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 650);

    // Hide Preloader after 4 seconds
    setTimeout(() => {
      clearInterval(interval);
      setShowPreloader(false);
      console.log("✅ Preloader finished! Loading site...");
      onFinish();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white text-7xl font-bold"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, y: "-100vh" }}
          transition={{ delay: 3.8, duration: 0.8, ease: "easeInOut" }}
        >
          <motion.span
            key={index}
            className="absolute"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            {greetings[index]}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;