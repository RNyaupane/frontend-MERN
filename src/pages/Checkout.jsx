import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <>
            <div className="checkout-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className='website-name'>Dev</h3>
                            <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home </a></li> /
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>
        </>
    )
}

export default Checkout