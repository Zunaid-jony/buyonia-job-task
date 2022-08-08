import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const View = () => {
const [service, setService] = useState({})
    const {viewId} = useParams()

    useEffect (()=>{
        const url= `https://limitless-lowlands-32082.herokuapp.com/schedule/${viewId}`
        
        fetch(url)
        .then(responce => responce.json())
        .then(data => setService(data))
    },[viewId])
    return (
        <div>
            thais is view pages{service.length}
            <p>cty: {service.phone}</p> 
        </div>
    );
};

export default View;