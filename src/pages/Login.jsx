import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as Yup from 'yup'; //For Form Validation
import { loginUser } from '../features/user/UserSlice';

const loginSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            dispatch(loginUser(values))
            formik.resetForm();
        },
    });
    return (
        <>
            <Meta title={'Login'} />
            <BreadCrumb title='Login' />
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="auth-card ">
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column mt-4'>
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
                                <div className="my-2 ms-auto">
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
            </Container>
        </>
    )
}

export default Login