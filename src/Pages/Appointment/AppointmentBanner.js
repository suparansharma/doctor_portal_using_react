import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import backgroundchair from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns/esm';
const AppointmentBanner = ({date,setDate}) => {
   
    return (
<div style={{ background:`url(${backgroundchair})` }} className="hero min-h-screen ">
  <div  className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <DayPicker
     mode="single"
     selected={date}
     onSelect={setDate}
    
    />
    <p>You have selected:{format(date,'PP')}</p>
    </div>
  </div>

</div>
    );
};

export default AppointmentBanner;