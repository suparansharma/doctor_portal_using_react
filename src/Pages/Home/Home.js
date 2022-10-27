import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import ServiceDetails from './ServiceDetails';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services/>
            <ServiceDetails/>
            <MakeAppointment/>
        </div>
    );
};

export default Home;