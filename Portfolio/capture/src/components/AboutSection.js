import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../style";
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  const container = {
    hidden: { x: 200 },
    show: {
      x: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 1 },
    },
  };

  return (
    <About>
      <Description>
        <motion.div
          className="title"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Hide>
            <motion.h2 variants={titleAnim} initial="hidden" animate="show">
              We work to make{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} initial="hidden" animate="show">
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} initial="hidden" animate="show">
              true.
            </motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

//Styled components

export default AboutSection;
