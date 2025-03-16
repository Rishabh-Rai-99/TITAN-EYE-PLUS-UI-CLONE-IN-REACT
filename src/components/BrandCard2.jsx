import React from 'react'
import brandtwo from '../json/brand2.json'

const BrandCard2 = () => {
    
  return (
    brandtwo.map((brands)=>{
        return <div key={brands.id} className="card relative flex justify-center">
          <div style={{background:`url(${process.env.PUBLIC_URL}${brands.brand_img})`,backgroundPosition:"center"}} className='w-52 h-58 bg-contain rounded-xl bg-center'>
          </div>
            <div className='bg-[#EFFCFE] rounded-xl flex justify-center items-center absolute -bottom-10 w-46 h-22 mx-auto'>
            <img className='mix-blend-multiply' src={`${process.env.PUBLIC_URL}${brands.brand_logo}`} alt="" />
            </div>
        </div>
    })
  )
}

export default BrandCard2