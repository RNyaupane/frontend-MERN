import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>Hotline:
                <a className='text-white' href="tel:+977 9840953995">
                  +977 9840953995
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl mw-100 px-2 px-md-5">
          <div className="row d-flex align-items-center">
            <div className="col-3 d-block">
              <h2>
                <Link className='text-white'>DEV</Link>
              </h2>
            </div>
            <div className="col-4">
              <div className="input-group justify-content-end">
                <input type="text" className="form-control py-2 d-none d-sm-block" placeholder="Search product here..." aria-label="Search product here..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2 cursor-pointer">
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>
            <div className="col-5 ">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div className="">
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/compare.svg" alt="compare" />
                    <p className='mb-0 d-none d-lg-block'>Compare <br /> Products</p>
                  </Link>
                </div>
                <div className="">
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className='mb-0 d-none d-lg-block'>Favourite <br /> Wishlist</p>
                  </Link>
                </div>
                <div className="">
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/user.svg" alt="user" />
                    <p className='mb-0 d-none d-lg-block'>Login <br /> My Account</p>
                  </Link>
                </div>
                <div className="">
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className='badge bg-white text-dark d-none d-lg-block'>0</span>
                      <p className='mb-0 d-none d-lg-block'>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-buttom d-flex align-items-center gap-30">
                <div className="">
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0  gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src='/images/menu.svg' alt='menu'/>
                      <span className='me-0 me-md-5 d-inline-block'>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="">Category 1</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Category 2</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Category 3</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/store'>Our Store</NavLink>
                    <NavLink to='/'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header