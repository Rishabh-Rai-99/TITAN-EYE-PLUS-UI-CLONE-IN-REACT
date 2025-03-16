import React from 'react';
import { NavLink } from 'react-router-dom';
import OptionCard from './OptionCard';
import category1 from "../json/category1.json";
import category2 from "../json/category2.json";
import category3 from "../json/category3.json";


const Categories = () => {
  return (
    <div className='my-5'>
      <h3 className='text-2xl font-bold'>Shop By Category</h3>
      <div className='w-full lg:w-1/2 text-[#8B8FA9] flex justify-between mt-5'>
        <NavLink 
          to='/' 
          className={({ isActive }) => 
            `relative font-semibold text-center w-full ${isActive ? 'text-black' : 'text-[#8B8FA9]'}`
          }
        >
          MEN
          <div 
            className={`w-20 sm:w-32 -translate-x-1/2 left-[50%] h-1 top-10 absolute rounded-full transition-all duration-300 ${
              window.location.pathname === '/' ? 'bg-[#35BBD1] opacity-100' : 'bg-transparent opacity-0'
            }`}
          ></div>
        </NavLink>

        <NavLink 
          to='/women' 
          className={({ isActive }) => 
            `relative font-semibold text-center w-full ${isActive ? 'text-black' : 'text-[#8B8FA9]'}`
          }
        >
          WOMEN
          <div 
            className={` w-20 sm:w-32 -translate-x-1/2 left-[50%] h-1  top-10 absolute rounded-full transition-all duration-300 ${
              window.location.pathname === '/women' ? 'bg-[#35BBD1] opacity-100' : 'bg-transparent opacity-0'
            }`}
          ></div>
        </NavLink>

        <NavLink 
          to='/kids' 
          className={({ isActive }) => 
            `relative font-semibold text-center w-full ${isActive ? 'text-black' : 'text-[#8B8FA9]'}`
          }
        >
          KIDS
          <div 
            className={`w-20 sm:w-32 -translate-x-1/2 left-[50%] h-1 top-10 absolute rounded-full transition-all duration-300 ${
              window.location.pathname === '/kids' ? 'bg-[#35BBD1] opacity-100' : 'bg-transparent opacity-0'
            }`}
          ></div>
        </NavLink>
      </div>
      {
        window.location.pathname === '/' && <div>
        <OptionCard category={category1} />
      </div>
      }
      {
        window.location.pathname === '/women' && <div>
        <OptionCard category={category2} />
      </div>
      }
      {
        window.location.pathname === '/kids' && <div>
        <OptionCard category={category3} />
      </div>
      }
    </div>
  );
}

export default Categories;
