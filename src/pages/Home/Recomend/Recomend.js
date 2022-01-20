import React from 'react';
import { Link } from 'react-router-dom';
import './Recomend.css';


const homeData = [

    {
        id: 1,
        title: 'Penum griya asri',
        description: 'Lorem ipsum dolor',
        img: 'https://i.ibb.co/QvK9hnQ/home1.jpg',
        price: 25000,
        Location: 'Miami'

    },
    {
        id: 2,
        title: 'Penum kenchona asri',
        description: 'sit amet consectetur',
        img: 'https://i.ibb.co/CwcZtmz/home3.jpg',
        price: 35000,
        Location: 'Sydney'

    },
    {
        id: 3,
        title: 'Penum rakjel elit',
        description: 'Lorem ipsum dolor',
        img: 'https://i.ibb.co/BBbnnPN/home4.jpg',
        price: 33000,
        Location: 'Florida'

    }
]

const Recomend = () => {
    return (
        <div className='container-fluid px-lg-4' style={{ marginTop: "80px" }}>
            <div>
                <div>
                    <p style={{ color: '#73BF9C', backgroundColor: '#beeed8', width: '85px' }} className='text-center rounded'>DISCOVER</p>
                    <h1 style={{ color: '#366e54' }} className='fw-bold'>Best Recomendation</h1>
                    <div className='recomend-text d-flex justify-content-between align-items-center'>
                        <p className='fs-6 w-lg-100 fw-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ullam, minus  iusto nostrum repellendus fugiat soluta <br />  maxime  id fuga deleniti reprehenderit accusamus nesciunt! Voluptatibus commodi incidunt, sed earum illum ullam.</p>
                        <Link to='/' style={{ textDecoration: 'none', color: '#73BF9C' }} className=''>
                            <button class="cta">
                                <span>Learn More</span>
                                <svg width="15px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>

                        </Link>
                    </div>
                </div>
                <div className='row row-cols-1 row-cols-lg-3 g-2 g-lg-4 mt-5'>

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
                </div>
            </div>
        </div>
    );
};

export default Recomend;

