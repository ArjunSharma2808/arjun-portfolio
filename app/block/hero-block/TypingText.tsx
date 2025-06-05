"use client";

import { useState, useEffect } from "react";

const words = ["Student", "Fullstack Developer"];

const TypingText = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (forward) {
          if (charIndex < currentWord.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            setForward(false);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
          } else {
            setForward(true);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      forward ? 140 : 140
    );

    setDisplayText(currentWord.slice(0, charIndex));

    return () => clearTimeout(timeout);
  }, [charIndex, forward, wordIndex]);

  return (
    <span className="text-cyan-500 font-bold">
      {displayText}
      <span className="animate-pulse inline-block w-[1px] h-6 bg-current ml-1" />
    </span>
  );
};

export default TypingText;
