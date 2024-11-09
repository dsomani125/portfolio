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
          I'm a passionate Full Stack Engineer with a strong focus on
          solving real-world problems through technology. With hands-on
          experience in Java, PostgreSQL, JavaScript, and TypeScript, I
          specialize in building scalable and efficient applications. I have
          worked extensively with frameworks such as Spring Boot, React.js, and
          Next.js to create seamless, high-performance user experiences. My goal
          is to leverage my skills to deliver innovative solutions and drive
          impactful results.
        </motion.p>
      </div>
    </SectionWrapper>
  );
};

export default About;
