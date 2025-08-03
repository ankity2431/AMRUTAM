import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Top Tabs
const tabs = ['Consultation', 'Wallet', 'Forum', 'Shop'];

// FAQ Data
const faqData = {
  Consultation: [
    {
      question: 'What types of consultations are available?',
      answer: 'We provide three types of consultations – video, instant call and chat consultation.',
    },
    { question: 'Can I get refund for the wallet money?' },
    { question: 'What is the Amrutam Forum?' },
    { question: 'Can I pause the audio consultation?' },
    { question: 'Is there a minimum duration for an audio consultation?' },
  ],
  Wallet: [
    { question: 'How to add money to wallet?' },
    { question: 'Can I get refund for the wallet money?' },
  ],
  Forum: [
    { question: 'What is the Amrutam Forum?' },
    { question: 'How to ask a question?' },
  ],
  Shop: [
    { question: 'What are the delivery charges?' },
    { question: 'Can I return products?' },
  ],
};

const FaqTabs = () => {
  const [activeTab, setActiveTab] = useState('Consultation');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-[#f5f2da] px-4 md:px-10 py-10 w-full">
      {/* Tabs */}
      <div className="flex justify-center gap-8 mb-10 text-[#1f4f31] text-sm font-medium">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setOpenIndex(null);
            }}
            className={`pb-1 border-b-2 transition ${
              activeTab === tab
                ? 'border-[#1f4f31] font-semibold'
                : 'border-transparent text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="max-w-2xl mx-auto">
        {faqData[activeTab].map((item, i) => (
          <div
            key={i}
            className="border-b border-gray-300 py-4 cursor-pointer"
            onClick={() => toggleAnswer(i)}
          >
            <div className="flex justify-between items-start">
              <p className="text-black text-sm">{item.question}</p>
              <div className="mt-1 text-[#1f4f31] font-thin">
                {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {openIndex === i && item.answer && (
              <p className="mt-2 text-gray-600 text-xs">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-8">
        <button className="flex items-center gap-2 bg-[#f5f2da] px-4 py-2 rounded-lg shadow-lg border text-sm text-[#1f4f31] hover:opacity-80">
          Load More <FaChevronDown className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default FaqTabs;
