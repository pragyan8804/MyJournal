"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `“I can shake off everything as I write; my sorrows disappear, my courage is reborn.” -Anne Frank
`;

export function LoginQuote() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
