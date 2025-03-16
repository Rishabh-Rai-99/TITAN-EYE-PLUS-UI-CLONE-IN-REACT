import React, { useEffect, useRef, useState } from 'react'
import threeArrows from '../assets/threeArrows.svg'
import GlassCard from './GlassCard'
import glassImg1 from '../assets/gucciGlass1.svg'
import glassImg2 from '../assets/gucciGlass2.svg'
import right from "../assets/right.svg";


const GlassesContainer = (props) => {
      const sliderRef = useRef(null);
      const [canScrollLeft, setCanScrollLeft] = useState(false);
      const [canScrollRight, setCanScrollRight] = useState(true);
    
      const checkScroll = () => {
        
        if (sliderRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
          setCanScrollLeft(scrollLeft > 0);
          setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1 );
        }
      };
    
      const scroll = (offset) => {
        if (sliderRef.current) {
          sliderRef.current.scrollLeft += offset;
          setTimeout(checkScroll, 300); 
        }
      };
    
      useEffect(() => {
        if (sliderRef.current) {
          sliderRef.current.addEventListener("scroll", checkScroll);
          checkScroll();
        }
        return () => sliderRef.current?.removeEventListener("scroll", checkScroll);
      }, []);

  return (
    <div className={`main relative w-full py-4 sm:py-10 gap-14 flex items-center pl-4 sm:pl-14 pr-3 mx-auto  rounded-xl ${props.bg}`}>
        <div className="div hidden sm:flex gap-3 flex-col items-center">
            <h4 className='font-semibold text-lg sm:text-2xl whitespace-nowrap'>New Arrivals</h4>
            <img className='w-12' src={threeArrows} alt="" />
        </div>
        <div ref={sliderRef} className='flex gap-6 pt-5 w-full items-center overflow-x-auto scroll-smooth overflow-y-auto  scrollbar-hide [&::-webkit-scrollbar]:w-0'>
        <div className="div flex sm:hidden gap-3 flex-col items-center">
            <h4 className='font-semibold text-lg sm:text-2xl whitespace-nowrap'>New Arrivals</h4>
            <img className='w-12' src={threeArrows} alt="" />
        </div>
            <GlassCard GlassImg={props.glassImg3 ? props.glassImg3 :glassImg1} name={props.name? props.name :"GUCCI"} desc={props.desc? props.desc:"Wayfarer Men Square Eyeglasses"}/>
            <GlassCard GlassImg={glassImg2} name={"GUCCI"} desc={"Wayfarer Men Square Eyeglasses"}/>
            <GlassCard GlassImg={glassImg1} name={"GUCCI"} desc={"Wayfarer Men Square Eyeglasses"}/>
            <GlassCard GlassImg={glassImg2} name={"GUCCI"} desc={"Wayfarer Men Square Eyeglasses"}/>
            <GlassCard GlassImg={glassImg1} name={"GUCCI"} desc={"Wayfarer Men Square Eyeglasses"}/>
            <GlassCard GlassImg={glassImg2} name={"GUCCI"} desc={"Wayfarer Men Square Eyeglasses"}/>
            <GlassCard GlassImg={glassImg1} name={"GUCCI"} desc={"Wayfarer Men Square Eyeglasses"}/>
            <GlassCard GlassImg={glassImg2} name={"GUCCI"} desc={"Wayfarer Men Square Eyeglasses"}/>
          {canScrollRight && (
                    <button
                      className="absolute top-[40%] -right-4 cursor-pointer"
                      onClick={() => scroll(200)}
                    >
                      <img className="w-16 h-16" src={right} />
                    </button>
                  )}
                  {canScrollLeft &&(
                    <button
                    className="absolute top-[40%] sm:top-[38%] left-0 sm:left-56 cursor-pointer rotate-180"
                    onClick={() => scroll(-200)}
                  >
                    <img className="w-16 h-16" src={right} />
                  </button>
                  )}
                  </div>
    </div>
  )
}

export default GlassesContainer