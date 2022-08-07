import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-dark text-white pt-5 pb-4'>

            <div className='container tect-center tet-md-left'>
                <div className='row tect-center tect-md-left'>
                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <h5 className='tet-uppercase mb-4 font-weight-bold text-warning '> Buaniya </h5>
                        <p>Islamic University, Bangladesh, commonly referred to as Islamic University, Kushtia shortly IU, is one of the major public research and PhD granting universities in Bangladesh</p>

                    </div>
                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='tect-uppercase mb-4 font-weight-bold text-warning'>Products</h5>
                        <p>
                            <a href='' className='tect-white'style={{textDecoration: 'none'}}  >Providers</a>
                        </p>
                        <p>
                            <a href='' className='tect-white'style={{textDecoration: 'none'}}  >Providers</a>
                        </p>
                        <p>
                            <a href='' className='tect-white'style={{textDecoration: 'none'}}  >Providers</a>
                        </p>
                        <p>
                            <a href='' className='tect-white'style={{textDecoration: 'none'}}  >Providers</a>
                        </p>

                    </div>
                {/*  */}

                    <div className='col-md-3 col-lg-2 col-xl-2 mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Useful lins</h5>
                        <p>
                            <a href='' className='tect-white'style={{textDecoration: 'none'}}  >Providers</a>
                        </p>
                        <p>
                            <a href='' className='tect-white'style={{textDecoration: 'none'}}  >Providers</a>
                        </p>
                        <p>
                            <a href='' className='tect-white'style={{textDecoration: 'none'}}  >Providers</a>
                        </p>
                        <p>
                            <a href='' className='tect-white'style={{textDecoration: 'none'}}  >Help</a>
                        </p>

                    </div>

                    <div className='col-md-4 col-lg-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'> Contact</h5>

                    </div>


                </div>

            </div>
        </footer>
    );
};

export default Footer;