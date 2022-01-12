import React from 'react';
import './Property.css'

const Property = () => {
    return (
        <div style={{ marginTop: "150px" }}>
            <div class="container overflow-hidden">
                <div class="row gy-5">
                    <div class="col-lg-6 col-12">
                        <div class="">
                            <div className='overlap-section'>
                                <i style={{ color: '#73BF9C' }} className="fas fa-star fw-bold fs-2 mb-2"></i>
                                <h1>4.8</h1>
                                <p className='fw-bold' style={{ color: '#366e54' }}>Top Rated Property</p>
                            </div>
                            <img className='property-img' src="https://i.ibb.co/4gcvQbL/sidekix-media-BAVam-y-9-Wg-unspla.jpg" alt="" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="p-3">

                            <div>
                                <p style={{ color: '#73BF9C', backgroundColor: '#beeed8', width: '140px' }} className='text-center rounded'>PROPERTY VALUE</p>
                                <h1 style={{ color: '#366e54' }} className='fw-bold'>How Much Is Your <br /> Property Worth Now ??
                                    <br /> <span> Ask Our Experts..</span></h1>
                                <p className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti id nostrum neque tempora! Numquam sit fugiat magnam nam doloremque minus aperiam placeat molestiae, similique tempore delectus, sint, libero nihil voluptatum!</p>

                                <button className='know-more'>Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Property;