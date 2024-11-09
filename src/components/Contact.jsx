import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Twitter from "@mui/icons-material/Twitter";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const disabled = () => {
    if (form.name == "") return true;
    if (form.email == "") return true;
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_clgfsoo",
        "template_vrs7plh",
        {
          from_name: form.name,
          to_name: "Deepanhsu",
          from_email: form.email,
          to_email: "somanideepanshu12599@gmail.com",
          message: form.message,
        },
        "iSg7PmxvXkCU-L339",
      )
      .then(
        () => {
          setLoading(false);
          alert("Thankyou. I will get back to you as soon as possible");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Something went wrong");
        },
      );
  };

  const handleLink = (type) => {
    if (type === "linkedin") {
      window.open(`https://www.linkedin.com/in/deepanshu-somani`, `_blank`);
    } else if (type === "github") {
      window.open(`https://github.com/dsomani125`, `_blank`);
    } else {
      window.open(`https://twitter.com/dsomani125`, `_blank`);
    }
  };

  const heightAndWidthMapping = (width) => {
    if (width <= 400) return 20;
    if (width <= 600) return 30;
    if (width >= 1280) return 25;
    else return 40;
  };

  const gapMapping = (width) => {
    if (width <= 400 || width >= 1280) return 2;
    if (width <= 800) return 3;
    else return 8;
  };

  useEffect(() => {
    const button = document.getElementById("submit-button");
    button.disabled = disabled();
  }, [form]);

  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-32 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between">
            <h3 className={styles.sectionHeadText}>CONTACT</h3>
            <div className={`flex gap-${gapMapping(window.innerWidth)}`}>
              <LinkedInIcon
                sx={{
                  height: heightAndWidthMapping(window.innerWidth),
                  width: heightAndWidthMapping(window.innerWidth),
                  cursor: "pointer",
                  color: "#9aa2c2",
                  "&:hover": { color: "white" },
                }}
                onClick={() => handleLink("linkedin")}
              />
              <GitHubIcon
                sx={{
                  height: heightAndWidthMapping(window.innerWidth),
                  width: heightAndWidthMapping(window.innerWidth),
                  cursor: "pointer",
                  color: "#9aa2c2",
                  "&:hover": { color: "white" },
                }}
                onClick={() => handleLink("github")}
              />
              <Twitter
                sx={{
                  height: heightAndWidthMapping(window.innerWidth),
                  width: heightAndWidthMapping(window.innerWidth),
                  cursor: "pointer",
                  color: "#9aa2c2",
                  "&:hover": { color: "white" },
                }}
                onClick={() => handleLink("twitter")}
              />
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 flex">
                Name <p className="ml-1 text-red-600">*</p>
              </span>
              <input
                type="text"
                name="name"
                placeholder="Deepanshu Somani"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 flex">
                Email <p className="ml-1 text-red-600">*</p>
              </span>
              <input
                type="email"
                name="email"
                placeholder="dsomani125@gmail.com"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Message</span>
              <textarea
                rows={7}
                name="message"
                placeholder=""
                value={form.message}
                onChange={handleChange}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className={`${
                disabled() ? "bg-tertiary" : "bg-[#915eff]"
              } py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl`}
              id="submit-button"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
