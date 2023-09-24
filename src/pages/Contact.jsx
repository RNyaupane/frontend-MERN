import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const Contact = () => {
  return (
    <>
      <Meta title={'Contact Us'} />
      <BreadCrumb title='Contact Us' />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.187074724123!2d85.33534839122737!3d27.698954904849987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199940d81663%3A0xaf36b9b58903050f!2sApex%20College!5e0!3m2!1sen!2snp!4v1694016504628!5m2!1sen!2snp"
              width="600"
              height="450"
              className='border-0 w-100'
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div className="">
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <CustomInput
                     type="text" className="form-control" placeholder='Name' />
                  <CustomInput
                     type="email" className="form-control" placeholder='Email' />
                  <CustomInput
                     type="tel" className="form-control" placeholder='Mobile Number' />
                  <div className="">
                    <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Message'></textarea>
                  </div>
                  <div className="">
                    <button className='button border-0' type='submit'>Submit</button>
                  </div>
                </form>
              </div>
              <div className="">
                <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                <div className="">
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5' />
                      <address className='mb-0'>House no: 277, Raatopul, near Gaushala</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiPhoneCall className='fs-5' />
                      <a href="tel:+977 9840953995">+977 9840953995</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5' />
                      <a href="mailto:roshannyaupane01@gmail.com">
                        roshannyaupane01@gmail.com
                      </a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiInfoCircle className='fs-5' />
                      <p className='mb-0'>Sunday-Friday 10 am - 8 pm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact