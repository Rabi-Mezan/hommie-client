import React from 'react';
import './OurQualities.css'

const OurQualities = () => {
    return (
        <div className='container-fluid px-lg-4' style={{ marginTop: "150px", backgroundColor: "#F6F6F6" }}>
            <div className='container-fluid  py-4'>
                <div>
                    <div>
                        <p style={{ color: '#73BF9C', backgroundColor: '#beeed8', width: '130px' }} className='text-center rounded'>OUR QUALITIES</p>
                        <h1 style={{ color: '#366e54' }} className='fw-bold'>Giving You Peace <br /> Of Mind</h1>
                    </div>
                    <div className='mt-5'>
                        <div className="quality row row-cols-lg-3 row-cols-1">
                            <div className="col my-3">
                                <i style={{ color: '#73BF9C' }} className="fas fa-heart fw-bold fs-1"></i>
                                <h4 className='my-1 fw-bold'>Comfortable</h4>
                                <p className='quality-des w-lg-75 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aspernatur alias assumenda sunt adipisci vel!</p>
                            </div>
                            <div className="quality col my-3">
                                <i style={{ color: '#73BF9C' }} className="fas fa-lock fw-bold fs-1"></i>
                                <h4 className='my-1 fw-bold'>Extra Security</h4>
                                <p className='quality-des  w-lg-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aspernatur alias assumenda sunt adipisci vel!</p>
                            </div>
                            <div className="quality col my-3">
                                <i style={{ color: '#73BF9C' }} className="fas fa-star fw-bold fs-1"></i>
                                <h4 className='my-1 fw-bold'>Luxury</h4>
                                <p className='quality-des  w-lg-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aspernatur alias assumenda sunt adipisci vel!</p>
                            </div>
                            <div className="quality col my-3">
                                <i style={{ color: '#73BF9C' }} className="fas fa-dollar-sign fw-bold fs-1"></i>
                                <h4 className='my-1 fw-bold'>Best Price</h4>
                                <p className='quality-des  w-lg-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aspernatur alias assumenda sunt adipisci vel!</p>
                            </div>
                            <div className="quality col my-3">
                                <i style={{ color: '#73BF9C' }} className="fas fa-map-marker-alt fw-bold fs-1"></i>
                                <h4 className='my-1 fw-bold'>Strategic Location</h4>
                                <p className='quality-des  w-lg-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aspernatur alias assumenda sunt adipisci vel!</p>
                            </div>
                            <div className=" col my-3">
                                <i style={{ color: '#73BF9C' }} className="fas fa-chart-pie fw-bold fs-1"></i>
                                <h4 className='my-1 fw-bold'>Efficent</h4>
                                <p className='quality-des  w-lg-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aspernatur alias assumenda sunt adipisci vel!</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurQualities;