"use client";
import stacks from "../../public/assets/stacks.png";
import starknet from "../../public/assets/starknet.png";
import national from "../../public/assets/national.png";
import lagrandee from "../../public/assets/lagrandee.png";
import bob from "../../public/assets/bob.png";
import { motion } from "framer-motion";

const LogoSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 md:py-24">
      <div className="bg-black text-white py-[72px] sm:py-24">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-xl text-center text-white">
            Trusted and Supported by the world&apos;s most innovative teams.
          </h2>
          <div className="flex overflow-hidden mt-10">
            <motion.div
              initial={{
                translateX: "-50%",
              }}
              animate={{
                translateX: "0",
              }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex gap-16 flex-none pr-16 -translate-x-1/2"
            >
              {[
                stacks,
                national,
                starknet,
                lagrandee,
                bob,
                stacks,
                national,
                starknet,
                lagrandee,
                bob,
                stacks,
                national,
                starknet,
                lagrandee,
                bob,
                stacks,
                national,
                starknet,
                lagrandee,
                bob,
              ].map((logo) => (
                <img
                  src={logo.src}
                  key={logo.src}
                  alt="logo"
                  className="h-10 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
