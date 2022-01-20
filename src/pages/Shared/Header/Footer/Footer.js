import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#366e54' }} className='text-left text-dark px-lg-3'>
            <div class="container-fuild mx-2 p-4">

                <section class="mb-4">

                    <Link class="btn btn-outline-light btn-floating m-1" to="/" role="button"
                    ><i class="fab fa-facebook-f"></i
                    ></Link>


                    <Link class="btn btn-outline-light btn-floating m-1" to="/" role="button"
                    ><i class="fab fa-twitter"></i
                    ></Link>


                    <Link class="btn btn-outline-light btn-floating m-1" to="/" role="button"
                    ><i class="fab fa-google"></i
                    ></Link>


                    <Link class="btn btn-outline-light btn-floating m-1" to="/" role="button"
                    ><i class="fab fa-instagram"></i
                    ></Link>



                </section>

                <section class="my-5">
                    <form action="">

                        <div class="row d-flex justify-content-start align-items-baseline my-4">

                            <div class="col-auto">
                                <p class=" fs-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>

                            <div class="col-md-5 col-12">

                                <div class="form-outline form-white  ">
                                    <input type="email" id="form5Example21" class="form-control" />
                                    <label class="form-label mb-2" for="form5Example21 mt-2">Email address</label>
                                </div>
                            </div>

                            <div class="col-auto">

                                <button type="submit" class="btn btn-outline-light ">
                                    Subscribe
                                </button>
                            </div>

                        </div>

                    </form>
                </section>

                <section class="mb-4 mt-3 w-lg-75">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </section>



                <section class="">

                    <div class="row  mt-5 ">

                        <div class="col-lg-3 col-md-6 col-4 mb-4 mb-md-0">
                            <h5 class="text-uppercase fw-bold">Support</h5>

                            <ul class="list-unstyled  mb-0">
                                <li>
                                    <Link style={{ textDecoration: 'none' }} to="/" class="text-dark">Contact</Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: 'none' }} to="/" class="text-dark">Pricing</Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: 'none' }} to="/" class="text-dark">Create a free account</Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: 'none' }} to="/" class="text-dark">Location</Link>
                                </li>
                            </ul>
                        </div>

                        <div class=" hidden col-lg-3 col-md-6 col-4 mb-4 mb-md-0">
                            <h5 class="text-uppercase fw-bold">SERVICE</h5>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <Link style={{ textDecoration: 'none' }} to="/" class="text-dark">Home Repair</Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: 'none' }} to="/" class="text-dark">Cleaning Service</Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: 'none' }} to="/" class="text-dark">Painting Service</Link>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 col-4 mb-4 mb-md-0">
                            <h5 class="text-uppercase fw-bold">COMPANY</h5>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <Link style={{ textDecoration: 'none' }} to="/" class="text-dark">Blogs</Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: 'none' }} to="/" class="text-dark">Career</Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: 'none' }} to="/" class="text-dark">About Us</Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: 'none' }} to="/" class="text-dark">Reffer & Award</Link>
                                </li>
                            </ul>
                        </div>



                        <div class="col-lg-3 col-md-6 col-4 mb-4 mb-md-0">
                            <h5 class="text-uppercase fw-bold">LEGAL</h5>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <Link style={{ textDecoration: 'none' }} to="/" class="text-dark">Privacy</Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: 'none' }} to="/" class="text-dark">Terms</Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: 'none' }} to="/" class="text-dark">Conditions</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                </section>

            </div>



            <div class="text-center mt-5 fw-bold fs-6 p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2022 Copyright:
                <span
                    class="text-dark " to="https://mdbootstrap.com/">Rdev// Ravi-Mezan</span>
            </div>

        </div>
    );
};

export default Footer;