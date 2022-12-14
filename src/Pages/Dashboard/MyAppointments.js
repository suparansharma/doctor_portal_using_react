import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments]= useState([]);
    const [user] = useAuthState(auth)
    useEffect(()=>{
      if(user){
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res =>res.json())
        .then(data =>setAppointments(data));
      }
    },[user])
    return (
        <div>
            <h2>My Appointment : {appointments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      
      {
        appointments.map((a,index) =>
        <tr>
        <th>{index+1}</th>
        <td>{a.patientName}</td>
        <td>{a.data}</td>
        <td>{a.slot}</td>
        <td>{a.treatment}</td>
        <td>{(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`} ><button className='btn btn-xs btn-success'>Pay</button></Link>}</td>
        <td>{(a.price && a.paid) && <span className=' btn-success'>Paid</span>}</td>
      </tr>
            )
      }
 

    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointments;