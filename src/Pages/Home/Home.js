import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import ServiceDetails from './ServiceDetails';
import Services from './Services';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services/>
            <ServiceDetails/>
            <MakeAppointment/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;