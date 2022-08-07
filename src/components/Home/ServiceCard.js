import React from 'react';
import './ServiceCard.css'
import { Link } from 'react-router-dom';

const ServiceCard = ({card}) => {
    const {scholarImage,scholarName,nid,status, city,phone} = card;
    return (
        <div className='cards contener'>
         
         <img class="center" src={scholarImage}></img>
         <h6>  {scholarName}</h6>
         <p >  {city}</p>
         <p >  {phone}</p>
         {/* style={{textAlign: 'left', margin: '10px'}} */}
         <button  class="btn btn-primary"><Link style={{color:'wheat',textDecoration:'none'}} to='/scholar'> Booing </Link> </button>
         
        </div>
    );
};

export default ServiceCard;