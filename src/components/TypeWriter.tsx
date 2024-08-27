"use client";
import { TypewriterEffectSmooth } from "../components/ui/TypeWriterEffect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    // {
    //   text: "We",
    // },
    // {
    //   text: "specialize",
    // },
    // {
    //   text: "in",
    // },
    // {
    //   text: "Research,",
    //   className: "text-violet-500",
    // },
    // {
    //   text: "Development,",
    //   className: "text-violet-500",
    // },
    // {
    //   text: "and",
    // },
    // {
    //   text: "Training",
    //   className: "text-violet-500",
    // },
    // {
    //   text: "across",
    // },
    // {
    //   text: "various",
    // },
    // {
    //   text: "fields,",
    // },
    // {
    //   text: "with",
    // },
    // {
    //   text: "a",
    // },
    // {
    //   text: "strong",
    // },
    // {
    //   text: "focus",
    // },
    // {
    //   text: "on",
    // },
    {
      text: "Blockchain Development,",
    },
    {
      text: " AI,",
    },
    {
      text: " Security.",
    },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center text-lg md:text-xl text-white/70 text-center max-w-xl mx-auto">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
