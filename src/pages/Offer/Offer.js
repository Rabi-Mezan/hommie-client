import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/offer.jpg'

const Offer = () => {
    return (
        <div style={{ marginTop: "150px", backgroundColor: "#F6F6F6", paddingTop: "30px", paddingBottom: '100px' }} className='px-lg-4'>
            <div style={{ marginTop: "150px" }}>
                <div class="container-fuild mx-3 overflow-hidden">
                    <div class="row gy-5">
                        <div class="col-lg-6 col-12">
                            <div class="p-3">

                                <div>
                                    <p style={{ color: '#73BF9C', backgroundColor: '#beeed8', width: '70px' }} className='text-center rounded'>OFFERS</p>
                                    <h1 style={{ color: '#366e54' }} className='fw-bold'>For More Offers Join Us</h1>
                                    <p className='mb-3 fw-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti id nostrum neque tempora! Numquam sit fugiat magnam nam doloremque minus aperiam placeat molestiae, similique tempore delectus, sint, libero nihil voluptatum!</p>

                                    <button style={{ width: '150px' }} className='btn btn-outline-dark btn-floating fw-bold  mt-3'>See More Offers</button>
                                </div>
                            </div>

                        </div>
                        <div

                            class="col-lg-6 col-12">
                            <div class="">
                                <div className='overlap-section'>

                                    <h1> <span className='fw-bold' style={{ fontFamily: 'Oswald', fontSize: '70px', color: 'red' }}>30</span> <i style={{ color: '#73BF9C' }} class="fas fa-percent fs-1"></i></h1>
                                    <p className='fw-bold fs-2' style={{ color: '#366e54' }}>Off !!</p>
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

