import React, { useState } from "react";
import { Link } from 'react-router';


const faqData = [
  {
    question: "What is Amrutam?",
    answer: "Amrutam is a wellness platform rooted in Ayurvedic principles offering various services and products.",
  },
  {
    question: "How does Amrutam help me grow as a practitioner?",
    answer: "It offers exposure, tools, and resources for Ayurvedic doctors to grow their practice online.",
  },
  {
    question: "How do I become a part of Amrutam Doctor?",
    answer: "You can register through the app or website and complete your profile and KYC.",
  },
  {
    question: "What is Amrutam Global as a platform?",
    answer: "It connects Ayurvedic professionals with users worldwide for consultations and holistic healing.",
  },
  {
    question: "What documents do I need to provide?",
    answer: "You’ll need your degree, government ID, and practice license for verification.",
  },
  {
    question: "Is there a fee to join Amrutam?",
    answer: "No, there’s no fee to join. It’s free for verified practitioners.",
  },
];

const FaqSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleIndex = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#fef7e7]">
        <div className="max-w-[1000px] mx-auto pt-10 px-5 text-center  font-poppins bg-[#fef7e7]">
      <h2 className="text-[26px] text-[#245c38] font-medium mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-[15px] text-[#444] mb-8 font-thin text-xs ">
        Find quick answers to common questions to help you navigate the app and its features easily.
      </p>

      <div className="text-left mb-10 font-thin text-sm">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-[#ccc] py-4 cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex justify-between items-center text-[15px] text-[#222]">
              <span>{item.question}</span>
              <span className="text-[20px] font-bold text-[#444]">
                {expandedIndex === index ? "-" : "+"}
              </span>
            </div>
            {expandedIndex === index && (
              <p className="text-[14px] text-[#245c38] mt-2 leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      <Link to="/faq"><button className="bg-[#245c38] text-white px-8 py-3 text-[15px] rounded-md hover:bg-[#1a472c] transition font-medium text-xs">
        See More
      </button></Link>
      </div>
    </section>
  );
};

export default FaqSection;
