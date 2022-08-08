import React from 'react';
import Footer from '../Footer/Footer';
import './Donation.css'

const Donation = () => {
    return (
        <div>
            Donation.js
            <div className=' mainCard container'>
              

               <div className='aa'>
               <h4 > Free Education </h4>
               <br/>
               <p>Free education is education funded through government spending or charitable organizations rather than </p>
               <h4> </h4>
               <h4> </h4>
               <h4> </h4>
               <br/>
               <button style={{width:'240px'}} type="button" class="btn btn-primary"> DONATION </button>

               </div>
               {/*  */}
               <div className='aa'>
               <h4> distribution of food items</h4>
               <br/>
               <p>Free education is education funded through government spending or charitable organizations rather than </p>

              
               <button style={{width:'240px'}} type="button" class="btn btn-primary"> DONATION </button>
               </div>
               {/*  */}

               <div className='aa'>
               <h4>  food assistance to flood victims</h4>
               <br/>
               <p>Free education is education funded through government spending or charitable organizations rather than </p>
              
               <button style={{width:'240px'}} type="button" class="btn btn-primary"> DONATION </button>
               </div>
               <div className='aa'>
               <h4>mosque construction project </h4>
               <br/>
               <p>Free education is education funded through government spending or charitable organizations rather than </p>
               
               <button style={{width:'240px'}} type="button" class="btn btn-primary"> DONATION </button>
               </div>
              
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Donation;