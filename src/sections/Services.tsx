import BlockchainIcon from "../../public/assets/blockchain.svg";
import BootcampIcon from "../../public/assets/bootcamps.svg";
import AiIcon from "../../public/assets/ai.svg";
import ConsultationIcon from "../../public/assets/consultation.svg";
import SecurityIcon from "../../public/assets/security.svg";
import MoreIcon from "../../public/assets/more.svg";
import ServiceCard from "@/components/ServiceCard";

const features = [
  {
    title: "Blockchain Development",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
    icon: "/assets/blockchain.svg",
  },
  {
    title: "Bootcamp/Training",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    icon: "/assets/bootcamps.svg",
  },
  {
    title: "AI/ML",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    icon: "/assets/ai.svg",
  },
  {
    title: "Blockchain Consultation",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    icon: "/assets/consultation.svg",
  },
  {
    title: "Security",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    icon: "/assets/security.svg",
  },
  {
    title: "Many more",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    icon: "/assets/more.svg",
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto bg-black text-white py-[72px] sm:py-16">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            We offer a range of services, including blockchain development,
            bootcamps and training, blockchain consultations, and smart contract
            auditing.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

// #804dee
