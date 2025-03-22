import { useState, useEffect } from "react";

const words = [
  "my life purpose.",
  "adding value.",
  "touching lives.",
  "big money.                   (jk)"
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
      <h1 className="text-8xl font-bold text-white flex text-left mr-[-630px]">
        <span className="mr-2">Passion? No,</span>
        <span className="text-violet-400 min-w-[20ch] text-left glow">
          {displayedText}
          <span className="custom-cursor" />
        </span>
      </h1>
    </section>
  );
};

export default Hero;