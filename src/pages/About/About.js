import React from 'react';
import './About.css'
import bgimage from '../../images/about1.jpg'





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
                <p className='w-75 text-center mx-auto fw-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nam, sit quasi similique commodi adipisci tempore nostrum ad aut, odio autem impedit eveniet velit, quos nobis est laboriosam sint. Unde!</p>
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
                <section className='col-lg-6 col-12 '>
                    <img className='img-fluid my-5 p-4' src="https://i.ibb.co/KrGtQ54/priscilla-du-preez-MXRk-GKLMf-Do-unsplash.jpg" alt="" />
                </section>
                <section class="text-center d-flex align-items-baseline justify-content-center about col-lg-6 col-12  ">
                    <div class="container-fluid ">
                        <div class=" p-4">
                            <div class=" about-item wow lightSpeedIn" data-wow-offset="200" >
                                <div>
                                    <span class="fa fa-group p-2"></span>
                                </div>
                                <h4 className='text-dark fw-bold my-3'>OUR TEAM</h4>
                                <p class="lead fw-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                <div className='d-lg-flex gap-4'>
                                    <div class="profile-card text-center bg-light p-4 my-5 w-lg-25 h-25 rounded-3">
                                        <div class="profile-photo ">
                                            <img className='w-25 h-25' src="https://this-person-does-not-exist.com/img/avatar-1361dfe211b7226f8530d40645087c34.jpg" class="img-fluid" alt='' />
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
                                            <img className='w-25 h-25' src="https://this-person-does-not-exist.com/img/avatar-91942b18562b30754ed10dcbda98660d.jpg" class="img-fluid" alt='' />
                                        </div>
                                        <h3 class="pt-3 text-dark">Rajnish Kumar</h3>
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
                                </div>




                            </div>

                            <div class="clearfix visible-md-block visible-sm-block"></div>

                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;