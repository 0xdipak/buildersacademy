"use client";
import { useState } from "react";
import PlusIcon from "../../public/assets/plus.svg";
import MinusIcon from "../../public/assets/minus.svg";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    question: "What is BuildersAcademy?",
    answer:
      "BuildersAcademy is a startup based in Pokhara, specializing in blockchain development and artificial intelligence. We provide research, development, and training services in these fields.",
  },
  {
    question: "What bootcamps are currently being offered by BuildersAcademy?",
    answer:
      "As we continue to expand in blockchain development and AI, we are currently offering bootcamps in Blockchain Development and AI/ML Development. Our platform provides courses, resources, and mentorship to help developers and enthusiasts master blockchain technologies, including Ethereum, Solana, zkEVM, as well as AI/ML.",
  },
  {
    question: "Who should enroll in BuildersAcademy's bootcamps?",
    answer:
      "Individuals interested in building a career in blockchain and AI can join our bootcamp. BuildersAcademy's bootcamps are crafted for developers, engineers, and tech enthusiasts eager to learn about blockchain technology, smart contracts, decentralized applications (dApps), AI/ML and more. Whether you’re a beginner or an experienced professional, our courses accommodate all skill levels.",
  },
  {
    question:
      "Does BuildersAcademy offer any certification upon bootcamp completion?",
    answer:
      "Yes, upon successfully completing a bootcamps, BuildersAcademy offers a certificate of completion. This certificate validates your skills and knowledge in blockchain development, AI/ML and can be a valuable addition to your professional portfolio.",
  },
];

const AccordianItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="py-7 border-b border-white/30 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {!isOpen ? (
          <PlusIcon
            // onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
          />
        ) : (
          <MinusIcon
            // onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
          />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  return (
    <div className="max-w-7xl mx-auto bg-black text-white bg-gradient-to-t from-[#3d2463] to-black py-[72px] sm:py-24 ">
      <div className="container">
        <h2 className="text-center text-5xl md:text-6xl font-bold tracking-tighter">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map((item, index) => (
            <AccordianItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
