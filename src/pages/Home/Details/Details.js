import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Mapbox from './Mapbox'
import './Details.css'

const Details = () => {

    const [details, setDetails] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://hommie-server-rabi-mezan.vercel.app/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data);
            })
    }, [])

    return (

        <div >
            <div className='  container my-5 py-lg-5'>
                <div className='row  align-items-start'>
                    <div className=' paralax col-lg-6 col-12 p-2'
                        style={{
                            backgroundImage: `url(${details.img})`,
                            backgroundSize: "cover",
                            height: "70vh",
                            width: "100vw",
                            color: "#f5f5f5",
                            padding: '10px'
                        }}

                    >
                        <div className='relative me-auto '>
                            <Mapbox
                                details={details}
                            ></Mapbox>
                        </div>


                    </div>
                    <div className=' col-lg-7 me-auto my-4'>
                        <h1 className='mt-3 fw-bolder fs-1 text-uppercase'>{details.title}</h1>
                        <p className='my-5 fs-3 fw-bold'><i class="fas fa-map-marker-alt  fw-bold text-success fs-2  fw-bold"></i>  {details.Location}</p>

                        <p className=' fs-5 fs-ex-6'>  <span>{details.full_description}</span> </p>

                        <h4 className='mt-5'> <span className='fst-italic '>Property Details</span></h4>
                        <hr />
                        <p className='d-flex justify-content-between'>Bedrooms  <span className='fw-bold'>{details.Bedrooms}</span></p>
                        <p className='d-flex justify-content-between '>Parking Spaces  <span className='fw-bold'>{details.parking} </span></p>
                        <p className='d-flex justify-content-between '>Available Space  <span className='fw-bold'>{details.space} sq. feet</span></p>
                        <p className='d-flex justify-content-between'>Price  <span className='fw-bold mb-5'>$ {details.price}</span></p>



                    </div>
                    <div style={{ backgroundColor: '##d9dfe5' }} className='col-lg-4 my-4 px-2 py-3'>
                        <h1 className='fs-1 fw-bold mt-5'>
                            PROCESS
                            OF BUYING

                        </h1>

                        <div className='my-5'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h1 style={{ fontSize: '140px', color: '#366e54' }} className='fw-bold me-1'>1</h1>
                                <div className=''>
                                    <p className='fs-6 fw-bold'>HOUSE VIEWING</p>
                                    <small className='fs-xs'>We are here to help you find the perfect place for your family. Depending on your needs, we'll suggest properties to view and book you in for your viewing.</small>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h1 style={{ fontSize: '140px', color: '#366e54' }} className='fw-bold me-1'>2</h1>
                                <div className=''>
                                    <p className='fs-6 fw-bold'>NEGOTIATING TERMS</p>
                                    <small className='fs-xs'>Once you've found the property of your dreams and are ready to place an offer, we will contact the seller and negotiate the best terms to suit your budget. </small>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h1 style={{ fontSize: '140px', color: '#366e54' }} className='fw-bold me-1'>3</h1>
                                <div className=''>
                                    <p className='fs-6 fw-bold'>CLOSE CARE-FREE</p>
                                    <small className='fs-xs'>We don't play around – that means that our bold and confident approach to closing results in you walking away with the keys to your new dream property.</small>
                                </div>
                            </div>
                        </div>

                        <Link to='/contact' style={{ textDecoration: 'none', color: '#73BF9C' }} className='mt-5'>
                            <button class="cta">
                                <span className=''>Contact Us For Buying </span>
                                <svg width="15px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>

                        </Link>
                    </div>




                </div>

            </div>

        </div>

    );
};

export default Details;