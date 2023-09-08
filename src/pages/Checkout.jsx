import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'

import watch from '../images/watch.jpg'
import Container from '../components/Container';

const Checkout = () => {
    return (
        <>
            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className='website-name'>Dev</h3>
                            <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">                                <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link className='text-dark' to='/cart'>Cart </Link></li> &nbsp;/
                                <li className="breadcrumb-item active" aria-current="page">Information</li>&nbsp;/
                                <li className="breadcrumb-item active">Shipping</li> &nbsp;/
                                <li className="breadcrumb-item active" aria-current="page">Payment</li>
                            </ol>
                            </nav>
                            <h4 className="title fs-4 mt-4">
                                Contact Information
                            </h4>
                            <p className="user-details total">
                                Roshan Nyaupane(roshannyaupane01@gmail.com)
                            </p>
                            <h4 className='mb-3'>Shipping Address</h4>
                            <form action="" className='d-flex flex-wrap gap-15 justify-content-between'>
                                <div className="w-100">
                                    <select name="" className='form-control form-select py-2 shadow-none' id="" defaultValue='select-country'>
                                        <option value="select-country" disabled>Select Country</option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder='Firstname' className="form-control py-2" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder='Lastname' className="form-control py-2" />
                                </div>
                                <div className="w-100">
                                    <input type="text" placeholder='Adderss' className="form-control py-2" />
                                </div>
                                <div className="w-100">
                                    <input type="text" placeholder='Apartment' className="form-control py-2" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder='City' className="form-control py-2" />
                                </div>
                                <div className="flex-grow-1">
                                    <select name="" className='form-control form-select py-2' id="" defaultValue='select-state'>
                                        <option value="select-state" disabled>Select State</option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder='Zipcode' className="form-control py-2" />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to='/cart' className='text-dark'><BiArrowBack className='me-2' />Return to Cart</Link>
                                        <Link to='/cart' className='button'>Continue to Shipping</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="border-bottom py-4">
                            <div className="d-flex gap-10 mb-2 align-items-center">
                                <div className="w-75 gap-10 d-flex">
                                    <div className="w-25 position-relative">
                                        <span style={{ top: '-10px', right: '2px' }} className="badge bg-secondary text-white rounded-circle  position-absolute">1</span>
                                        <img src={watch} alt="product image" className='img-fluid' />
                                    </div>
                                    <div className="">
                                        <h5 className="total-price">title</h5>
                                        <p className='total-price'>sajnsafn</p>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className='total'>$100</h5>
                                </div>
                            </div>
                        </div>

                        <div className=" border-bottom py-4 ">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className='total'>Subtotal</p>
                                <h5 className='total-price'>$1000</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className='mb-0 total'>Shipping</p>
                                <h5 className='mb-0 total-price'>$1000</h5>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-4">
                            <h4 className='total fs-4'>Total</h4>
                            <h5 className='total-price'>$1000</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Checkout