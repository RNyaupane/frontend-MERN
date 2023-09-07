import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Meta title={'Login'} />
            <BreadCrumb title='Login' />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action="" className='d-flex flex-column gap-15 mt-4'>
                                <div className="">
                                    <input type='email' name='email' placeholder='Email' className="form-control py-2" />
                                </div>
                                <div className="">
                                    <input type='password' name='password' placeholder='Password' className="form-control py-2" />
                                </div>
                                <div className="mt-1">
                                    <Link to='/forgot-password'>Forgot Password?</Link>
                                </div>
                                <div className="d-flex mt-4 justify-content-center gap-15 align-items-center">
                                    <button className='button border-0' type='submit'>Login</button>
                                    <Link to='/signup' className='button signup'>SignUp</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login