import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
           <p>{
            slots.length > 0
            ? <span>{slots[0]}</span>
            :<span className='text-red-500'>No Slot Available. Try another date.</span>
            }</p> 
          <h2 className="card-title text-secondary">{name}</h2>
          <p>{slots.length} {slots.length > 1 ?'spaces':'space'} available</p>
          <div className="card-actions justify-end">
             <label htmlFor="booking-modal"
             disabled={slots.length === 0} 
             onClick={() =>setTreatment(service)}
             className="btn btn-secondary text-white uppercase">Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default Service;