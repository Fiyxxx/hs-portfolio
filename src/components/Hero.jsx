import { useState, useEffect } from "react";

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
    <section className="flex items-center justify-left min-h-[calc(100vh-80px)] w-full">
      <h1 className="pl-10 text-center text-7xl sm:text-8xl font-bold leading-tight">
        <span className="block sm:inline">Passion? No,</span>{' '}
        <span className="block sm:inline text-violet-400 glow">
          {displayedText}
          <span className="cursor ml-[1px] font-light"></span>
        </span>
      </h1>
    </section>
  );
};

export default Hero;