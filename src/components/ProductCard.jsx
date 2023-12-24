import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import wish from '../images/wish.svg'
import wishlist from '../images/wishlist.svg'
import watch from '../images/watch.jpg'
import watch2 from '../images/watch-dark.jpeg'
import addcart from '../images/add-cart.svg'
import prodcompare from '../images/prodcompare.svg'
import view from '../images/view.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../features/products/ProductSlice';

const ProductCard = (props) => {
    let location = useLocation();
    const dispatch = useDispatch();
    const { grid, col, data } = props;

    const addToWish=(id)=>{
        dispatch(addToWishlist(id));
    }

    return (
        <>
            {data?.map((item, index) => {
                return (
                    <div key={index} className={location.pathname === '/product' ? `gr-${grid}` : `col-11 ${col !== null ? `${col}` : 'col-md-6 col-lg-3'} ms-4 mx-md-0 mb-3`}>
                        {/* <div className={location.pathname === '/product' ? `gr-${grid}` : 'col-11 col-md-12 col-lg-12 ms-4 mx-md-0 mb-3'}> */}
                        <Link className="product-card position-relative">
                            <div className="wishlist-icon position-absolute">
                                <button className='border-0 bg-transparent'
                                    onClick={(e)=>{addToWish(item?._id)}}
                                >
                                    <img src={wish} alt="wishlist" />
                                </button>
                            </div>
                            <div className="product-image d-flex justify-content-center">
                                {item?.images && item.images.length > 0 ? (
                                    <img
                                        className='product-card-image img-fluid'
                                        src={item.images[0].url}
                                        alt="product image"
                                        style={{ maxWidth: '100%', height: '250px' }}
                                    />
                                ) : (
                                    <p>No image available</p>
                                )}
                            </div>

                            <div className="product-details">
                                <h6 className=" brand">{item?.brand}</h6>
                                <h5 className="product-title capitalize">{item?.title}</h5>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={Number(item?.totalrating)}
                                    edit={false}
                                    activeColor="#ffd700"
                                />

                                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} dangerouslySetInnerHTML={{ __html: item?.description }}></p>

                                <p className="price">$ {item?.price}</p>
                            </div>
                            <div className="action-bar position-absolute">
                                <div className="d-flex flex-column gap-15">
                                    <button className='border-0 bg-transparent'>
                                        <img src={view} alt="view" />
                                    </button>
                                    <button className='border-0 bg-transparent'>
                                        <img src={prodcompare} alt="compare" />
                                    </button>
                                    <button className='border-0 bg-transparent'>
                                        <img src={addcart} alt="add cart" />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}


        </>
    )
}

export default ProductCard