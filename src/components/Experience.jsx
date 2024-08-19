import React, { useMemo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = React.memo(({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "10px solid  #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <div className='w-12 h-12 bg-primary rounded-full flex justify-center items-center'>
            <span className='text-white text-2xl font-bold'>{experience.number}</span>
          </div>
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[40px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[20px] font-semibold' style={{ margin: 10 }}>
          {experience.subtitle}
        </p>
      </div>

      <ul className='mt-2 list-disc ml-5 space-y-3'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[20px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
});

const Experience = () => {
  const renderedExperiences = useMemo(
    () =>
      experiences.map((experience, index) => (
        <ExperienceCard key={`experience-${index}`} experience={experience} />
      )),
    []
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          How we work?
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>{renderedExperiences}</VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(React.memo(Experience), "work");
