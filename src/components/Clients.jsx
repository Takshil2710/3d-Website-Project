import React from "react";
import { Bowl } from "./canvas";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { clients } from "../constants"; 

const Clients = () => {
  return (
    <div>
      <h1 className={`${styles.sectionHeadText} text-white text-center`}>Our Clients</h1>
      <br></br>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {clients.map((client) => ( 
          <div className='w-40 h-40' key={client.name}>
            <Bowl icon={client.icon} /> 
            <h3 className='text-white font-medium text-[18px] text-center'>{client.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Clients, "");
