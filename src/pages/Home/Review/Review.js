import React from 'react';
import { Link } from 'react-router-dom';
import './Review.css'

const Reviews = [
    {
        id: 1,
        title: 'They are the best in the bussiness!',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit  Quasi ullam, minus  iusto nostrum repellendus fugiat soluta maxime',
        img: 'https://i.ibb.co/cD67VjB/avatar-f1868468c8c3cbfbae550d3fef11ae2c.jpg',
        name: 'Mrs Morris',
        address: 'Miami'
    },
    {
        id: 2,
        title: 'They are the best in the bussiness!',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit  Quasi ullam, minus  iusto nostrum repellendus fugiat soluta maxime',
        img: 'https://i.ibb.co/sRX7vjT/avatar-49a85f5eda7177504359c397f8acec90.jpg',
        name: 'Jhon Dee',
        address: 'New York'
    },
    {
        id: 3,
        title: 'They are the best in the bussiness!',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit  Quasi ullam, minus  iusto nostrum repellendus fugiat soluta maxime',
        img: 'https://i.ibb.co/9WzFqRb/avatar-be831e0f9c515746db5d4c31a668ecb6.jpg',
        name: 'Karolina Json',
        address: 'Jackson'
    }
]

const Review = () => {
    return (
        <div className='container-fuild px-lg-4 p-3' style={{ marginTop: "150px" }}>
            <div>
                <div>
                    <p style={{ color: '#73BF9C', backgroundColor: '#beeed8', width: '120px' }} className='text-center rounded'>TESTIMONIALS</p>
                    <h1 style={{ color: '#366e54' }} className='fw-bold'>What People Say <br /> About Us !</h1>
                    <div className='recomend-text d-flex justify-content-between align-items-center'>
                        <p className='fs-6 fw-normal w-lg-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit  Quasi ullam minus  iusto nostrum repellendus fugiat soluta maxime</p>
                        <Link to='/' style={{ textDecoration: 'none', color: '#73BF9C' }} className=''>
                            <button class="cta">
                                <span>All Reviews</span>
                                <svg width="15px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>

                        </Link>
                    </div>
                </div>
                <div className='row row-cols-1 p-1 row-cols-lg-3 g-2 g-lg-4 mt-5'>



                    {
                        Reviews.map(review =>
                            <div>
                                <div class="col card p-2" >
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{review.title}</h5>
                                        <small className='fw-normal w-75 my-1'>{review.description}</small>
                                        <div className='my-2 d-flex align-items-center '>
                                            <img style={{ border: '5px solid #73BF9C' }} src={review.img} className=" mt-2 h-25 w-25 rounded-pill" alt="..." />
                                            <div className='ms-2'>
                                                <h3 className='fs-6 fw-bold'> {review.name}</h3>
                                                <p className='' style={{ fontSize: '12px', marginTop: '-5px' }} >{review.address}</p>
                                            </div>
                                        </div>
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

export default Review;