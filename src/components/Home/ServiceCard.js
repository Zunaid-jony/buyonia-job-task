import React from 'react';

const ServiceCard = ({card}) => {
    const {scholarImage,scholarName,nid,status} = card;
    return (
        <div>
         <p>  ScholarName: {scholarName}</p>
         <img src={scholarImage}></img>
        </div>
    );
};

export default ServiceCard;