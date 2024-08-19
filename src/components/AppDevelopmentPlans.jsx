import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { APPprojects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  planname,
  cost,
  details,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="flex justify-center gap-7">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[70px]">
          <h3 className="text-white font-bold text-[50px] text-center">{cost}</h3>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] text-center">{planname}</h3>
          <br />
          <ul className="list-disc pl-5 mt-2">
            {details.map((detail, i) => (
              <li key={i}>
                <p className="text-justify h-[40px]">{detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center mt-6">
          <a href={source_code_link} target="_blank" rel="noopener noreferrer" className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-secondary transition-colors duration-300 ease-in-out">
            Get Started
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const AppDevelopmentPlans = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Our Plans</h2>
      </motion.div>

      <div className="w-full flex">
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {APPprojects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(AppDevelopmentPlans, "");
