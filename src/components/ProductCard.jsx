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


const ProductCard = (props) => {
    let location = useLocation();
    const { grid } = props;
    return (
        <>
            <div className={location.pathname === '/product' ? `gr-${grid}` : 'col-11 col-md-6 col-lg-3 ms-4 mx-md-0'}>
                <Link to='/product/:id' className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image d-flex justify-content-center">
                        <img src={watch} alt="product image" width={300}/>
                    </div>
                    <div className="product-details">
                        <h6 className=" brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-bloc" : "d-none"}`} >
                            A watch is a small clock carried or worn by a person.
                            It makes it easy to see the time. It is also a fashion accessory for men and women, and expensive watches are designed for this purpose.
                        </p>
                        <p className="price">$100.00</p>
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
        </>
    )
}

export default ProductCard