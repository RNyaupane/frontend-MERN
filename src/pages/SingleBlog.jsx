import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi'

const SingleBlog = () => {
    return (
        <>
            <Meta title={'Dynamic Blog Name'} />
            <BreadCrumb title='Dynamic Blog Name' />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                    <HiOutlineArrowLeft  className='fs-4'/>Go back to blogs
                                </Link>
                                <h3 className="title">Dynamic blog title </h3>
                                <img src="images/blog-1.jpg" className='img-fluid w-100 my-4' alt="blog" />
                                <p>Dynamic Blog Description Goes here</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SingleBlog