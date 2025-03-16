import React from 'react'
import headPhoneIcon from '../assets/headphone.svg'
import truckIcon from '../assets/truckIcon.svg'
import locationIcon from '../assets/location.svg'

const HelpBar = () => {
  return (
    <div className='helpBar hidden w-full bg-[#272932] h-20 text-white sm:flex items-center justify-between px-5 md:px-24'>
      <div className='flex gap-2'>
        <img src={headPhoneIcon} alt="" />
        <h5>Need Help?</h5>
        <a href="#" className='text-[#66F6FF]'>Call 1800-2452-3400</a>
      </div>
      <div className='helpBar-options flex gap-5'>
        <div className='flex  gap-2 cursor-pointer'>
          <img src={truckIcon} alt="" />
          <h4>Track Order</h4>
        </div>
        <div className='flex gap-2 cursor-pointer' >
          <img src={locationIcon} alt="" />
          <h4>Find A Store</h4>
        </div>
      </div>
    </div>
  )
}

export default HelpBar