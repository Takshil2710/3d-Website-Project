import React from 'react';

const Bowl = ({ icon, name }) => {
  return (
    <div className='bowl-container'>
      <div className='bowl'>
        <img src={icon} alt={name} className='bowl-icon' />
      </div>
      <h3 className='text-white font-medium text-[18px] text-center'>{name}</h3>
    </div>
  );
};

export default Bowl;
