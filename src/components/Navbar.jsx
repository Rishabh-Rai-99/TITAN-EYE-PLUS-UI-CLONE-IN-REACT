import React from "react";
import logo from "../assets/logo.svg";
import HamburgerIcon from "../assets/Hamburger.svg";
import searchIcon from "../assets/searchIcon.svg";
import heartIcon from "../assets/heartIcon.svg";
import cartIcon from "../assets/cartIcon.svg";
import profileIcon from "../assets/profileIcon.svg";
import Ticon from "../assets/Ticon.svg";
import line from "../assets/line.svg";
import headerBG from "../assets/headerContainerBG.jpeg";
import headerBG2 from "../assets/headerContainerBG2.webp";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] sticky top-0 z-50 w-full px-4 sm:px-20  h-18 flex items-center justify-between shadow-lg shadow-[#9AB7BC3D]">
        <div className="flex gap-3">
          <img
            className="cursor-pointer block sm:hidden"
            src={HamburgerIcon}
            alt=""
          />
          <img className="cursor-pointer w-32 sm:w-auto" src={logo} alt="" />
        </div>
        <div className="flex gap-4">
          <div className=" hidden sm:flex bg-[#FBFBFB] py-2 px-2 items-center gap-2 rounded-lg">
            <input type="text" className="outline-none border-none" />
            <img src={line} alt="" />
            <a href="#">
              <img src={searchIcon} alt="" />
            </a>
          </div>
          <img
            className="cursor-pointer hidden sm:block"
            src={heartIcon}
            alt=""
          />
          <img
            className="cursor-pointer block sm:hidden"
            src={searchIcon}
            alt=""
          />
          <img className="cursor-pointer" src={cartIcon} alt="" />
          <img
            className="cursor-pointer hidden sm:block"
            src={profileIcon}
            alt=""
          />
        </div>
      </div>

      <div className="download-app  mx-4 my-6 rounded-xl text-white flex sm:hidden items-center justify-center gap-4 bg-[#272932] h-24">
        <img className="w-14" src={Ticon} alt="" />
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">For A Better Experience</h3>
          <button className="bg-[#35BBD1] font-semibold py-1 px-5 rounded-xl">Download The App</button>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${headerBG})` }}
        className="bg-center bg-cover hidden sm:block header-container w-[90%] h-66 mx-auto my-10 overflow-hidden rounded-lg"
        ></div>
      
      <div className="flex sm:hidden [&::-webkit-scrollbar]:w-0 overflow-x-auto mx-3 gap-2">
      <div
        style={{ backgroundImage: `url(${headerBG})` }}
        className="bg-center bg-cover  header-container min-w-[90%] h-32 sm:h-66 mx-auto my-10 overflow-hidden rounded-lg"
        ></div>
      <div
        style={{ backgroundImage: `url(${headerBG2})` }}
        className="bg-center bg-cover  header-container min-w-[90%] h-32 sm:h-66 mx-auto my-10 overflow-hidden rounded-lg"
        ></div>
        </div>
    </>
  );
};

export default Navbar;
