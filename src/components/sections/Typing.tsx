"use client";

import { useEffect, useState } from "react";

const words = [
  "Full Stack Dev",
  "MERN Stack Dev",
  "Next.js Dev",
  "React Dev",
  "Backend Dev",
];

const Typing = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));

          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 1000);
            setIsTyping(false);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));

          if (text.length - 1 === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
            setIsTyping(false);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="text-violet-500 font-semibold">
      {text}
      <span className={`inline-block ml-1 text-gray-400 ${isTyping ? "opacity-100" : "animate-blink"}`}>
        |
      </span>
    </span>
  );
};

export default Typing;