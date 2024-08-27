'use client'
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../lib/styles";
import { fadeIn, textVariant } from "../lib/motion";


interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}




const services = [
  {
    title: "Web Developer",
    icon: 'web',
  },
  {
    title: "React Native Developer",
    icon: 'mobile',
  },
  {
    title: "Backend Developer",
    icon: 'backend',
  },
  {
    title: "Content Creator",
    icon: 'creator',
  },
];

const ServiceCard: React.FC<{ index: number; title: string; icon: string }> = ({
  index,
  title,
  icon,
}) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};
const About: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>Introducation</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("up", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident nemo
        est ut nostrum placeat! Deleniti, officia id laborum enim, aperiam nam
        iste quam consectetur ut voluptates nisi impedit soluta eius! Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus
        sapiente quisquam distinctio explicabo minus laudantium adipisci
        officiis, doloribus libero.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About
