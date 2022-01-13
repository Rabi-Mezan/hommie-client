import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/offer.jpg'

const Offer = () => {
    return (
        <div style={{ marginTop: "150px", backgroundColor: "#F6F6F6", paddingTop: "30px", paddingBottom: '100px' }}>
            <div style={{ marginTop: "150px" }}>
                <div class="container overflow-hidden">
                    <div class="row gy-5">
                        <div class="col-lg-6 col-12">
                            <div class="p-3">

                                <div>
                                    <p style={{ color: '#73BF9C', backgroundColor: '#beeed8', width: '140px' }} className='text-center rounded'>OFFERS</p>
                                    <h1 style={{ color: '#366e54' }} className='fw-bold'>For More Offers Join Us</h1>
                                    <p className='mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti id nostrum neque tempora! Numquam sit fugiat magnam nam doloremque minus aperiam placeat molestiae, similique tempore delectus, sint, libero nihil voluptatum!</p>

                                    <button style={{ width: '150px' }} className='btn btn-outline-dark btn-floating  mt-3'>See More Offers</button>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-6 col-12">
                            <div class="">
                                <div className='overlap-section'>

                                    <h1>30 <i style={{ color: '#73BF9C' }} class="fas fa-percent fs-1"></i></h1>
                                    <p className='fw-bold fs-2' style={{ color: '#366e54' }}>OFF !!</p>
                                </div>
                                <img className='w-100' src={img} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;

