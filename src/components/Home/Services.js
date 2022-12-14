import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import './service.css'
import View from './View';

const Services = () => {

        const [services, setService] = useState([])
        const[modal, setModal] = useState(null)
        useEffect(()=>{
            fetch('https://limitless-lowlands-32082.herokuapp.com/schedule')
            .then(responce => responce.json())
            .then(data => setService(data))
        },[])
    return (
        <div>
            <h1 style={{textAlign: 'center'}}> πΈππ»π°πΌπΈπ² ππ²π·πΎπ»π°ππ</h1>
            <div className='mainCard container'>
                        
            {
                services.map(card => <ServiceCard
                
                key={card._id}
                setModal={setModal}
                card ={card}
             
                ></ServiceCard>)
            }
        </div>
        {modal && <View modal={modal}
        
        ></View>

        }
        </div>
    );
};

export default Services;