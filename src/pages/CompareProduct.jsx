import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Color from '../components/Color';
import Container from '../components/Container';

const CompareProduct = () => {
    return (
        <>
            <Meta title={'Compare Products'} />
            <BreadCrumb title='Compare Products' />
            <Container class1="compare-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6 col-md-5 col-lg-3 ps-2 pe-0 mb-3">
                        <div className="compare-product-card position-relative p-2 p-md-3">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                            <div className="product-card-image d-flex justify-content-center">
                                <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title small">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                <h6 className="price my-3 fw-bold">$100</h6>
                                <div className="">
                                    <div className="product-detail text-center">
                                        <h5 className='fs-6 mb-0'>Brand:</h5>
                                        <p className='small text-secondary mb-0'>Havels</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className='fs-6 mb-0'>Type:</h5>
                                        <p className='small text-secondary mb-0'>Watch</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className='fs-6 mb-0'>Availablity:</h5>
                                        <p className='small text-secondary mb-0'>In Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className='fs-6 mb-0'>Color:</h5>
                                        <Color className='small text-secondary mb-0' />
                                    </div>
                                    <div className="product-detail">
                                        <h5 className='fs-6 mb-0'>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <p className='small text-secondary mb-0'>S</p>
                                            <p className='small text-secondary mb-0'>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-5 col-lg-3 ps-2 pe-0 mb-3">
                        <div className="compare-product-card position-relative p-2 p-md-3">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                            <div className="product-card-image d-flex justify-content-center">
                                <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title small">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                <h6 className="price my-3 fw-bold">$100</h6>
                                <div className="">
                                    <div className="product-detail text-center">
                                        <h5 className='fs-6 mb-0'>Brand:</h5>
                                        <p className='small text-secondary mb-0'>Havels</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className='fs-6 mb-0'>Type:</h5>
                                        <p className='small text-secondary mb-0'>Watch</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className='fs-6 mb-0'>Availablity:</h5>
                                        <p className='small text-secondary mb-0'>In Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className='fs-6 mb-0'>Color:</h5>
                                        <Color className='small text-secondary mb-0' />
                                    </div>
                                    <div className="product-detail">
                                        <h5 className='fs-6 mb-0'>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <p className='small text-secondary mb-0'>S</p>
                                            <p className='small text-secondary mb-0'>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default CompareProduct