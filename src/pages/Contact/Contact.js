import React from 'react';
import Mapbox from '../Home/Details/Mapbox';
import './Contact'

const Contact = () => {
    return (
        <div className='container-fluid px-lg-5' style={{ marginTop: "80px" }}>
            <div class="contact3 py-5">
                <div class="row no-gutters">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="card-shadow">
                                    <img src="https://media.istockphoto.com/photos/smiling-female-customer-service-executive-talking-on-headset-at-desk-picture-id665430866?k=20&m=665430866&s=170667a&w=0&h=u_5KjNXNKO3PQFF_gdQC4dQYJAbeWSikxZxAB0fywqo=" class="img-fluid" alt='' />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-box ml-3">
                                    <p style={{ color: '#73BF9C', backgroundColor: '#beeed8', width: '85px' }} className='text-center rounded'>CONTACT</p>
                                    <h1 style={{ color: '#366e54' }} className='fw-bold'>Contact Us For Booking Your Favourite </h1>
                                    <form class="mt-4">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group mt-2">
                                                    <input class="form-control" type="text" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group mt-2">
                                                    <input class="form-control" type="email" placeholder="Email address" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group mt-2">
                                                    <input class="form-control" type="text" placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group mt-2">
                                                    <textarea class="form-control" rows="3" placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 my-4">
                                                <button class="cta">
                                                    <span className=''>Submit </span>
                                                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                                                        <path d="M1,5 L11,5"></path>
                                                        <polyline points="8 1 12 5 8 9"></polyline>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="card mt-4 border-0 mb-4">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4">
                                            <div class="card-body d-flex align-items-center c-detail pl-0">
                                                <div class="me-3 align-self-center">
                                                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt='' />
                                                </div>
                                                <div class="">
                                                    <h6 class="font-weight-medium">Address</h6>
                                                    <p class="">955 Stonybrook St. <br />
                                                        Westerville, OH 43081</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <div class="card-body d-flex align-items-center c-detail">
                                                <div class="me-3 align-self-center">
                                                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" alt='' />
                                                </div>
                                                <div class="">
                                                    <h6 class="font-weight-medium">Phone</h6>
                                                    <a className='text-decoration-none text-dark fs-italic' href="tel:5554280940">
                                                        <span style={{ color: '#73BF9C' }} className='font'>Click to call us at </span>
                                                        <br />
                                                        555-428-0940</a>
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <div class="card-body d-flex align-items-center c-detail">
                                                <div class="me-3 align-self-center">
                                                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt='' />
                                                </div>
                                                <div class="">
                                                    <h6 class="font-weight-medium">Email</h6>
                                                    <p class="">
                                                        info@homeeproperty.com
                                                        <br /> support@homeeproperty.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;