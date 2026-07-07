"use client";

import { useState, useEffect, useRef } from "react";

export function useTypewriter(
  phrases: string[],
  options: {
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseDuration?: number;
  } = {}
) {
  const { typeSpeed = 80, deleteSpeed = 40, pauseDuration = 2000 } = options;
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, pauseDuration);
      return () => clearTimeout(timer);
    }

    if (isTyping) {
      if (indexRef.current < currentPhrase.length) {
        const timer = setTimeout(() => {
          setText(currentPhrase.slice(0, indexRef.current + 1));
          indexRef.current += 1;
        }, typeSpeed);
        return () => clearTimeout(timer);
      } else {
        setIsPaused(true);
      }
    } else {
      if (indexRef.current > 0) {
        const timer = setTimeout(() => {
          setText(currentPhrase.slice(0, indexRef.current - 1));
          indexRef.current -= 1;
        }, deleteSpeed);
        return () => clearTimeout(timer);
      } else {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [text, phraseIndex, isTyping, isPaused, phrases, typeSpeed, deleteSpeed, pauseDuration]);

  return text;
}
