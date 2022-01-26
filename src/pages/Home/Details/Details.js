import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {

    const [details, setDetails] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://serene-ridge-73317.herokuapp.com/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data);
            })
    }, [])

    return (
        <div className='  container my-5 py-lg-5'>
            <div className='row '>
                <div className='shadow paralax col-lg-6 col-12 p-2'
                    style={{
                        backgroundImage: `url(${details.img})`,
                        backgroundSize: "cover",
                        height: "70vh",
                        width: "100vw",
                        color: "#f5f5f5",
                        padding: '10px'
                    }}

                >


                </div>
                <div className='col-lg-6 col-12 me-auto my-4  '>
                    <h1 className='mt-3 fw-bolder fs-1 text-uppercase'>{details.title}</h1>
                    <p className='my-5 fs-3 fw-bold'><i class="fas fa-map-marker-alt  fw-bold text-success fs-2  fw-bold"></i>  {details.Location}</p>

                    <p className=' fs-5 fs-ex-6'>  <span>{details.full_description}</span> </p>

                    <h4 className='mt-5'> <span className='fst-italic '>Property Details</span></h4>
                    <hr />

                    <p className='d-flex justify-content-between'>Price  <span className='fw-bold'>$ {details.price}</span></p>
                    <p className='d-flex justify-content-between mb-5'>Available Space  <span className='fw-bold'>{details.space} SF</span></p>

                    <Link to='/' style={{ textDecoration: 'none', color: '#73BF9C' }} className='mt-5'>
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
    );
};

export default Details;