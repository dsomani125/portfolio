import { Button } from "@mui/material";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

const Hero = () => {
  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/10HoEJRiaQR2AuIwwqRbE8vit3rGuepew/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I am <span className="text-[#915eff]">Deepanshu</span>
          </h1>
          <Button
            onClick={handleDownloadResume}
            sx={{
              cursor: "pointer",
              color: "white",
              backgroundColor: "#6c42cd",
              marginTop: "15px",
              zIndex: 20,
              borderRadius: "6px",
              fontFamily: "Poppins",
              textTransform: "none",
              fontSize: "16px",
              ":hover": { background: "#915eff" },
            }}
          >
            Download Resume
          </Button>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-4 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
