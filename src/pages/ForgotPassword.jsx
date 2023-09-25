import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup'; //For Form Validation

const forgotPasswordSchema = Yup.object({
  email: Yup.string().email('Invalid Email').required('Email is required'),
});

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Meta title={'Forgot Password'} />
      <BreadCrumb title='Forgot Password' />
      <Container class1="forgot-password-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Reset Password</h3>
              <p className='text-center my-2 mb-3'>We will send you email to reset your password</p>
              <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column mt-4'>
                <div className="error">
                  {formik.touched.email && formik.errors.email ? (
                    <div>&nbsp;{formik.errors.email}</div>
                  ) : null}
                </div>
                <CustomInput
                  className="form-control custom-input mb-4"
                  type='email' name='email'
                  placeholder='Email'
                  id="email"
                  val={formik.values.email}
                  onCh={formik.handleChange('email')}
                  onBl={formik.handleChange('email')}
                />
                <div className="d-flex flex-column mt-4 justify-content-center gap-15 align-items-center">
                  <button className='button border-0' type='submit'>Submit</button>
                  <Link to='/login' className=''>Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ForgotPassword