import React, { useRef } from "react";
import Categories from "./Categories";
import blueline from "../assets/blueLine.svg";
import star from "../assets/star.svg";
import { useState, useEffect } from "react";
import SaleCard from "./SaleCard";
import right from "../assets/right.svg";
import NearbyStore from "../assets/NearbyStore.svg";
import arrowRight from "../assets/arrowRight.svg";
import WhatLens from "../assets/bgWhatLens.svg";
import WhatLens2 from "../assets/ChooseLensBg2.png";
import blueArrow from "../assets/blueArrow.svg";
import vector83 from "../assets/vector_83.svg";
import vector84 from "../assets/vector_84.svg";
import BrandCard from "./BrandCard1";
import BrandCard2 from "./BrandCard2";
import GlassesContainer from "./GlassesContainer";
import saleGlassImg from '../assets/SaleCard.svg'
import heart from '../assets/heart.svg'
import playIcon from '../assets/playIcon.svg'
import videoImg from '../assets/VideoImg.svg'
import glassImg3 from '../assets/Glass3.svg'
import BudgetBuys from "./BudgetBuys";
import GuideCard from "./GuideCard";
import guideImg1 from '../assets/guideImg1.svg'
import guideImg2 from '../assets/guideImg2.svg'
import guideImg3 from '../assets/guideImg3.svg'
import guideImg4 from '../assets/guideImg4.svg'
import Footer from "./Footer";


