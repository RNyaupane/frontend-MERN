import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
import searchLogo from '../images/search.svg'
import {FaSearch} from 'react-icons/fa'


const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isButtonBlurred, setIsButtonBlurred] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    setIsButtonBlurred(!isButtonBlurred);
  };
  return (
    <>
      <header className='header-top-strip py-3 d-none d-md-flex'>
        <div className="container-xxl mw-100">
          <div className="row mx-4">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>Hotline:&nbsp;
                <a className='text-white' href="tel:+977 9840953995">
                  +977 9840953995
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl mw-100 px-2 ps-sm-3">
          <div className="row d-flex align-items-center " style={{ width: '109%' }}>
            <div className="col-3 d-block">
              <h2>
                <Link className='text-white'>LOGO</Link>
              </h2>
            </div>
            <div className="col-4 ">
              <div className="input-group justify-content-end d-none d-md-flex">
                <input type="text" className="form-control py-2 " placeholder="Search product here..." aria-label="Search product here..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2 cursor-pointer">
                  <BsSearch className='fs-6' />
                </span>
              </div>

              {/* SEARCH LOGO */}
              <div className="text-center d-md-none">
                <div className={`col text-end${isSearchVisible ? ' blur-background' : ''}`}>
                  <div className={`dropdown${isSearchVisible ? ' show' : ''}`}>
                    <button
                      className={`btn d-flex align-items-center justify-content-end gap-10 text-white border-0 ${isButtonBlurred ? ' blur' : ''}`}
                      id="searchDropdown"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={isSearchVisible}
                      onClick={toggleSearch}
                      style={{ boxShadow: "none" }}
                    >
                      <img src={searchLogo} width={30} alt="search" />
                    </button>
                  </div>
                </div>
                <div className={`p-1 border-dark dropdown-menu${isSearchVisible ? ' show' : ''}`} aria-labelledby="searchDropdown">
                  <form className="p-0 m-0">
                    <div className="form-group d-flex">
                      {/* <input type="text" className="form-control rounded-0 border-0" id="searchInput" placeholder="Search" /> */}
                      <input className="form-control border-1 me-1" type="search" placeholder="Search" id="searchInput" aria-label="Search" />
                      <button className="btn btn-success" type="submit">
                        {/* <i className="fas fa-search"></i> */}
                        <FaSearch/>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-4 ms-4 ">
              <div className="header-upper-links gap-15 d-flex align-items-center justify-content-between">
                <div className="">
                  <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/compare.svg" alt="compare" />
                    <p className='mb-0 d-none d-lg-block'>Compare <br /> Products</p>
                  </Link>
                </div>
                <div className="">
                  <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className='mb-0 d-none d-lg-block'>Favourite <br /> Wishlist</p>
                  </Link>
                </div>
                {/* <div className="">
                  <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/user.svg" alt="user" />
                    <p className='mb-0 d-none d-lg-block'>Login <br /> My Account</p>
                  </Link>
                </div> */}
                <div className="">
                  <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
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
      {/* <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-buttom d-flex align-items-center gap-30">
                <div className="">
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0  gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src='/images/menu.svg' alt='menu' />
                      <span className='me-0 me-md-5 d-inline-block'><span className='d-none d-md-block'>Shop </span> Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="">Category 1</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Category 2</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Category 3</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-30">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/product'>Our Store</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      <nav className="navbar navbar-expand-lg navbar-dark header-bottom">
        <div className="container-fluid mx-4">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle bg-transparent border-0  gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src='/images/menu.svg' alt='menu' />
              <span className='me-0 me-md-5 d-inline-block'>Shop&nbsp;Categories</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><Link className="dropdown-item text-white" to="">Category 1</Link></li>
              <li><Link className="dropdown-item text-white" to="">Category 2</Link></li>
              <li><Link className="dropdown-item text-white" to="">Category 3</Link></li>
            </ul>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
            <div className="navbar-nav gap-30 ms-5 text-center">
              <NavLink to='/' className="nav-link active text-white" aria-current="page">Home</NavLink>
              <NavLink to='/product' className="nav-link text-white">Our Store</NavLink>
              <NavLink to='/blogs' className="nav-link text-white">Blogs</NavLink>
              <NavLink to='/contact' className="nav-link text-white">Contact</NavLink>
            </div>
            <div className="navbar-nav gap-30 ms-auto text-center d-flex align-items-center mt-4 mt-lg-0 ps-5 py-3"> {/* Wrap only the Login link in a separate div */}
              <Link to='/login' className='d-flex d-none d-lg-flex align-items-center gap-10 text-white'>
                <img src="/images/user.svg" className='' alt="user" />
                <p className='mb-0 fs-5 pe-3'>Login </p>
              </Link>
              <NavLink to='/login' className="nav-link d-lg-none text-white bg-dark py-2" style={{ borderRadius: "25px", width: '100px' }}>Login</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header