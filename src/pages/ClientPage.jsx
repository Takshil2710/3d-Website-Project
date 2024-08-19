import React from 'react';
import { Clients, StarsCanvas} from '../components';

const ClientPage = () => {
  return (
    <div className='relative z-0 bg-primary'>
        <Clients />
        <StarsCanvas />
    </div>
  );
};

export default ClientPage;
