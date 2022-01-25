import { jsonEval } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Recomend.css';



const Recomend = () => {
    const [homeData, setHomedata] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/recommended")
            .then(res => res.json())
            .then(data => {
                setHomedata(data)
            })
    }, [])

    return (
        <div className='container-fluid px-lg-4' style={{ marginTop: "80px" }}>
            <div>
                <div>
                    <p style={{ color: '#73BF9C', backgroundColor: '#beeed8', width: '85px' }} className='text-center rounded'>DISCOVER</p>
                    <h1 style={{ color: '#366e54' }} className='fw-bold'>Best Recomendation</h1>
                    <div className='recomend-text d-flex justify-content-between align-items-center'>
                        <p className='fs-6  w-lg-100 fw-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ullam, minus  iusto nostrum repellendus fugiat soluta  maxime  id fuga <br />  deleniti reprehenderit accusamus nesciunt! Voluptatibus commodi incidunt, sed earum illum ullam.</p>

                    </div>
                </div>
                <div className='row row-cols-1 row-cols-lg-4 g-2 g-lg-4 mt-5'>

                    {
                        homeData.map(home =>
                            <div>
                                <div class="col card p-2" >
                                    <img src={home.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{home.title}</h5>
                                        <small className='fw-light'>{home.description}</small>
                                        <div className='my-2 d-flex justify-content-between'>
                                            <strong style={{ color: '#73BF9C' }}>${home.price}</strong>
                                            <p><span><i class="fas fa-map-marker-alt fw-bold me-1 fs-4 fw-bold"></i></span>{home.Location}</p>
                                        </div>
                                        <Link to="/" className="btn btn-outline-dark btn-floating  w-100">See Details</Link>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                    <Link to='/' style={{ textDecoration: 'none', color: '#73BF9C' }} className='me-0 mt-4'>
                        <button class="cta">
                            <span className=''>See More</span>
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

export default Recomend;

