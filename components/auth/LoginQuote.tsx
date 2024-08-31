"use client";

import { useEffect, useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const quotes = [
  "I want to write, but more than that, I want to bring out all kinds of things that lie buried deep in my heart. —Anne Frank",
  "I can shake off everything as I write; my sorrows disappear, my courage is reborn. —Anne Frank",
  "I can recapture everything when I write, my thoughts, my ideals and my fantasies. —Anne Frank",
  "A writer, I think, is someone who pays attention to the world. —Susan Sontag",
  "I write differently from what I speak; I speak differently from what I think; I think differently from the way I ought to think, and so it all proceeds into deepest darkness. —Franz Kafka",
  "Writing is utter solitude, the descent into the cold abyss of oneself. —Franz Kafka",
  "Writing is a deeper sleep than death. Just as one wouldn't pull a corpse from its grave, I can't be dragged from my desk at night. —Franz Kafka",
  "Keeping a journal will absolutely change your life in ways you've never imagined. —Oprah Winfrey"
];

function getRandomQuote(): string {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export function LoginQuote() {
  const [words, setWords] = useState<string>("");

  useEffect(() => {
    // Set the random quote after the component has mounted on the client
    setWords(getRandomQuote());
  }, []);

  // Return null if words are empty, ensuring that the component doesn't return an invalid JSX element
  if (!words) return null;

  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
