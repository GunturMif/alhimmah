"use client";

import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { sliderData, typeEffectData } from "@/constant/dummyData";
import TypeEffect from "../shared/reusable/TypeEffect";

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) =>
        prevCurrent === sliderData.length - 1 ? 0 : prevCurrent + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <section className="w-full flex flex-col-reverse lg:flex-row px-5 lg:px-20 pt-16 lg:pt-5 bg-gray-50">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex items-start flex-col justify-center">
          <div className="flex flex-col gap-6 pt-5">
            <h1 className="text-3xl lg:text-6xl font-bold text-teal-700">
              <TypeEffect arrList={typeEffectData} />
              Membangun Generasi Unggul untuk Masa Depan Gemilang
            </h1>
            <p className="text-gray-500 text-md lg:text-xl leading-relaxed">
            Bersama Kita Tumbuh, Bersama Kita Berdaya.
            </p>
            
          </div>
        </div>

        {/* Right Section (Slider) */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${current * 100}%)`,
              width: `${sliderData.length * 100}%`,
            }}
          >
            {sliderData.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex justify-center items-center"
                style={{ width: "100%", height: "400px" }} // Batas ukuran slider
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={700} // Lebar tetap (sesuai kebutuhan)
                  height={400} // Tinggi tetap (sesuai kebutuhan)
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HeroSlider;
