import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Sellproperty = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {


        console.log(data);
    }


    return (
        <div style={{ height: "100vh" }} className='px-lg-4 py-lg-5'>
            <h1 style={{ color: '#366e54' }} className='fw-bold'>Advertise Your Property To Sell  </h1>

            <div class="card-body p-4 p-md-5">
                <h3 style={{ color: '#366e54' }} class="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login Here</h3>

                <form onSubmit={handleSubmit(onSubmit)} class="px-md-2 d-flex gap-3">


                    <div class="form-outline mb-4 w-50">
                        <label class="form-label fw-bold" for="form3Example1q">Title</label>
                        <input
                            {...register("email", { required: true, maxLength: 20 })}
                            type="email" id="form3Example1q" class="form-control" />

                    </div>
                    <div class="form-outline mb-4 w-50">
                        <label class="form-label fw-bold" for="form3Example1q">Location</label>
                        <input
                            {...register("password", { required: true, maxLength: 20 })}
                            type="password" id="form3Example1q" class="form-control" />

                    </div>
                    <div class="form-outline mb-4 w-50">
                        <label class="form-label fw-bold" for="form3Example1q">Location</label>
                        <input
                            {...register("password", { required: true, maxLength: 20 })}
                            type="password" id="form3Example1q" class="form-control" />

                    </div>
                    <div class="form-outline mb-4 w-50">
                        <label class="form-label fw-bold" for="form3Example1q">Location</label>
                        <input
                            {...register("password", { required: true, maxLength: 20 })}
                            type="password" id="form3Example1q" class="form-control" />

                    </div>


                    <br />

                    <button class="cta my-3 fw-bold">
                        <span>Post Add</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>

                </form>


            </div>
        </div>
    );
};

export default Sellproperty;