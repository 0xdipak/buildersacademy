"use client";
import Image from "next/image";
import amit from "../../public/assets/amit.jpg";
import anu from "../../public/assets/anu.jpg";
import ashim from "../../public/assets/ashim.jpg";
import binita from "../../public/assets/binita.jpg";
import mahan from "../../public/assets/mahan.jpg";
import suyan from "../../public/assets/suyan.jpg";
import prajwal from "../../public/assets/prajwal.jpg";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

const testimonials = [
  {
    text: "“ Learning blockchain with Ethereum at Builders Academy has been transformative. The practical approach and expert guidance simplify complex topics, making it an outstanding experience. ”",
    name: "Amit Baral",
    title: "Student",
    avatarImg: amit,
  },
  {
    text: "“ The ICTLab’s blockchain mentorship program was a valuable experience, offering in-depth knowledge from instructors. Balancing it with other commitments was challenging, but their support made it manageable. I'm grateful for this opportunity. ”",
    name: "Anu Magar",
    title: "Student",
    avatarImg: anu,
  },
  {
    text: "“ Before the ICT Lab bootcamp, I knew little about blockchain. The camp provided deep insights into blockchain and Clarity, with expert mentors making learning engaging and supportive. I'm grateful for this valuable experience. ”",
    name: "Ashim Karki",
    title: "Student",
    avatarImg: ashim,
  },
  {
    text: "“ Before the bootcamp, I confused blockchain with cryptocurrency. The ICT Lab bootcamp clarified blockchain concepts and the Clarity language, with supportive mentors making the learning experience enriching. ”",
    name: "Binita Hamal",
    title: "Student",
    avatarImg: binita,
  },
  {
    text: "“ Dipak Sharma’s blockchain class offered clear insights into Solidity, smart contracts, and DApps, with invaluable guidance on React integration and debugging. His respectful teaching fostered a great learning environment. Highly recommended. ”",
    name: "Mahan Gurung",
    title: "Student",
    avatarImg: mahan,
  },
  {
    text: "“ Learning blockchain at Builders Academy was enriching, providing deep insights and exposure to new technologies. Engaging with peers and experts, along with dedicated instructors, made it a valuable experience. ”",
    name: "Suyan Thapa",
    title: "Student",
    avatarImg: suyan,
  },
  {
    text: "“ The bootcamp provided deep insights into Blockchain, Solidity, and Web3, with engaging mentors and strong support via Discord and Telegram. I’m grateful to Builders Academy and ICTLab Bagar for this enriching experience. ”",
    name: "Prajwal Sharma",
    title: "Student",
    avatarImg: prajwal,
  },
];

const Testimonials = () => {
  return (
    <section className=" max-w-7xl mx-auto py-20 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">
          What do people say about us?
        </h2>
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-xl mx-auto">
          Here's what some of our students have to say about our blockchain
          bootcamp, AI/ML bootcamps, events, and workshops.
        </p>

        {/* <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transaparent)]">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0",
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex gap-5 pr-5 float-none"
          >
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial) => (
              <div
                className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xl md:max-w-2xl flex-none"
                key={testimonial.name}
              >
                <div className="text-lg md:text-xl max-w-xl tracking-tight">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-10">
                  <div
                    className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,255)]
                  after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30
                  before:z-10 before:rounded-lg"
                  >
                    <Image
                      className="h-11 w-11 rounded-lg grayscale"
                      src={testimonial.avatarImg}
                      alt={`${testimonial.name}`}
                    />
                  </div>

                  <div className="">
                    <div className="">{testimonial.name}</div>
                    <div className="text-white/50 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div> */}
        <div className="flex flex-col items-center mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
