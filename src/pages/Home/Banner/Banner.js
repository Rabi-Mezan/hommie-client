import React, { useState } from 'react';
import './Banner.css'
import img from '../../../images/banner.png'
import Buy from './Buy';
import Rent from './Rent';
import { Link } from 'react-router-dom';


const Banner = () => {
    const [control, setControl] = useState('buy');

    return (
        <div class=" banner">
            <div class="banner-container pt-5 row">
                <div class="banner-text mt-5 ms-lg-5 col-lg-5 ">

                    <p style={{ color: '#73BF9C', backgroundColor: '#beeed8', width: '85px' }} className='text-center rounded'>REALSTATE</p>
                    <h2 className='fs-1 fw-bold'>Let's Hunt For Your <br />
                        Dream Residence</h2>
                    <p className='fs-6 fw-light'>We are very happy to share that we are the best in the market Because we are providing our clients with excellent service via strategic and timely execution</p>
                    <ul class="nav nav-tabs">
                        <li onClick={() => setControl('buy')} class="nav-item">
                            <button class="nav-link text-dark active" aria-current="page" >Buy</button>
                        </li>
                        <li onClick={() => setControl('rent')} class="nav-item">
                            <button class="nav-link text-dark" >Rent</button>
                        </li>
                    </ul>
                    {
                        control === 'buy' && <Buy></Buy>
                    }
                    {
                        control === 'rent' && <Rent></Rent>
                    }

                </div>
                <div class="banner-img col-lg-6 ms-auto">
                    <img className='banner-img w-100  ms-auto ' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;