"use client";

import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    text: string;
    name: string;
    title: string;
    avatarImg: StaticImageData;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden   [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transaparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <div
            className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xl md:max-w-2xl flex-none"
            key={item.name}
          >
            <div className="text-lg text-white md:text-xl max-w-xl tracking-tight">
              {item.text}
            </div>
            <div className="flex items-center gap-3 mt-10">
              <div>
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={item.avatarImg.src}
                  alt={`hello`}
                />
              </div>

              <div className="">
                <div className="">{item.name}</div>
                <div className="text-white/50 text-sm">{item.title}</div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
