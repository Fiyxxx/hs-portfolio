import { useState, useEffect } from "react";

const words = [
  "Purpose in Life",
  "My ",
  "Unleash your Potential.",
  "Money. (jk)"
];

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-80px)] w-full">
      <h1 className="text-7xl font-bold text-white flex text-left mr-[-150px]">
        <span className="mr-2">Passion? No,</span>
        <span className="text-cyan-400 min-w-[22ch] text-left">
          {displayedText}
          <span className="cursor text-white">|</span>
        </span>
      </h1>
    </section>
  );
};

export default Hero;