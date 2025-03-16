import React from 'react'
import BlueRupee from '../assets/BlueRupee.svg'
import VRicon from '../assets/VRicon.svg'


const GlassCard = (props) => {
    
  return (
    <>
        <div className="card bg-white max-w-46 min-w-46  rounded-xl pb-5 shadow">
            <div  className='img-container relative'>
                <img className='mx-auto' src={props.GlassImg} alt="" />
                <img className='absolute top-28 right-2' src={VRicon} alt="" />
            </div>
            <div className='px-3 pt-3 flex flex-col gap-1'>
                <h3 className='font-semibold text-sm'>{props.name}</h3>
                <p className='text-[#8B8FA9] text-sm'>{props.desc}</p>
                <div className="price flex font-bold">
                    <img src={BlueRupee} alt="" />
                    <span className='text-[#35BBD1]'>1,299</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default GlassCard