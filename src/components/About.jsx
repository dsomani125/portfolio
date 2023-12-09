import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper idName="about">
      <div>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>INTRODUCTION</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 4)}
          className="mt-4 text-secondary text-[17]px max-w-5xl leading-[28px]"
        >
          I am a skilled software engineer deeply immersed in the world of
          frontend development with experience in JavaScript and TypeScript and
          frameworks like React.Js and Next.Js. I'm a quick learner and very
          passionate about building user-friendly, efficient and scalable
          solutions that solve real world problems.
        </motion.p>
      </div>
    </SectionWrapper>
  );
};

export default About;
