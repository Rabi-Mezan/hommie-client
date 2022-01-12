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
            <div class="banner-container container-fuild d-flex  align-items-center">
                <div class=" ms-5 banner-text w-75">

                    <p style={{ color: '#73BF9C' }} className=''>REALSTATE</p>
                    <h2 className='fs-1 fw-bold'>Let's hunt for your <br />
                        dream residence</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda repudiandae laboriosam odio iste earum.</p>
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
                <div class="banner-img w-75">
                    <img className='w-100 ms-auto' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;