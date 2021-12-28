import React from 'react';
import './Banner.css'
import img from '../../../images/banner.png'

const Banner = () => {
    return (
        <div class=" banner">
            <div class=" container d-flex  align-items-center">
                <div class="mb-5  w-75">

                    <p style={{ color: '/73BF9C' }} className=''>REALSTATE</p>
                    <h2 className='fs-1 fw-bold'>Let's hunt for your <br />
                        dream residence</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda repudiandae laboriosam odio iste earum.</p>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Buy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Rent</a>
                        </li>
                    </ul>
                    <div className='d-flex justify-content-between bg-white align-items-center p-3'>
                        <div>
                            <p>Location</p>
                        </div>
                        <div>
                            <p>Type</p>
                        </div>
                        <div>
                            <p>Price Range</p>
                        </div>
                        <div>
                            <button id='log-in'>Search</button>
                        </div>
                    </div>
                </div>
                <div class=" w-75">
                    <img className='w-100 ms-auto' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;