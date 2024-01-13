import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/ProductSlice";
import { getUserProductWishlist } from "../features/user/UserSlice";


const WishListCard = (props) => {
    const dispatch = useDispatch();
  const wishlistState = useSelector((state) => state.auth.wishlist?.wishlist);
   // Use useMemo to memoize the array reference
  const removeFromWishlist = (id) => {
    console.log(id);
    dispatch(addToWishlist(id));
    setTimeout(() => {
        dispatch(getUserProductWishlist());
    }, 300)
}
  return (
    <>
      {wishlistState?.map((item, index) => {
        return (
          <div
            key={index}
            className="col-5 col-md-4 col-lg-3 ps-2 pe-0 mb-3 bg-white"
          >
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
                onClick={() => {
                  removeFromWishlist(item?._id);
                }}
              />

              <div className="wishlist-card-image bg-white">
                <img
                  src={item?.images[0]?.url || defaultProductImage}
                  className="img-fluid w-100 d-block mx-auto"
                  alt=""
                  width={10}
                />
              </div>
              <div className="p-3">
                <h5 className="title">{item?.title}</h5>
                <h6 className="price ">$ {item?.price}</h6>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WishListCard;
