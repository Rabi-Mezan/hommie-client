import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {

    const [details, setDetails] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data);
            })
    }, [])

    return (
        <div className='container my-5 py-5'>
            <div className='row '>
                <div className='col-lg-6 col-12'>
                    <img className='w-100 mx-auto' src={details.img} alt="" />
                    <h1 className='my-2'>{details.title}</h1>
                </div>
                <div className='col-lg-6 col-12'>
                    <h4>Property Details</h4>
                    <hr />
                    <p>Location : {details.Location}</p>
                    <p>Price: ${details.price}</p>

                </div>
            </div>
        </div>
    );
};

export default Details;