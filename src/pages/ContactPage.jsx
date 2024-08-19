import React from 'react';
import { Contact,ContactInfo, StarsCanvas} from '../components';

const ContactPage = () => {
  return (
    <div className='relative z-0 bg-primary'>
        <ContactInfo />
        <Contact />
        <StarsCanvas />
    </div>
  );
};

export default ContactPage;
