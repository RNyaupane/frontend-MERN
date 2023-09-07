import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    return (
        <>
            <Meta title={'Reset Password'} />
            <BreadCrumb title='Reset Password' />
            <div className="reset-password-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Reset Password </h3>
                                <form action="" className='d-flex flex-column gap-15 mt-4'>
                                    <div className="">
                                        <input type='password' name='password' placeholder='New Password' className="form-control py-2" />
                                    </div>
                                    <div className="">
                                        <input type='password' name='confirmPassword' placeholder='Confirm New Password' className="form-control py-2" />
                                    </div>
                                    <div className="mt-1">
                                    </div>
                                    <div className="d-flex flex-column mt-2 justify-content-center gap-15 align-items-center">
                                        <button className='button border-0' type='submit'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword