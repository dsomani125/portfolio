import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({
  date,
  iconBg,
  icon,
  company_name,
  points,
  title,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: `#fff` }}
      contentArrowStyle={{ borderRight: `7px solid #232631` }}
      date={date}
      iconStyle={{
        background: iconBg,
      }}
      icon={
        <div className="flex justify-center items-center h-full w-full">
          <img src={icon} alt={company_name} className="w-[60%] h-[60%]" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {points.map((point, index) => (
            <li key={index} className="text-white-100 text-[14px] pl-1">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <SectionWrapper idName="work">
      <>
        <motion.div variants={textVariant()}>
          {/* <p className={styles.sectionSubText}>INTRODUCTION</p> */}
          <h2 className={styles.sectionHeadText}>WORK EXPERIENCE</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};

export default Experience;
