import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { login } = useFirebase()

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        login(data.email, data.password)
    }

    return (
        <div>
            <section class="h-100 h-custom py-5" style={{ backgroundColor: "#366e54" }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-8 col-xl-6">
                            <img src="https://i.ibb.co/FXRP5Kd/r-architecture-Y8-MJFQYYjh8-unsplash.jpg" class="w-100" style={{ borderTopLeftRadius: ".3rem", borderTopRightRadius: ".3rem;" }} alt='' />
                            <div class="card rounded-3">

                                <div class="card-body p-4 p-md-5">
                                    <h3 style={{ color: '#366e54' }} class="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login Here</h3>

                                    <form onSubmit={handleSubmit(onSubmit)} class="px-md-2">


                                        <div class="form-outline mb-4">
                                            <label class="form-label fw-bold" for="form3Example1q">Email</label>
                                            <input
                                                {...register("email", { required: true, maxLength: 20 })}
                                                type="email" id="form3Example1q" class="form-control" />

                                        </div>
                                        <div class="form-outline mb-4">
                                            <label class="form-label fw-bold" for="form3Example1q">Password</label>
                                            <input
                                                {...register("password", { required: true, maxLength: 20 })}
                                                type="password" id="form3Example1q" class="form-control" />

                                        </div>


                                        <div class=" d-flex justify-content-end mb-4">

                                            <small class="form-check-label" for="form1Example3"> New Here? <Link to='/register' className='fw-bold'>
                                                Register Please
                                            </Link> </small>
                                        </div>


                                        <button class="cta my-3 fw-bold">
                                            <span>Login</span>
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

export default Login;