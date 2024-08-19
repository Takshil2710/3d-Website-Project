import React from 'react';
import { Feedbacks, StarsCanvas,WebDevelopment,Tech} from '../components';

const WebDevelopmentPage = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <WebDevelopment />
      <Tech />
      <Feedbacks />
      <StarsCanvas />
    </div>
  );
};

export default WebDevelopmentPage;
