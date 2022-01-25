import React from 'react';
import './About.css'
import bgimage from '../../images/about1.jpg'
import bgimage2 from '../../images/about3.jpg'
import bgimage3 from '../../images/about4.jpg'





const team = [

    {
        id: 1,
        name: "Mr XXX",
        img: 'https://this-person-does-not-exist.com/img/avatar-91942b18562b30754ed10dcbda98660d.jpg',
        desination: "CEO"
    },
    {
        id: 2,
        name: "Mr YYY",
        img: 'https://this-person-does-not-exist.com/img/avatar-1361dfe211b7226f8530d40645087c34.jpg',
        desination: "Lead Engineer"
    },
    {
        id: 3,
        name: "Mr ZZZ",
        img: 'https://this-person-does-not-exist.com/img/avatar-91942b18562b30754ed10dcbda98660d.jpg',
        desination: "Property Analytics"
    },
]

const About = () => {
    return (
        <div >
            <div className='my-5'>
                <h1 style={{ color: '#366e54' }} className='fs-1 fw-bold text-center '>ABOUT US</h1>
                <p className='w-75 text-center mx-auto fw-light '>Formed in late 1997 by Rajnish Kumar Shears and Ken Delery, Homee Realty Advisors began by focusing on shadow centers in front of Walmart Supercenters, and has since co-developed 23 projects with Walmart. </p>
            </div>
            {/* <img className='w-100 cover' src="https://i.ibb.co/5Ynxh4Z/etienne-beauregard-riverin-B0a-Cv-AVSX8-E-unsplash.jpg" alt="" /> */}

            <div
                style={{
                    backgroundImage: 'url(' + bgimage + ')',
                    backgroundSize: "cover",
                    height: "100vh",
                    width: "100vw",
                    color: "/f5f5f5"
                }}
                className='paralax img-fluid'></div>
            <div className='row my-5'>
                <section className='col-lg-12 col-12 '>
                    {/* <div
                        style={{
                            backgroundImage: 'url(' + bgimage3 + ')',
                            backgroundSize: "",
                            height: "100vh",
                            width: "50vw",
                            color: "#f5f5f5"
                        }}
                        className='paralax img-fluid'></div> */}
                </section>
                <section class="text-center d-flex align-items-center justify-content-center about col-lg-12 col-12  ">
                    <div class="container-fluid ">
                        <div class=" p-4">
                            <div class=" about-item wow lightSpeedIn" data-wow-offset="200" >
                                <div>
                                    <span class="fa fa-group p-2"></span>
                                </div>
                                <h4 className='text-dark fw-bold my-3'>OUR TEAM</h4>
                                <p class="lead fw-light">Formed in late 1997 by Rajnish Kumar Shears and Ken Delery, Homee Realty Advisors began by focusing on shadow centers in front of Walmart Supercenters, and has since co-developed 23 projects with Walmart. By the early 2000’s, Homee was assisting Lowe’s Home Improvement stores with the rollout of new locations in Texas, Louisiana, Arkansas, and elsewhere in the south. To date, Homee has completed 61 Lowes developments either as a developer or a broker.</p>
                                <div className='d-lg-flex gap-4'>
                                    <div class="profile-card text-center bg-light p-4 my-5 w-lg-25 h-25 rounded-3">
                                        <div class="profile-photo ">
                                            <img className='w-25 h-25' src="https://i.ibb.co/XjDqhw4/avatar-0bce659f1a615066eaa4e84e33490e09.jpg
https://i.ibb.co/xDdXF8c/avatar-bb87f62e565c7ebf4e4571055737ce31.jpg" class="img-fluid" alt='' />
                                        </div>
                                        <h3 class="pt-3 text-dark">Rajnish Kumar</h3>
                                        <p class="text-secondary">CEO and Founder</p>
                                        <div class="d-flex flex-row align-items-center justify-content-center">

                                            <button type="button" class="btn btn-outline-dark btn-floating m-1">
                                                <i class="fab fa-google"></i>
                                            </button>
                                            <button type="button" class="btn btn-outline-dark btn-floating m-1">
                                                <i class="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" class="btn btn-outline-dark btn-floating m-1">
                                                <i class="fab fa-twitter"></i>
                                            </button>


                                        </div>
                                    </div>
                                    <div class="profile-card text-center bg-light p-4 my-5 w-lg-25 h-25 rounded-3">
                                        <div class="profile-photo ">
                                            <img className='w-25 h-25' src="https://i.ibb.co/xDdXF8c/avatar-bb87f62e565c7ebf4e4571055737ce31.jpg" class="img-fluid" alt='' />
                                        </div>
                                        <h3 class="pt-3 text-dark">Mike Hassel</h3>
                                        <p class="text-secondary">Property Anlytics</p>
                                        <div class="d-flex flex-row align-items-center justify-content-center">

                                            <button type="button" class="btn btn-outline-dark btn-floating m-1">
                                                <i class="fab fa-google"></i>
                                            </button>
                                            <button type="button" class="btn btn-outline-dark btn-floating m-1">
                                                <i class="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" class="btn btn-outline-dark btn-floating m-1">
                                                <i class="fab fa-twitter"></i>
                                            </button>


                                        </div>
                                    </div>
                                    <div class="profile-card text-center bg-light p-4 my-5 w-lg-25 h-25 rounded-3">
                                        <div class="profile-photo ">
                                            <img className='w-25 h-25' src="https://i.ibb.co/CzqBSZ9/avatar-9b07c287b20bb751cc4f0210f6e2c3f9.jpg" class="img-fluid" alt='' />
                                        </div>
                                        <h3 class="pt-3 text-dark">Rachel Huetel</h3>
                                        <p class="text-secondary">Archetecture</p>
                                        <div class="d-flex flex-row align-items-center justify-content-center">

                                            <button type="button" class="btn btn-outline-dark btn-floating m-1">
                                                <i class="fab fa-google"></i>
                                            </button>
                                            <button type="button" class="btn btn-outline-dark btn-floating m-1">
                                                <i class="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" class="btn btn-outline-dark btn-floating m-1">
                                                <i class="fab fa-twitter"></i>
                                            </button>


                                        </div>
                                    </div>


                                </div>
                                <p class="lead fw-light mt-3">Homee Realty Advisors remains active in resolving retailers' site challenges via its retail brokerage operations. Homee continues to provide guidance and insight to its existing retail clients while adjusting to new challenges created by technology-centric retailers such as Amazon.</p>



                            </div>

                            <div class="clearfix visible-md-block visible-sm-block"></div>

                        </div>

                    </div>
                </section>
            </div>

            <section className='my-5 p-5'>
                <div
                    style={{
                        backgroundImage: 'url(' + bgimage2 + ')',
                        backgroundSize: "cover",
                        height: "100vh",
                        width: "80vw",
                        color: "/f5f5f5"
                    }}
                    className='paralax img-fluid ms-auto'>


                </div>
                <div className='our-heritage shadow'>
                    <h1 style={{ color: '#366e54' }} className='fw-bold fs-1'>Our Heritage</h1>
                    <hr />
                    <p>
                        Founded in 1997 by Charles Shears and Ken Delery, Homee Realty Advisors began developing “shadow anchored” retail centers positioned in front of Walmart Supercenters and Lowe's Home Improvement stores. Homee growth began in the Houston metro area, but quickly expanded into neighboring communities and states to meet tenant demand.

                    </p>

                    <small className='fw-light'>Homee realized that developing in secondary markets outside its Houston base allowed Homee to service the growth needs of numerous national retailers in underserved markets. Homee became proficient at navigating the various political climates and socioeconomic cultures that posed challenges to its retail clients.

                        Soon, Homee ability to work with community leaders in these secondary markets led to larger development opportunities.</small>
                </div>


            </section>
        </div>
    );
};

export default About;