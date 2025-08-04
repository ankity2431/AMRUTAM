import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row items-center bg-gradient-to-r from-[#FDEFCB] to-[#fff6df] pt-6 md:pt-0">
        <div className="font-gupter font-thin m-3 text-center sm:text-left  md:ml-16">
          <p className="font-poppins text-xs">Namaste, Welcome to Amrutam</p>
          <h1 className="md:text-4xl text-xl font-poppins font-medium mb-2 mt-2">
            Join Amrutam -{" "}
            <span className="text-[#3A643C] font-medium">
              Grow Your Practice
            </span>{" "}
          </h1>
          <p className="md:text-[13px] text-[9px] font-poppins">
            Connect with more patients, set your own schedule,
          </p>
          <p className="md:text-[13px] text-[9px] font-poppins">
            {" "}
            and grow your Ayurvedic practice effortlessly.
          </p>
          <button className="pl-12 pr-12 pt-2 pb-2 bg-[#3A643C] text-white rounded-lg mt-6 font-medium border-none text-xs">
            Join Now
          </button>

          <div className="flex mt-6 justify-center sm:justify-start text-center font-poppins">
            <div className="p-4">
              <h1 className="text-2xl font-medium">500+</h1>
              <p className="md:text-[13px] text-[9px]">Average Active</p>
              <p className="md:text-[13px] text-[9px]">user</p>
            </div>

            {/* Half-height right border */}
            <div className="self-center h-10 border-r-2 border-gray-400 mx-2"></div>

            <div className="p-4">
              <h1 className="text-2xl font-medium">40+</h1>
              <p className="md:text-[13px] text-[9px]">Average daily</p>
              <p className="md:text-[13px] text-[9px]">free calls</p>
            </div>
          </div>
        </div>
        <div className="pl-10">
          <img
            src="../src/assets/HeroSection.jpg"
            alt="hero"
            className="w-45"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
