"use client";
import { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";

const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: any;
}) => {
 const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    const options: ValueAnimationTransition = {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, []);

  return (
    <Tilt
      className="border border-white/30 violet-gradient px-5 py-10 text-center rounded-xl relative shadow-card cursor-pointer"
      // tiltMaxAngleX={45}
      // tiltMaxAngleY={45}
      // scale={1}
      // transitionSpeed={450}
    >
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          maskImage,
        }}
      ></motion.div>
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <img src={icon} alt={title} />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </Tilt>
  );
};

export default ServiceCard;
