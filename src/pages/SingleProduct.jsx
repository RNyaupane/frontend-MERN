import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";

const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    return (
        <>
            <Meta title={'Dynamic Product Name'} />
            <BreadCrumb title='Dynamic Product Name' />
            <div className="main-products-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            
                        </div>
                        <div className="col-6">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-white p-3">
                                <h4>Description</h4>
                                <p>
                                    Product Description goes here dynamically.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div className="">
                                        <h4 className='mb-2' >Customer Reviews</h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor='#ffd700'
                                            />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && (
                                            <div className="">
                                                <a href='#' className='text-decoration-underline'>Write a Review</a>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="review-form py-4">
                                    <h4 className='mb-2' >Write a review</h4>
                                    <form action="" className='d-flex flex-column gap-15'>

                                        <div className="">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={true}
                                                activeColor='#ffd700'
                                            />
                                        </div>
                                        <div className="">
                                            <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Message'></textarea>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className='button border-0' type='submit'>Submit Review</button>
                                        </div>
                                    </form>
                                    <div className="reviews mt-4">
                                        <div className="review">
                                            <div className="d-flex gap-10 align-items-center">
                                            <h6 className='mb-0'>Roshan Nyaupane</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={true}
                                                activeColor='#ffd700'
                                            />
                                            </div>
                                            <p className='mt-3' >Hello, I like the product very much but I have doubt about the quality of product and price of the product.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Popular Products
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct