import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { PiTreeEvergreenBold } from "react-icons/pi";
import { TbHealthRecognition } from "react-icons/tb";

const services = [
  {
    icon: <LuLeafyGreen className="text-4xl" />,
    title: "Green",
    description: "lorem ipsum dolor sit ipsum dolor sit ipsum dolor sit.",
  },
  {
    icon: <PiTreeEvergreenBold className="text-4xl" />,
    title: "Green",
    description: "Lorem ipsum dolor sit.",
  },
  {
    icon: <TbHealthRecognition className="text-4xl" />,
    title: "Green",
    description: "Lorem ipsum dolor sit.",
  },
];
const Services = () => {
  return (
    <>
      <div className="bg-gray-200 py-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-8">
            {services.map((service, index) => {
              return (
                <div className="sm:p-12 bg-white rounded-xl shadow-sm flex flex-col justify-center items-center gap-3">
                  <div>{service.icon}</div>
                  <h1 className="text-2xl font-bold">{service.title}</h1>
                  <p className="text-gray-500 text-center text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
