import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutFrom from './CheckoutFrom';


const stripePromise = loadStripe('pk_test_51M19c1DVKnOMeiQ8z5KGUX0wFNKlVf6fKxDI46884O6JVQTtVPulEmIqF79HAY9kDMLZzYUhwb67iTL2FGomP0sb00vwBbWkFG');

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const {data:appointment,isLoading} = useQuery(['booking',id],()=>
     fetch(url)
     .then(res=>res.json()));

     if(isLoading){
        return <Loading></Loading>
     }
    return (
        <div>

  <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
  <div className="card-body">
    <p className="text-success">Hello, {appointment.patientName}</p>
    <h2 className="card-title">Pay for {appointment.treatment}</h2>
    <p>Your Appointment : <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
     <p>Please pay : ${appointment.price}</p>   
  </div>
</div>
    <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
        <Elements stripe={stripePromise}>
        <CheckoutFrom/>
        </Elements>
 
  </div>
</div>
        </div>
    );
};

export default Payment;