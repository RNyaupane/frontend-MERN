import React, { useState } from 'react'
import Color from '../components/Color'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Zoom from 'react-img-zoom'
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import Container from '../components/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow, EffectFade } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import "swiper/css/effect-fade";


const SingleProduct = () => {

    const copyToClipboard = (text) => {
        const textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    };
    const [orderedProduct, setOrderedProduct] = useState(true);
    return (
        <>
            <Meta title={'Dynamic Product Name'} />
            <BreadCrumb title='Dynamic Product Name' />
            <Container class1="main-products-wrapper py-5 home-wrapper-2">
                <div className="row bg-white">
                    <div className="col-lg-6">
                        <div className="main-product-image">
                            <div className="">
                                {/* <ReactImageZoom {...props} /> */}
                                <Zoom
                                    img="https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?cs=srgb&dl=pexels-pixabay-277390.jpg&fm=jpg"
                                    zoomScale={1.5}
                                    height={500}
                                    className='w-100'
                                    transitionTime={1}
                                />
                            </div>
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-15 justify-content-center">
                            <div className="">
                                <img
                                    src="https://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/filer_public/c6/d2/c6d28e02-1ac0-49b1-8dd4-04d45309f281/iwc-big-pilot-watch.jpg__1536x0_q75_crop-scale_subsampling-2_upscale-false.jpg"
                                    alt="product image"
                                    className='img-fluid'
                                />
                            </div>
                            <div className="">
                                <img
                                    src="https://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/filer_public/c6/d2/c6d28e02-1ac0-49b1-8dd4-04d45309f281/iwc-big-pilot-watch.jpg__1536x0_q75_crop-scale_subsampling-2_upscale-false.jpg"
                                    alt="product image"
                                    className='img-fluid'
                                />
                            </div>
                            <div className="">
                                <img
                                    src="https://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/filer_public/c6/d2/c6d28e02-1ac0-49b1-8dd4-04d45309f281/iwc-big-pilot-watch.jpg__1536x0_q75_crop-scale_subsampling-2_upscale-false.jpg"
                                    alt="product image"
                                    className='img-fluid'
                                />
                            </div>
                            <div className="">
                                <img
                                    src="https://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/filer_public/c6/d2/c6d28e02-1ac0-49b1-8dd4-04d45309f281/iwc-big-pilot-watch.jpg__1536x0_q75_crop-scale_subsampling-2_upscale-false.jpg"
                                    alt="product image"
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className='title'>Kids Watch Bulk 10 Pack Multi Colored</h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">$ 100</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor='#ffd700'
                                    />
                                    <p className='mb-0 t-review'>(2 Reviews)</p>
                                </div>
                                <a href="#review" className='review-btn'>Write a Review</a>
                            </div>
                            <div className=" py-3">
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading '>Type :</h3>
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading '>Brand :</h3>
                                    <p className='product-data'>Rolex</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading '>Category :</h3>
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading '>Tags :</h3>
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading '>Availablity :</h3>
                                    <p className='product-data'>In Stock</p>
                                </div>
                                <div className="d-flex gap-10 flex-column my-3">
                                    <h3 className='product-heading '>Size :</h3>
                                    <div className="d-flex flex-wrap gap-15">
                                        <span className='badge border border-1 text-dark bg-white'>S</span>
                                        <span className='badge border border-1 text-dark bg-white'>M</span>
                                        <span className='badge border border-1 text-dark bg-white'>L</span>
                                        <span className='badge border border-1 text-dark bg-white'>XL</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column my-3">
                                    <h3 className='product-heading '>Color :</h3>
                                    <Color />
                                </div>
                                <div className="d-flex align-items-center gap-15 flex-row my-3 ">
                                    <h3 className='product-heading pt-1'>Quantity&nbsp;:</h3>
                                    <div className="">
                                        <input className='px-2 py-1 border border-1' type="number" value={0} min={1} max={10} style={{ width: '60px' }} />
                                    </div>
                                    <div className="d-flex align-items-center gap-30 ms-3">
                                        <button className='button border-0' type='submit'>Add&nbsp;to&nbsp;Cart</button>
                                        <button className='button signup'>Buy&nbsp;It&nbsp;Now</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div className="">
                                        <a href=""> <TbGitCompare className='fs-5 me-2' /> Add to Compare</a>
                                    </div>
                                    <div className="">
                                        <a href=""> <AiOutlineHeart className='fs-5 me-2' /> Add to Wishlist</a>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column my-3">
                                    <h3 className='product-heading '>Shipping & Returns :</h3>
                                    <p className='product-data'>Free shipping and return is available.<br /> We ship all domestic orders within <b>2-3 business days</b></p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-3">
                                    <h3 className='product-heading '>Product Link :</h3>
                                    <a
                                        className='text-decoration-underline'
                                        href="javascript:void(0)"
                                        onClick={() => copyToClipboard('https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?cs=srgb&dl=pexels-pixabay-277390.jpg&fm=jpg')}
                                    >
                                        Copy Product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h4>Description</h4>
                        <div className="bg-white p-3">
                            <p>
                                Product Description goes here dynamically.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="reviews-wrapper py-3 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 id='review'>Reviews</h3>
                        <div className="review-inner-wrapper p-3 p-sm-5">
                            <div className="review-head d-flex justify-content-between p-0">
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
                                        <p className='mb-0'>(32)</p>
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
            </Container>
            <Container class1="popular-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Related Product
                        </h3>
                    </div>
                    <Swiper
                        // effect={'coverflow'}
                        loop={true}
                        autoplay={true}
                        spaceBetween={20}
                        grabCursor={true}
                        centeredSlides={true}
                        // slidesPerView={3}

                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            350: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 640px
                            640: {
                                width: 640,
                                slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 3,
                            },
                        }}

                    >
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                    </Swiper>

                </div>
            </Container>
        </>
    )
}

export default SingleProduct