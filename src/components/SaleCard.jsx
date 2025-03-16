import React from 'react'
import rupee from '../assets/rupees.svg'
import VRicon from '../assets/VRicon.svg'


const SaleCard = (props) => {
    
  return (
    <>
        <div className="card bg-white min-w-48 rounded-xl pb-5">
            <div  className='img-container relative'>
                <img className='mx-auto' src={props.GlassImg} alt="" />
                <img className='absolute top-2 right-2' src={props.heartImg} alt="" />
                <div className='absolute top-28 left-2 flex items-center gap-1 '>
                <img  src={props.starImg} alt="" />
                <span className='font-semibold'>4.6</span>
                </div>
                <img className='absolute top-28 right-2' src={VRicon} alt="" />
            </div>
            <div className='px-3 pt-3 flex flex-col gap-1'>
                <h3 className='font-semibold text-md '>DOLCE & GABANNA</h3>
                <p className='text-[#8B8FA9] text-sm'>Wayfarer Square</p>
                <div className="price flex font-bold">
                    <img src={rupee} alt="" />
                    <span>2,500</span>
                </div>
                <div className='flex gap-2'>
                <span className='flex line-through decoration-red-[#ED1455] text-[#8B8FA9]'> <img src={rupee} alt="" />2,500</span>
                <p className='text-[#4ABD22] font-semibold'>(50% OFF)</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SaleCard