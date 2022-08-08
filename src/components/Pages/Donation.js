import React from 'react';
import Footer from '../Footer/Footer';
import './Donation.css'
import { Link } from 'react-router-dom';

const Donation = () => {
    return (
        <div>
                       <h2 className='text-center mt-5'> 🅳🅾🅽🅰🆃🅸🅾🅽 🅿🅰🅶🅴 </h2>
            
            <div className=' mainCard container'>
             
              

               <div className='aa'>
               <img style={{width:'90%'}} src="https://i.ibb.co/715v32G/5836.jpg" alt="5836" border="0"/>
               <h5 > Free Education </h5>
            
               <p>Free education is education funded through government spending or charitable organizations rather than </p>
              
               <button style={{width:'240px'}} type="button" class="btn btn-primary"> 
               <Link style={{color:'whitesmoke',textDecoration:'none'}} to='/pay'> DONATION </Link>
               
               </button>
           

               </div>
               {/*  */}
               <div className='aa'>
               <img style={{width:'77%'}} src="https://i.ibb.co/715v32G/5836.jpg" alt="5836" border="0"/>
               <h5> Distribution Of Food Items</h5>
             
               <p>Free education is education funded through government spending or charitable organizations rather than </p>

              
               <button style={{width:'240px'}} type="button" class="btn btn-primary"> 
               <Link style={{color:'whitesmoke',textDecoration:'none'}} to='/pay'> DONATION </Link>
               
               </button>
               </div>
               {/*  */}

               <div className='aa'>
               <img style={{width:'77%'}} src="https://i.ibb.co/715v32G/5836.jpg" alt="5836" border="0"/>
               <h5>  Food Assistance To Flood Victims</h5>
              
               <p>Free education is education funded through government spending or charitable organizations rather than </p>
              
               <button style={{width:'240px'}} type="button" class="btn btn-primary"> 
               <Link style={{color:'whitesmoke',textDecoration:'none'}} to='/pay'> DONATION </Link>
               
               </button>
               </div>
               <div className='aa'>
    
               <img style={{width:'70%',textAlign:'center',marginLeft:'20px',marginTop:'0px'}} src="https://i.ibb.co/CMMyqr8/1172667-OS5-H440.jpg" alt="1172667-OS5-H440" border="0"></img>
               <h5>Mosque Construction Project </h5>
              
               <p>Free education is education funded through government spending or charitable  </p>
               
               <button  style={{width:'240px'}} type="button" class="btn btn-primary"> 
               <Link style={{color:'whitesmoke',textDecoration:'none'}} to='/pay'> DONATION </Link>
               
               </button>
               </div>
              
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Donation;