import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';


const SignUp = () => {
    return (
        <>
            <Meta title={'Sign Up'} />
            <BreadCrumb title='Sign Up' />
            <Container class1="sign-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Sign Up</h3>
                            <form action="" className='d-flex flex-column gap-15 mt-4'>
                                <CustomInput
                                    className="form-control custom-input" type='text' name='name' placeholder='Name' />
                                <CustomInput
                                    className="form-control custom-input" type='email' name='email' placeholder='Email' />
                                <CustomInput
                                    className="form-control custom-input" type='tel' name='mobile' placeholder='Mobile Number' />
                                <CustomInput
                                    className="form-control custom-input" type='password' name='password' placeholder='Password' />

                                <div className="mt-1">
                                </div>
                                <div className="d-flex flex-column mt-2 justify-content-center gap-15 align-items-center">
                                    <button className='button border-0' type='submit'>Signup</button>
                                    <small className='text-secondary my-3 '>Already Have Account? <Link to='/login' className='fs-6'>Login</Link> </small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SignUp