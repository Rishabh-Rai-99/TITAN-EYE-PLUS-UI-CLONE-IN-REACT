import React from "react";

const OptionCard = (props) => {
  return (
    <>
      <div className="flex my-16 lg:gap-0 gap-3 sm:gap-10 justify-between sm:justify-around lg:justify-between flex-wrap">
        {props.category.map((card) => {
          return (
            <div key={card.id} className="text-center w-30 sm:w-auto cursor-pointer hover:scale-110 transition duration-75">
              <div className="p-1 rounded-full shadow flex justify-center">
                <img className="rounded-full w-28 h-28" src={card.image} alt="" />
              </div>
              <h5 className="font-light text-[#272932] sm:font-semibold mt-2 whitespace-nowrap sm:mt-5">{card.category}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OptionCard;
