import React from 'react';
import { useForm } from "react-hook-form";


const Registration = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }


    return (
        <div>

            <section class="h-100 h-custom" style={{ backgroundColor: "#366e54" }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-8 col-xl-6">
                            <div class="card rounded-3">
                                <img src="https://i.ibb.co/fqXbYRm/r-architecture-2g-Dwl-Iim3-Uw-unsplash-1.jpg" class="w-100" style={{ borderTopLeftRadius: ".3rem", borderTopRightRadius: ".3rem;" }} alt='' />
                                <div class="card-body p-4 p-md-5">
                                    <h3 style={{ color: '#366e54' }} class="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                                    <form onSubmit={handleSubmit(onSubmit)} class="px-md-2">

                                        <div class="form-outline mb-4">
                                            <input
                                                {...register("name", { required: true, maxLength: 20 })}
                                                type="text" id="form3Example1q" class="form-control" />
                                            <label class="form-label" for="form3Example1q">Name</label>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <input
                                                {...register("email", { required: true, maxLength: 20 })}
                                                type="email" id="form3Example1q" class="form-control" />
                                            <label class="form-label" for="form3Example1q">Email</label>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <input
                                                {...register("password", { required: true, maxLength: 20 })}
                                                type="password" id="form3Example1q" class="form-control" />
                                            <label class="form-label" for="form3Example1q">Password</label>
                                        </div>





                                        <button class="cta fw-bold">
                                            <span>Register</span>
                                            <svg width="15px" height="10px" viewBox="0 0 13 10">
                                                <path d="M1,5 L11,5"></path>
                                                <polyline points="8 1 12 5 8 9"></polyline>
                                            </svg>
                                        </button>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Registration;