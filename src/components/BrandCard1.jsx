import React from 'react'
import brands from '../json/brands.json'

const BrandCard = () => {
    
  return (
    brands.map((brands)=>{
        return <div key={brands.id} className="card relative flex justify-center ">
          <div style={{background:`url(${import.meta.env.BASE_URL}${brands.brand_img})`,backgroundPosition:"center"}} className='w-52 h-58  rounded-xl bg-cover'>
          </div>
            <div className='bg-[#EFFCFE] rounded-xl flex justify-center items-center absolute -bottom-10 w-46 h-22'>
            <img className='mix-blend-multiply' src={`${import.meta.env.BASE_URL}${brands.brand_logo}`} alt="" />
            </div>
        </div>
    })
  )
}

export default BrandCard