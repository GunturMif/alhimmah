import { visionData } from "@/constant/dummyData";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const Vision = () => {
  return (
    <section className="px-5 lg:px-20 py-12 bg-white">
      <h2 className="text-4xl font-bold text-center text-teal-600 mb-12">
        Visi Misi
      </h2>
      {visionData.map((item, index) => (
        <div
          key={index}
          className={`container mx-auto flex flex-col lg:flex-row ${
            index % 2 === 0 ? "" : "lg:flex-row-reverse"
          } items-center justify-center gap-8 mb-16`}
        >
          <div className="w-full lg:w-1/2">
            <Image
              src={item.image}
              alt={item.imageAlt}
              width={500}
              height={500}
              className="rounded-md mx-auto shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              {item.title}
            </h3>
            <p className="text-lg text-gray-600 leading-7 mb-6">
              {item.description}
            </p>
            
          </div>
        </div>
      ))}
    </section>
  );
};

export default Vision;
