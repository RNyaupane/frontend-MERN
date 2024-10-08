import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';
import Container from '../components/Container';

const Blog = () => {
    return (
        <>
            <Meta title={'Blogs'} />
            <BreadCrumb title='Blogs' />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-4 col-lg-3 d-none d-sm-block">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Find By Categories
                            </h3>
                            <div className="">
                                <ul className='ps-0'>
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Sort By
                            </h3>
                            <div className="">
                                <ul className='ps-0'>
                                    <li>Relevance</li>
                                    <li>Uploaded Date</li>
                                    <li>View Count</li>
                                    <li>Rating</li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Upload Date
                            </h3>
                            <div className="">
                                <ul className='ps-0'>
                                    <li>Last Hour</li>
                                    <li>Today</li>
                                    <li>This Week</li>
                                    <li>This Month</li>
                                    <li>This Year</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto col-sm-8 col-lg-9">
                        <div className="row">
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Blog