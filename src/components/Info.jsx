import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { madhurahir } from "../assets"; 

import facebookLogo from '../assets/facebooklogo.png';
import instagramLogo from '../assets/instagramlogo.png';
import linkedinLogo from '../assets/Linkedinlogo.png';

const Info = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Meet Our CEO</p>
          <h2 className={styles.sectionHeadText}>Madhur Ahir</h2>
        </motion.div>

        <div className="row">
          <div className="w">
            <motion.p variants={textVariant()} className={`${styles.sectionText} justified`}>
              At OctaCore Technologies, we excel in creating effective web designs that go beyond aesthetics. A beautiful website alone isn't enough our comprehensive online marketing solutions ensure your success. With conversion-based design and strategic marketing, your online presence will thrive. Thank you for trusting us to elevate your digital journey.
            </motion.p>
          </div>
          <div className="buttons">
            <ul className="list-unstyled">
              <li className="relative w-16 h-16 mb-4 flex justify-center items-center">
                <a href="https://www.facebook.com/octacoretechnologies99" target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex justify-center items-center rounded-full border-2 border-white hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full bg-blue-500 opacity-40 blur-lg"></div>
                  <img src={facebookLogo} alt="Facebook" className="relative w-12 h-12 rounded-full" />
                </a>
              </li>
              <li className="relative w-16 h-16 mb-4 flex justify-center items-center">
                <a href="https://www.instagram.com/octacoretechnologies99/" target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex justify-center items-center rounded-full border-2 border-white hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full bg-blue-500 opacity-40 blur-lg"></div>
                  <img src={instagramLogo} alt="Instagram" className="relative w-10 h-10 rounded-full" />
                </a>
              </li>
              <li className="relative w-16 h-16 flex justify-center items-center">
                <a href="https://www.linkedin.com/company/octacoretechnologies99/" target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex justify-center items-center rounded-full border-2 border-white hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full bg-blue-700 opacity-40 blur-lg"></div>
                  <img src={linkedinLogo} alt="LinkedIn" className="relative w-12 h-12 rounded-full" />
                </a>
              </li>
            </ul>
          </div>  
        </div>
      </div>
      <div className="image-ceo">
        <img src={madhurahir} alt="Madhur Ahir" /> 
      </div>
    </div>
  );
};

export default SectionWrapper(Info, ""); 
