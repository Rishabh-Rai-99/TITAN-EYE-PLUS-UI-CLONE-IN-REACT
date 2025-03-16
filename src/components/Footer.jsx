import React from 'react'
import headPhoneIcon from '../assets/headphoneIcon.svg'
import whatsappIcon from '../assets/whatsappIcon.svg'
import mailIcon from '../assets/mailIcon.svg'
import phoneIcon from '../assets/phoneIcon.svg'
import truckIcon from '../assets/truckIcon.svg'
import locationIcon from '../assets/location.svg'
import logo from '../assets/footerLogo.svg'

const Footer = () => {
  return (
    <footer className=' flex flex-col w-full bg-[#272932] h-52 text-white sm:hidden items-center gap-7 justify-around py-4 px-5 md:px-24'>
    <img className='h-8' src={logo} alt="" />
      <div className='footer-options flex gap-5'>
        <div className='flex  gap-2 cursor-pointer'>
          <img src={truckIcon} alt="" />
          <h4>Track Order</h4>
        </div>
        <div className='flex gap-2 cursor-pointer' >
          <img src={locationIcon} alt="" />
          <h4>Find A Store</h4>
        </div>
      </div>
      <div className="contact-us text-center">
        <h4 className='font-semibold text-sm mb-2 '>Contact Us</h4>
        <div className='flex gap-7'>
            <img className='cursor-pointer' src={phoneIcon} alt="" />
            <img className='cursor-pointer' src={headPhoneIcon} alt="" />
            <img className='cursor-pointer' src={whatsappIcon} alt="" />
            <img className='cursor-pointer' src={mailIcon} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer