import React from 'react';
import { Hero, About, Experience, Tech, Feedbacks, Contact} from '../components';


const HomePage = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
