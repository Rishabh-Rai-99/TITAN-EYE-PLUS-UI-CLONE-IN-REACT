import React from 'react'
import VRicon from '../assets/VRicon.svg'


const BudgetGlassCard = (props) => {
    
  return (
    <>
        <div className="BudgetCard bg-white sm:max-w-46 sm:min-w-46 max-w-full min-w-38 text-center  rounded-xl pb-5 shadow">
            <div  className='img-container w-full h-34 relative'>
                <img className='mx-auto' src={props.GlassImg} alt="" />
                {props.vr &&
                <img className='absolute top-28 right-2' src={VRicon} alt="" />
                }
            </div>
            <div className='px-3 text-[#272932]'>
                <h3 className='font-bold text-sm'>{props.name}</h3>
                <h5 className='font-bold text-lg mt-1 leading-6'>Starting from <br /> {props.price}</h5>
            </div>
        </div>
    </>
  )
}

export default BudgetGlassCard