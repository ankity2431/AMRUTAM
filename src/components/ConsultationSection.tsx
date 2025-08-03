import React, { useContext, useState } from "react";
import iphone from "../assets/consultation/iphone.png";
import iphone2 from "../assets/consultation/iphone2.png";
import iphone3 from "../assets/consultation/iphone3.png";
import { SelectedIndexContext } from "../assets/utils/SelectedIndexContext";

const ConsultationSection = () => {
  const buttons = ["Consultations", "Payment withdrawal", "Schedule"];
  const { setSelectedIndex } = useContext(SelectedIndexContext);
  const [indexx, setIndex] = useState(0);
  const phones = [
    {
      title: "Value Your Practice",
      img: iphone,
      titlePosition: "top",
    },
    {
      title: "Today's Healing Journey",
      img: iphone2,
      titlePosition: "bottom",
    },
    {
      title: "Consultation Details",
      img: iphone3,
      titlePosition: "top",
    },
  ];

  return (
    <section className="bg-[#fef7e7] px-4 py-12">
      {/* Top Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => {setSelectedIndex(index); setIndex(index)}}
            className={`px-5 py-2 rounded-md text-sm font-medium transition duration-200 border ${
              index === indexx
                ? "bg-[#3a7042] text-white border-transparent"
                : "bg-transparent text-[#1e1e1e] border-[#ccc]"
            } hover:bg-[#2c5b35] hover:text-white`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Phones Section */}
      <div className="flex flex-wrap justify-center gap-28 text-center mb-12">
        {phones.map((phone, index) => (
          <div key={index} className="flex flex-col items-center max-w-[200px]">
            {phone.titlePosition === "top" && (
              <p className="font-semibold text-[#2f5739] text-sm mb-3">
                {phone.title}
              </p>
            )}
            <img
              src={phone.img}
              alt={`Phone ${index + 1}`}
              className="w-[180px] h-auto rounded-lg shadow-lg"
            />
            {phone.titlePosition === "bottom" && (
              <p className="font-semibold text-[#2f5739] text-sm mt-3">
                {phone.title}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button className="px-7 py-3 text-xs bg-[#3a7042] text-white rounded-md hover:bg-[#2c5b35] transition duration-200">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default ConsultationSection;
