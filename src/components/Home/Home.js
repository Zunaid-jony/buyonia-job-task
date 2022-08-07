import React from 'react';
import Footer from '../Footer/Footer';
import Carousel from './Carousel';
import Homesection from './Homesection';


const Home = () => {
    return (
        <div>
          
            <Carousel></Carousel>
            <Homesection></Homesection>
         
            <Footer></Footer>
        </div>
    );
};

export default Home;