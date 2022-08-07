import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import './service.css'

const Services = () => {

        const [services, setService] = useState([])
        useEffect(()=>{
            fetch('https://limitless-lowlands-32082.herokuapp.com/schedule')
            .then(responce => responce.json())
            .then(data => setService(data))
        },[])
    return (
        <div>
            <h1 style={{textAlign: 'center'}}> 🅸🆂🅻🅰🅼🅸🅲 🆂🅲🅷🅾🅻🅰🆁🆂</h1>
            <div className='mainCard container'>
                        
            {
                services.map(card => <ServiceCard
                
                key={card._id}
                card ={card}
                ></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Services;