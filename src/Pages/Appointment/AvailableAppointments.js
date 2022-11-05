import React, { useEffect } from 'react';
import { format } from 'date-fns/esm';
import { useState } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppointments = ({date}) => {
    // const [services,setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);
    const formattedDate = format(date,'PP');
    const{date:services,isLoading,refetch} = useQuery(['available',formattedDate],()=>
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res =>res.json())
    )

    if(isLoading){
        return <Loading></Loading>
    }
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res =>res.json())
    //     .then(data =>setServices(data))
    // },[formattedDate])
    return (
        <div>
            <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date,'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'> 
                {
                    services?.map(service => <Service
                        key={service.id}
                       service={service}
                       setTreatment={setTreatment}
                       refetch={refetch}
                    ></Service>)
                }
            </div>
            {treatment && 
            <BookingModal 
            date ={date} 
            treatment={treatment}
            setTreatment={setTreatment}
            >
            </BookingModal>}
        </div>
        
    );
};

export default AvailableAppointments;