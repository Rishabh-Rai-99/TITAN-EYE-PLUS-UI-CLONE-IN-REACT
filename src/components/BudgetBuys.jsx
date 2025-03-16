import React, { useRef } from "react";
import GlassCard from "./GlassCard";
import glassImg1 from "../assets/gucciGlass1.svg";
import glassImg2 from "../assets/gucciGlass2.svg";
import glassImg3 from "../assets/Glass5.svg";
import glassImg4 from "../assets/Glass6.svg";
import right from "../assets/right.svg";
import BudgetGlassCard from "./BudgetGlassCard";

const BudgetBuys = () => {
  const sliderRef = useRef(null);

  const scroll = (offset) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += offset;
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div
      className={`main relative w-full py-0 sm:py-10 gap-14 flex items-center mx-auto  rounded-xl`}
    >
      <div
        ref={sliderRef}
        className="sm:flex hidden gap-6 py-5 px-4 w-full justify-between overflow-x-auto scroll-smooth overflow-y-auto  scrollbar-hide [&::-webkit-scrollbar]:w-0"
      >
        <BudgetGlassCard
          GlassImg={glassImg1}
          name={"Sunglasses"}
          price={"1,299"}
          vr={true}
        />
        <BudgetGlassCard
          GlassImg={glassImg2}
          name={"Eyeglasses"}
          price={"1,299"}
          vr={true}
        />
        <BudgetGlassCard
          GlassImg={glassImg3}
          name={"Lenses"}
          price={"1,299"}
          vr={true}
        />
        <BudgetGlassCard
          GlassImg={glassImg2}
          name={"Eyeglasses"}
          price={"1,299"}
          vr={true}
        />
        <BudgetGlassCard
          GlassImg={glassImg4}
          name={"Accessories"}
          price={"899"}
        />
        <BudgetGlassCard
          GlassImg={glassImg1}
          name={"Sunglasses"}
          price={"1,299"}
          vr={true}
        />
        <BudgetGlassCard
          GlassImg={glassImg2}
          name={"Eyeglasses"}
          price={"1,299"}
          vr={true}
        />
        <BudgetGlassCard
          GlassImg={glassImg3}
          name={"Lenses"}
          price={"1,299"}
          vr={true}
        />
        <BudgetGlassCard
          GlassImg={glassImg2}
          name={"Eyeglasses"}
          price={"1,299"}
          vr={true}
        />
        <BudgetGlassCard
          GlassImg={glassImg4}
          name={"Accessories"}
          price={"899"}
        />

        <button
          className="absolute top-[40%] -right-7 cursor-pointer"
          onClick={() => scroll(200)}
        >
          <img className="w-16 h-16" src={right} />
        </button>
        <button
          className="absolute top-[40%] -left-7 cursor-pointer rotate-180"
          onClick={() => scroll(-200)}
        >
          <img className="w-16 h-16" src={right} />
        </button>
      </div>

      <div className="w-full sm:hidden flex flex-wrap justify-around gap-4 py-5">
        <BudgetGlassCard
          GlassImg={glassImg1}
          name={"Sunglasses"}
          price={"1,299"}
          vr={true}
        />
        <BudgetGlassCard
          GlassImg={glassImg2}
          name={"Eyeglasses"}
          price={"1,299"}
          vr={true}
        />
        <BudgetGlassCard
          GlassImg={glassImg3}
          name={"Lenses"}
          price={"1,299"}
          vr={true}
        />
        <BudgetGlassCard
          GlassImg={glassImg4}
          name={"Accessories"}
          price={"899"}
        />
      </div>
    </div>
  );
};

export default BudgetBuys;