const Main = () => {
  const [time, setTime] = useState(new Date());
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <main className="overflow-x-hidden">
        <header className=" px-4 sm:px-20">
          <Categories />
        </header>
        <div className="store-details flex justify-around items-center text-center text-[#272932] bg-[#FFFFFF] my-5 shadow w-full py-3 sm:py-8">
          <div>
            <h4 className="font-bold text-md sm:text-xl">20M+</h4>
            <p className="font-semibold text-sm sm:text-md">Glasses Sold</p>
          </div>
          <img src={blueline} alt="" />
          <div>
            <h4 className="font-bold text-md sm:text-xl">750+</h4>
            <p className="font-semibold text-sm sm:text-md">Exchange Stores</p>
          </div>
          <img src={blueline} alt="" />
          <div>
            <h4 className="font-bold text-md sm:text-xl flex justify-center gap-1">
              4.9 <img src={star} alt="" />
            </h4>
            <p className="font-semibold text-sm sm:text-md">on Google</p>
          </div>
        </div>
        <section className="sale-section relative mx-auto my-20 w-[90%] pb-10 rounded-xl bg-gradient-to-b from-[#FFDC5F] to-[#fffdf4]">
          <div className="flex justify-between p-5">
            <h5 className="font-bold">Sale Ends in</h5>
            <p className="font-bold text-[#ED1455]">
              {time.toLocaleTimeString()}
            </p>
          </div>
          <div
            ref={sliderRef}
            className="sale-cards-container scroll-smooth mx-4 sm:mx-10 flex gap-7 [&::-webkit-scrollbar]:w-0  overflow-x-auto"
          >
            <SaleCard starImg={star} GlassImg={saleGlassImg} heartImg={heart} />
            <SaleCard starImg={star} GlassImg={saleGlassImg} heartImg={heart} />
            <SaleCard starImg={star} GlassImg={saleGlassImg} heartImg={heart} />
            <SaleCard starImg={star} GlassImg={saleGlassImg} heartImg={heart} />
            <SaleCard starImg={star} GlassImg={saleGlassImg} heartImg={heart} />
            <SaleCard starImg={star} GlassImg={saleGlassImg} heartImg={heart} />
            <SaleCard starImg={star} GlassImg={saleGlassImg} heartImg={heart} />
            <SaleCard starImg={star} GlassImg={saleGlassImg} heartImg={heart} />
            <SaleCard starImg={star} GlassImg={saleGlassImg} heartImg={heart} />
            <SaleCard starImg={star} GlassImg={saleGlassImg} heartImg={heart} />
          </div>
          {canScrollRight && (
            <button
              className="absolute top-[40%] -right-4 sm:right-2 cursor-pointer"
              onClick={() => scroll(200)}
            >
              <img className="w-16 h-16" src={right} />
            </button>
          )}
          {canScrollLeft && (
            <button
            className="absolute top-[40%] -left-4 sm:left-2 cursor-pointer rotate-180"
            onClick={() => scroll(-200)}
          >
            <img className="w-16 h-16" src={right} />
          </button>
          )}
          
        </section>

        <div style={{  backgroundImage: `linear-gradient(to bottom, rgba(39, 41, 50, 0.6), rgba(8, 7, 5, 0.6)), url(${NearbyStore})`}} className="nearby-store-rect flex justify-between items-center px-4 sm:px-8 text-[#ffffff] bg-center my-10 w-[90%] mx-auto h-24 sm:h-40 rounded-xl ">
          <div>
            <h4 className="font-bold text-md sm:text-lg mb-2">Find a Store Nearby</h4>
            <p className="text-sm sm:text-md">Locate a store near you to get a free eye-test</p>
          </div>
          <img className="cursor-pointer w-8 md:w-auto" src={arrowRight} alt="" />
        </div>

        <section className="brandSection my-20 px-4 sm:px-18">
          <div className="flex justify-between">
            <h3 className= " text-2xl sm:text-3xl font-bold whitespace-nowrap">Shop By Brands</h3>
            <button className="flex whitespace-nowrap items-center text-[#35BBD1] cursor-pointer">View All <img src={blueArrow} alt="" /></button>
          </div>
          <div className="cards-contianer-one flex max-w-full gap-5 pb-10 my-4 justify-between overflow-auto overflow-y-hidden scrollbar-hide [&::-webkit-scrollbar]:w-0">
            <BrandCard />
          </div>
          <div className="cards-contianer-two flex max-w-full gap-5 my-4 pb-10 justify-between  overflow-auto overflow-y-hidden scrollbar-hide [&::-webkit-scrollbar]:w-0">
          <BrandCard2 />
          </div>
        </section>

        <div style={{  backgroundImage: `linear-gradient(to bottom, rgba(39, 41, 50, 0.6), rgba(8, 7, 5, 0.6)), url(${WhatLens})`}} className="choose-lens-rect xl:bg-cover  flex md:justify-between md:flex-row justify-center text-center md:text-start md:gap-0 gap-4 flex-col items-center bg-center  px-4 sm:px-8 text-[#ffffff] my-10 w-[90%] mx-auto h-32 sm:h-48 rounded-xl ">
          <div>
            <h4 className="font-bold text-sm sm:text-xl mb-2">Not Sure What Lens to get?</h4>
            <p className="font-semibold text-sm sm:text-md">We’ll help you choose the right lens for your needs </p>
          </div>
          <button className="relative bg-[#272932] px-2 py-2 sm:px-10 rounded-lg text-sm sm:text-md font-bold">Find The Right Lens
            <img className="absolute top-[2px] left-[2px]" src={vector83} alt="" />
            <img className="absolute bottom-[2px] right-[2px]" src={vector84} alt="" />
          </button>
        </div>

          <section className="newArival-section mx-4 sm:mx-16 ">
            <GlassesContainer bg={"bg-[#EFFCFE]"} />
          </section>

          <div className="video-section relative bg-[rgba(235,210,255,1)] my-18 mx-4 sm:mx-16 rounded-xl h-45 sm:h-90 flex items-center justify-between overflow-hidden">
            <h2 className="text-[#611B96] z-0 w-28 sm:w-auto font-bold text-2xl sm:text-4xl  ml-3 sm:ml-10 whitespace-nowrap">Glasses <br />
            Just WOW..</h2>

            <div className="absolute left-1/2 -translate-x-1/2 p-3 sm:p-5 flex items-center bg-[#27293214] backdrop-blur justify-center rounded-full z-100">
              <img className="sm:w-auto w-7 ml-1" src={playIcon} alt="" />
            </div>
            <div className="absolute -bottom-20 right-1/5 w-40 h-40 bg-gradient-to-br from-[#EBD2FF] via-[#EBD2FF]/40 to-transparent z-10 blur-lg rounded-full">
              </div>

            <div  className="relative w-full sm:w-80 h-full">
              <img className="absolute bottom-0 " src={videoImg} alt="" />
            </div>

            <div className="absolute rounded-xl inset-0 bg-[rgba(97,27,150,0.20)]"></div>
          </div>

          <section className="Bestsellers-section mx-4 sm:mx-16 ">
            <GlassesContainer bg={"bg-[#E1FFA1]"} glassImg3={glassImg3} name={"Funky"} desc={"Golden Metal Men Geometric Eyeglasses"}/>
          </section>

          <section className="budget-buys-section px-3 sm:px-18 mt-10">
          <div className="flex justify-between">
            <h3 className=" text-xl sm:text-3xl font-bold">Budget Buys</h3>
            <button className="sm:flex hidden whitespace-nowrap items-center text-[#35BBD1] cursor-pointer">View All <img src={blueArrow} alt="" /></button>
          </div>
            <BudgetBuys />
          </section>

          <section className="Guides mx-4 sm:mx-20 mt-7 sm:mt-0 mb-10 sm:mb-20">
            <h4 className="font-bold text-2xl sm:text-3xl mb-7">Guides</h4>
            <div className="flex lg:justify-between justify-around flex-wrap gap-6">
              <GuideCard image={guideImg1} name={"Size guide"}/>
              <GuideCard image={guideImg2} name={"Prescription guide"}/>
              <GuideCard image={guideImg3} name={"Face shape guide"}/>
              <GuideCard image={guideImg4} name={"10 second eye screening test"}/>
            </div>
          </section>

          <Footer />
          
      </main>
    </>
  );
};

export default Main;
