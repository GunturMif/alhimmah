import React from "react";
import { servicesData } from "@/constant/dummyData";

const Services = () => {
  return (
    <section className="px-5 lg:px-20 py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-teal-600 mb-12">
          Program
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-teal-500 text-6xl mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-center text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
