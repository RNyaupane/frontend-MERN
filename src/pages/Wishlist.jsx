import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Container from '../components/Container';

const Wishlist = () => {
    return (
        <>
            <Meta title={'Wishlist'} />
            <BreadCrumb title='Wishlist' />
            <Container class1="wishlist-wrapper home-wrapper-2 py-5 px-1">
                <div className="row gap-15 ms-1">
                    <div className="col-6 col-md-4 col-lg-3 ps-2 pe-0 mb-3 bg-white">
                        <div className="wishlist-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />

                            <div className="wishlist-card-image">
                                <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                            </div>
                            <div className="p-3">
                                <h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                <h6 className="price">$ 100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 ps-2 pe-0 mb-3 bg-white">
                        <div className="wishlist-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />

                            <div className="wishlist-card-image">
                                <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                            </div>
                            <div className="p-3">
                                <h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                <h6 className="price">$ 100</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Wishlist;