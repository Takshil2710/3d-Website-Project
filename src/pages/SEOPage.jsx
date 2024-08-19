import React from 'react';
import { StarsCanvas,SEO} from '../components';

const SEOPage = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <SEO />
      <StarsCanvas />
    </div>
  );
};

export default SEOPage;
