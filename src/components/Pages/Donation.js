import React from 'react';
import Footer from '../Footer/Footer';
import './Donation.css'
import { Link } from 'react-router-dom';
import DonationCart from './DonationCart';

const Donation = () => {
    return (
        <div className='mt-5'>
            <br></br>
            <br></br>
            <br></br>
                       <h2 className='text-center mt-5'> π³πΎπ½π°ππΈπΎπ½ πΏπ°πΆπ΄ </h2>
            
            
            <DonationCart></DonationCart>

            <Footer></Footer>
        </div>
    );
};

export default Donation;