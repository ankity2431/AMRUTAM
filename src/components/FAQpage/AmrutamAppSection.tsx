import React from 'react';
import messageLogo from '../assets/SearchBar/messagelogo.png';
import faqPageImg from '../assets/SearchBar/FaqPageimg.png';

import { GOOGLE_STORE, APPLE_STORE } from '../../assets/utils/constant';

const features = [
  {
    icon: messageLogo, 
    text: 'Access To\n Prescriptions',
  },
  {
    icon: messageLogo, 
    text: 'Track Health\nEfficiently',
  },
  {
    icon: messageLogo, 
    text: 'Direct Chat With\n Doctors',
  },
  {
    icon: messageLogo, 
    text: 'In-App Reminders\nFor Consultations',
  },
];

export default function AmrutamAppSection() {
  return (
    <div className="bg-[#FFF7E2] py-16 px-4 md:px-20 flex flex-col md:flex-col lg:flex-row items-center justify-between gap-12 font-poppins">
      {/* Left Side */}
      <div className="flex-1 w-full">
        <h2 className="text-lg md:text-2xl font-semibold text-green-800">
          Download Amrutam Ayurveda
        </h2>
        <h2 className="text-lg md:text-2xl font-semibold text-green-800 mb-4">
         App Now
        </h2>
        <p className="text-gray-700 md:max-w-screen-lg lg:max-w-md text-sm mb-8">
          The Amrutam Ayurveda App is your one-stop app for all things Ayurveda! Apart from mimicking the website, the app has added benefits
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start bg-[#FFF7E2] border border-gray-400 shadow p-4 rounded-2xl">
              <img
                src={feature.icon}
                alt="icon"
                className="w-8 h-8 object-contain mr-4 mt-1"
              />
              <p className="text-[#3A643B] whitespace-pre-line font-thin text-xs">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* App Store buttons */}
        <div className="flex gap-4 justify-center md:justify-center lg:justify-start">
          <img
            src={GOOGLE_STORE}
            alt="Google Play"
            className="w-36 h-auto"
          />
          <img
            src={APPLE_STORE}
            alt="App Store"
            className="w-36 h-auto"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 w-full flex justify-center">
        <img
          src={faqPageImg} 
          alt="Amrutam App Preview"
          className="max-w-xs md:max-w-sm lg:max-w-md"
        />
      </div>
    </div>
  );
}
