import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getUserProductWishlist } from '../features/user/UserSlice';
import defaultProductImage from '../images/defaultProduct.jpg'
import { addToWishlist } from '../features/products/ProductSlice';
import WishListCard from '../components/WishListCard';

getUserProductWishlist
const Wishlist = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getWishlistFromDb();
        dispatch(getUserProductWishlist())
    }, [0])
    const getWishlistFromDb = () => {
        dispatch(getUserProductWishlist())
    }
 
    return (
        <>
            <Meta title={'Wishlist'} />
            <BreadCrumb title='Wishlist' />
            <Container class1="wishlist-wrapper home-wrapper-2 py-5 px-1">
                <div className="row gap-15 ms-1">
                    <WishListCard />
                </div>
            </Container>
        </>
    )
}

export default Wishlist;