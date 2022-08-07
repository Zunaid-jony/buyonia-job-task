import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

        const [services, setService] = useState({})
        useEffect(()=>{
            fetch('https://limitless-lowlands-32082.herokuapp.com/schedule')
            .then(responce => responce.json())
            .then(data => setService(data))
        },[])
    return (
        <div className='mainCard'>
            service {services.length}
            {
                services.map(card => <ServiceCard
                
                key={card._id}
                card ={card}
                ></ServiceCard>)
            }
        </div>
    );
};

export default Services;