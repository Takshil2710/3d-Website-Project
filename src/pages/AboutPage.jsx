import React from 'react';
import { About, Experience, Feedbacks, ContactInfo, Info , StarsCanvas} from '../components';

const AboutPage = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <About />
      <Experience />
      <Info />
      <Feedbacks />
      <StarsCanvas />
      <ContactInfo />
    </div>
  );
};

export default AboutPage;
