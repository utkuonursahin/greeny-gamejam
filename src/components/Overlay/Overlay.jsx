import React from 'react';
import {useWorkshops} from "../../context/WorkshopsContext";
const Overlay = () => {
  const {setIsOpened} = useWorkshops();
  return (<div className="overlay" onClick={()=>setIsOpened(prev => !prev)}></div>);
};

export default Overlay;
