import React from "react";

import {GOOGLE_STORE, APPLE_STORE}  from "../../src/utils/constant"

const features = [
  "🌿 Build Trust and Community with Forum",
  "💰 Earn More with Pay Per Conversation",
  "📞 Attract Patients with 5-Minute Free Call",
  "💳 Instant Access to Your Earnings with Wallet",
];

const AppPromo = () => {
  return (
    <section className="bg-[#fef7e7]">
      <div className="px-6 py-16 font-['Segoe UI'] max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          {/* Left Section */}
          <div className="lg:w-1/2 w-full text-left mb-10 lg:mb-0">
            <h2 className="text-3xl text-[#245c38] leading-snug mb-4 font-medium">
              Get Started Today –<br />
              <span className="text-[#245c38]">Download the App Now!</span>
            </h2>
            <p className="text-[#333] mb-6 font-thin text-sm">
              Simplify consultations, manage patients, and <br />
              grow your practice—all in one place.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((item, index) => {
                const icon = item.split(" ")[0];
                const text = item.split(" ").slice(1).join(" ");
                return (
                  <div
                    key={index}
                    className="flex items-center bg-[#fef7e7] border border-[#245c38] rounded-lg px-3 py-2 text-[#245c38] shadow-sm "
                  >
                    <span className="text-xl mr-3">{icon}</span>
                    <p className="text-xs font-normal leading-snug px-4">
                      {text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <img className="h-12" src={GOOGLE_STORE} alt="Google Play" />
              <img className="h-12" src={APPLE_STORE} alt="App Store" />
            </div>
          </div>

          {/* Right Section */}
          <div className="relative lg:w-1/2 w-full flex justify-center items-center">
            {/* Decorative Circles */}
            <div className="absolute w-[4rem] h-[4rem] md:w-20 md:h-20 bg-[#ffeeaa] rounded-full top-20 left-[18px] md:left-[2.5rem] -translate-x-1/2 z-0">
              <img
                src={`${import.meta.env.BASE_URL}assets/userLogos/user1.png`}
                alt="user1"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="absolute w-[4rem] h-[4rem] md:w-20 md:h-20 bg-[#fff5d8] rounded-full bottom-24 left-[18px] md:left-[2.5rem] -translate-x-1/3 z-0">
              <img
                src={`${import.meta.env.BASE_URL}assets/userLogos/user3.png`}
                alt="user1"
                className="w-full h-full rounded-full"
              />
            </div>

            <div className="absolute w-[4rem] h-[4rem] md:w-16 md:h-16 bg-[#fff5d8] rounded-full top-[30%] right-[17px] md:right-[4rem] translate-x-1/2 -translate-y-1/2 z-0">
              <img
                src={`${import.meta.env.BASE_URL}assets/userLogos/user3.png`}
                alt="user1"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="absolute w-[4rem] h-[4rem] md:w-20 md:h-20 bg-[#fff5d8] rounded-full top-[68%] right-[15px] md:right-[4rem] translate-x-1/2 -translate-y-1/2 z-0">
              <img
                src={`${import.meta.env.BASE_URL}assets/userLogos/user1.png`}
                alt="user1"
                className="w-full h-full rounded-full"
              />
            </div>

            {/* Phone */}
            <div className="relative w-[14rem] md:w-72 z-10">
              <img
                src={`${import.meta.env.BASE_URL}assets/appointment.png`}
                alt="phone"
                className="w-full object-contain relative z-0"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-[#ccc] rounded-xl shadow-lg w-[85%] z-10 p-4">
                <div className="text-left space-y-2">
                  <p className="text-sm font-meduim">Aliana Sen</p>
                  <span className="text-xs text-green-700 font-medium">
                    Upcoming
                  </span>
                  <p className="text-xs font-thin text-[#555]">
                    Tuesday, 13/09/2023 - 10:30 AM
                  </p>
                  <p className="text-xs text-[#555] font-thin">INR 800 • Video</p>
                  <div className="flex gap-2 mt-3">
                    <button className="px-3 py-1 border border-black text-black font-thin rounded-md  hover:bg-red-200 transition text-xs">
                      Cancel
                    </button>
                    <button className="px-3 py-1 bg-gray-400 text-black font-thin rounded-md text-xs hover:bg-blue-200 transition ">
                      Reschedule
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
