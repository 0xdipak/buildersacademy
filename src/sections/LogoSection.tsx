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
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2 className="">Trusted and Supported By : </h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
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
              className="flex float-none gap-14 pr-20 -translate-x-1/2"
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
