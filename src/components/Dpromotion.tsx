import React from "react";

const Dpromotion = ({ title, description, reverse, image }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center  md:gap-12 mb-7`}
    >
      {/* Placeholder Image Box */}
      <div className="w-full md:w-1/2 h-[370px] rounded-xl flex items-center justify-center">
        <img
          src={image}
          alt="doctor"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left lg:p-28">
        <h3 className="text-lg md:text-2xl font-semibold text-[#245c38] mb-3">
          {title}
        </h3>
        <p className="text-xs md:text-sm font-thin text-gray-700 leading-relaxed ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Dpromotion;
