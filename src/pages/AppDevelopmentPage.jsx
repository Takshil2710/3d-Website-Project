import React from 'react';
import { StarsCanvas,AppDevelopment} from '../components';

const AppDevelopmentPage = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <AppDevelopment />
      <StarsCanvas />
    </div>
  );
};

export default AppDevelopmentPage;
