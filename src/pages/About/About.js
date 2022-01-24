import React from 'react';
import './About.css'
import bgimage from '../../images/about1.jpg'

const About = () => {
    return (
        <div>
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
                    color: "#f5f5f5"
                }}
                className='paralax img-fluid'></div>
            <div className='row my-5'>
                <section className='col-lg-6 col-12 '>
                    <img className='img-fluid p-4' src="https://i.ibb.co/KrGtQ54/priscilla-du-preez-MXRk-GKLMf-Do-unsplash.jpg" alt="" />
                </section>
                <section class="text-center about col-lg-6 col-12  ">
                    <div class="container-fluid ">
                        <div class="row p-4">
                            <div class="col-lg-12 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
                                <div>
                                    <span class="fa fa-group"></span>
                                </div>
                                <h4 className='text-dark fw-bold my-1'>OUR TEAM</h4>
                                <p class="lead fw-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                            </div>
                            <div class="col-lg-12 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
                                <span class="fa fa-info"></span>
                                <h2>Section 2 </h2>
                                <p class="lead fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel tenetur laborum quam odit corporis dolorem mollitia cum reiciendis fugit nihil, illo architecto incidunt eius quibusdam suscipit nemo molestiae numquam. </p>
                            </div>
                            <div class="clearfix visible-md-block visible-sm-block"></div>
                            <div class="col-lg-12 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
                                <span class="fa fa-file"></span>
                                <h2>Section 3</h2>
                                <p class="lead fw-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;