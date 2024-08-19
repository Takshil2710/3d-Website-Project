import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { PhoneCanvas, EmailCanvas, LocationCanvas } from "./canvas";

const Contact = () => {
  return (
    <div className={`mt-10 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px] flex justify-center items-center`}>
        <motion.div variants={textVariant()} className="text-center">
          <h2 className={styles.sectionHeadText}>Let's Talk</h2>
        </motion.div>
      </div>
      <div className={`flex flex-col md:flex-row gap-2`}>
        <div className="Phone-box w-full md:w-1/3 h-full flex flex-col justify-center items-center">
          <PhoneCanvas />
          <p className='text-white font-medium text-[40px] text-center mb-2'>Call Us</p>
          <a href='tel:+917046649999' className='text-white font-medium text-[19px] text-center hover:scale-90 transition-transform'>+91-70466-49999</a>
        </div>
        <div className="Email-box w-full md:w-1/3 h-full flex flex-col justify-center items-center">
          <EmailCanvas />
          <p className='text-white font-medium text-[40px] text-center mb-2'>Email Us</p>
          <a href='mailto:support@octacoretechnologies.com' className='text-white font-medium text-[19px] text-center hover:scale-90 transition-transform'>support@octacoretechnologies.com</a>
          <a href='mailto:info@octacoretechnologies.com' className='text-white font-medium text-[19px] text-center hover:scale-90 transition-transform'>info@octacoretechnologies.com</a>
        </div>
        <div className="Location-box w-full md:w-1/3 h-full flex flex-col justify-center items-center">
          <LocationCanvas />
          <p className='text-white font-medium text-[40px] text-center mb-2'>Visit Us</p>
          <a href='https://maps.app.goo.gl/RoapS2yLxJa7TDRY6' target='_blank' rel='noopener noreferrer' className='text-white font-medium text-[19px] text-center hover:scale-90 transition-transform'>207, Sai Darshan Complex, Near GIDC Office Vapi 396 195.</a>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "");
