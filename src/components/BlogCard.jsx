import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <>
            <div className="blog-card">
                <div className="card-image">
                    <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
                </div>
                <div className="blog-content">
                    <p className='date'>11 dec 2023</p>
                    <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
                    <p className="desc">A product is any item or service you sell to serve a customer's need or want.</p>
                    <Link to='/blog/:id' className='button'>Read More</Link>
                </div>
            </div>
        </>
    )
}

export default BlogCard