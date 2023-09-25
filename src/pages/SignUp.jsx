import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as Yup from 'yup'; //For Form Validation

const signUpSchema = Yup.object({
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string().required('Lastname is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    mobile: Yup.string().required('Mobile number is required'),
    password: Yup.string().required('Password is required'),
});

const SignUp = () => {

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            password: '',
        },
        validationSchema:signUpSchema,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
            <Meta title={'Sign Up'} />
            <BreadCrumb title='Sign Up' />
            <Container class1="sign-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Sign Up</h3>
                            <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column  mt-4'>
                                <div className="error">
                                    {formik.touched.firstname && formik.errors.firstname ? (
                                        <div>&nbsp;{formik.errors.firstname}</div>
                                    ) : null}
                                </div>
                                <CustomInput
                                    className="form-control custom-input mb-3"
                                    type='text'
                                    name='firstname'
                                    placeholder='Firstname'
                                    id="firstname"
                                    val={formik.values.firstname}
                                    onCh={formik.handleChange('firstname')}
                                    onBl={formik.handleChange('firstname')}
                                />
                                <div className="error">
                                    {formik.touched.lastname && formik.errors.lastname ? (
                                        <div>&nbsp;{formik.errors.lastname}</div>
                                    ) : null}
                                </div>
                                <CustomInput
                                    className="form-control custom-input mb-3"
                                    type='text'
                                    name='lastname'
                                    placeholder='Lastname'
                                    id="lastname"
                                    val={formik.values.lastname}
                                    onCh={formik.handleChange('lastname')}
                                    onBl={formik.handleChange('lastname')}

                                />
                                <div className="error">
                                    {formik.touched.email && formik.errors.email ? (
                                        <div>&nbsp;{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <CustomInput
                                    className="form-control custom-input mb-3"
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    id="email"
                                    val={formik.values.email}
                                    onCh={formik.handleChange('email')}
                                    onBl={formik.handleChange('email')}
email
                                />
                                <div className="error">
                                    {formik.touched.mobile && formik.errors.mobile ? (
                                        <div>&nbsp;{formik.errors.mobile}</div>
                                    ) : null}
                                </div>
                                <CustomInput
                                    className="form-control custom-input mb-3"
                                    type='tel'
                                    name='mobile'
                                    placeholder='Mobile Number'
                                    id="mobile"
                                    val={formik.values.mobile}
                                    onCh={formik.handleChange('mobile')}
                                    onBl={formik.handleChange('mobile')}

                                />
                                <div className="error">
                                    {formik.touched.password && formik.errors.password ? (
                                        <div>&nbsp;{formik.errors.password}</div>
                                    ) : null}
                                </div>
                                <CustomInput
                                    className="form-control custom-input mb-3"
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    id="password"
                                    val={formik.values.password}
                                    onCh={formik.handleChange('password')}
                                    onBl={formik.handleChange('password')}

                                />
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