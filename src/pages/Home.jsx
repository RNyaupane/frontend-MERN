import React from 'react'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import famous3 from '../images/famous-3.webp'


const Home = () => {
  return (
    <>
      <Container class1='home-wrapper-1 py-5' >
        <div className="row">
          <div className="col-md-6 mb-4 mx-6">
            <div className="main-banner position-relative ">
              <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 <br /> or $41.62/mo.</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                <img src="images/catbanner-01.jpg" className='img-fluid  rounded-3' alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Best Offer</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1='home-wrapper-2 p-2 p-md-5'>
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-between">
              {services?.map((service, index) => (
                <div className="d-flex align-items-center gap-15 mb-5 col-6 col-sm-6 col-md-6 col-lg-3" key={index}>
                  <img src={service.image} alt="services" className="img-fluid" />
                  <div className="">
                    <h6>{service.title}</h6>
                    <p className='mb-0'>{service.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>


      <Container class1='home-wrapper-2 py-5'>
        <div className="row bg-white">
          {/* Category 1 */}
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="d-flex gap-30 align-items-center">
              <img src="images/camera.jpg" alt="Camera" className="category-image" />
              <div className="">
                <h6>Camera</h6>
                <p>10 Items</p>
              </div>
            </div>
          </div>

          {/* Category 2 */}
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="d-flex gap-30 align-items-center">
              <img src="images/tv.jpg" alt="Smart TV" className="category-image" />
              <div className="">
                <h6>Smart TV</h6>
                <p>10 Items</p>
              </div>
            </div>
          </div>

          {/* Category 3 */}
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="d-flex gap-30 align-items-center">
              <img src="images/headphone.jpg" alt="Smart Watches" className="category-image" />
              <div className="">
                <h6>Smart Watches</h6>
                <p>9 Items</p>
              </div>
            </div>
          </div>

          {/* Category 4 */}
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="d-flex gap-30 align-items-center">
              <img src="images/camera.jpg" alt="Music & Gaming" className="category-image" />
              <div className="">
                <h6>Music & Gaming</h6>
                <p>10 Items</p>
              </div>
            </div>
          </div>

          {/* Category 5 */}
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="d-flex gap-30 align-items-center">
              <img src="images/camera.jpg" alt="Camera" className="category-image" />
              <div className="">
                <h6>Camera</h6>
                <p>10 Items</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="d-flex gap-30 align-items-center">
              <img src="images/camera.jpg" alt="Camera" className="category-image" />
              <div className="">
                <h6>Camera</h6>
                <p>10 Items</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="d-flex gap-30 align-items-center">
              <img src="images/camera.jpg" alt="Camera" className="category-image" />
              <div className="">
                <h6>Camera</h6>
                <p>10 Items</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="d-flex gap-30 align-items-center">
              <img src="images/camera.jpg" alt="Camera" className="category-image" />
              <div className="">
                <h6>Camera</h6>
                <p>10 Items</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1='featured-wrapper py-5 home-wrapper-2'>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Featured Collection
            </h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1='famous-wrapper py-5 home-wrapper-2'>
          <div className="row">
            <div className="col-md-6 col-lg-3 col-sm-6 mb-4">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-1.jpeg"
                  className="img-fluid"
                  style={{ height: '400px', width: '100%' }}
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="">Big Screen</h5>
                  <h6 className="">Smart Watch Series 7</h6>
                  <p className="">From $300 or $500/mo for 4 days</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6 mb-4">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-2.jpg"
                  className="img-fluid"
                  style={{ height: '400px', width: '100%' }}
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">200 nits of brightness</h6>
                  <p className="text-dark">27 inch 5k Retina Display</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6 mb-4">
              <div className="famous-card position-relative">
                <img
                  src={famous3}
                  className="img-fluid"
                  style={{ height: '400px', width: '100%' }}
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Smartphone</h5>
                  <h6 className="text-dark">iPhone 13 Pro</h6>
                  <p className="text-dark">From $300 to $600 for 3 months</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6 mb-4">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-4.jpg"
                  className="img-fluid"
                  style={{ height: '400px', width: '100%' }}
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home Speakers</h5>
                  <h6 className="text-dark">Room-filling sound</h6>
                  <p className="text-dark">From $699 or $116/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>
      </Container>

      <Container class1='special-wrapper py-5 home-wrapper-2'>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Special Products
            </h3>
          </div>
        </div>
        <div className="row ">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      <Container class1='popular-wrapper py-5 home-wrapper-2'>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Our Popular Products
            </h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1='marquee-wrapper home-wrapper-2 py-5 '>
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1='blog-wrapper py-5 home-wrapper-2'>
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <h3 className="section-heading">
              &nbsp; Our Latest Blogs
            </h3>
          </div>
          <div className="row ">
            <div className="col-6 col-lg-3">
              <BlogCard />
            </div>
            <div className="col-6 col-lg-3">
              <BlogCard />
            </div>
            <div className="col-6 col-lg-3">
              <BlogCard />
            </div>
            <div className="col-6 col-lg-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>

    </>
  )
}

export default Home