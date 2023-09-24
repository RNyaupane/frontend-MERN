import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUpCircle,BsShare, BsArrowDownCircle } from 'react-icons/bs'
import {BiSave} from 'react-icons/bi'
import {FaRegComments} from 'react-icons/fa'
const BlogCard = () => {
    return (
        <>
            {/* <div className="blog-card mb-3 shadow">
                <div className="card-image">
                    <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
                </div>
                <div className="blog-content">
                    <p className='date'>11 dec 2023</p>
                    <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
                    <p className="desc">A product is any item or service you sell to serve a customer's need or want.</p>
                    <Link to='/blog/:id' className='button'>Read More</Link>
                </div>
            </div> */}
            {/* <div className="row d-flex"> */}
            <div className="col-auto col-md-6 col-xl-6 mb-5 mb-lg-0">
                <div className="card border-light p-2 p-md-3 mb-4">
                    <div className="card-header rounded">
                        <div className="post-meta">
                            <div className="media d-flex align-items-center justify-content-between">
                                <div className="post-group">
                                    <a href="./profile.html" className='text-dark' data-toggle="tooltip" data-placement="top" title="23k followers" data-original-title="23k followers">
                                        <img className="avatar-sm mr-2 img-fluid rounded-circle" width={50} src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="avatar" /> Techhub
                                    </a>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="author-name text-secondary fs-11">
                                    <span className='d-none d-lg-block'>Posted by <a href="./profile.html" className="mr-2 text-dark fw-bold">Username </a></span>5 hours ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body py-4 px-0">
                        <a href="./single-post-left-sidebar.html">
                            <img src="images/blog-1.jpg" className="card-img-top rounded" alt="image" />
                            <h4 className="my-4 text-dark">List of public corporations by market capitalization</h4>
                        </a>
                        <p className="card-text mb-4 text-secondary">All of the world's 10 largest companies as measured by market capitalization are American. Market capitalization is the total value of a company's entire purchased shares of stock. While these companies have their roots
                            in the U.S. and are the embodiment of ... </p>
                    </div>
                    <div className="card-footer bg-white pt-3 px-0">
                        <div className="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between">
                            <div className="post-details mb-3 mb-lg-0">
                                <button className="btn btn-sm btn-primary fs-6 mx-2 border border-0 shadow-none px-3" style={{backgroundColor:'#242e4c'}}>
                                    <span className="fas fa-arrow-up mr-2 animate-up-2"></span>
                                    <BsArrowUpCircle className='fs-5' /> 4
                                </button>
                                <button className="btn btn-sm btn-danger fs-6  border-0 shadow-none px-3 " style={{backgroundColor:'#A91E2C'}}>
                                    <span className="fas fa-arrow-down mr-2 animate-down-2"></span>
                                    <BsArrowDownCircle className='fs-5' /> 1
                                </button>
                            </div>
                            <div className="post-meta " >
                                <a className="text-dark me-3 " href="#"><FaRegComments className='fs-5 '/> 33.7k</a>
                                <button className="btn text-white"  style={{backgroundColor:'#242e4c'}}><BiSave className='fs-5'/> Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*</div> */}
        </>
    )
}

export default BlogCard