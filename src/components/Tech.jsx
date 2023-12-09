import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <SectionWrapper idName="">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="flex flex-col items-center w-36 h-36" key={tech.name}>
            <BallCanvas icon={tech.icon} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Tech;
