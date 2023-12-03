import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] text-center font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <SectionWrapper idName="about">
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>INTRODUCTION</p>
          <h2 className={styles.sectionHeadText}>OVERVIEW</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 4)}
          className="mt-4 text-secondary text-[17]px max-w-5xl leading-[28px]"
        >
          Started several mistake joy say painful removed reached end. State
          burst think end are its. Arrived off she elderly beloved him affixed
          noisier yet. An course regard to up he hardly. View four has said does
          men saw find dear shy. Talent men wicket add garden. Allow miles wound
          place the leave had. To sitting subject no improve studied limited. Ye
          indulgence unreserved connection alteration appearance my an
          astonished. Up as seen sent make he they of. Her raising and himself
          pasture believe females. Fancy she stuff after aware merit small his.
          Charmed esteems luckily age out.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
