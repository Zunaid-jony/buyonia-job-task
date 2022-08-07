import React from 'react';
import Footer from '../Footer/Footer';
import Carousel from './Carousel';
import Homesection from './Homesection';
import Services from './Services';



const Home = () => {
    return (
        <div>
          
            <Carousel></Carousel>
            <Homesection></Homesection>
            {/* <Service></Service> */}
            <Services></Services>
         
            <Footer></Footer>
        </div>
    );
};

export default Home;