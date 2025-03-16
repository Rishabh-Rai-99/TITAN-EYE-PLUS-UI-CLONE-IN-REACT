import React from 'react'

const GuideCard = (props) => {
  return (
    <div className="GuideCard shadow w-42 h-52 sm:w-52 sm:h-62 md:w-62 md:h-76 text-center flex flex-col items-center rounded-xl p-2">
        <img src={props.image} alt="" />
        <h4 className='font-bold w-32 break-words my-auto'>{props.name}</h4>
    </div>
  )
}

export default GuideCard