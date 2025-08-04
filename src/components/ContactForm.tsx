import React from "react";
import contactImg from "../assets/contactForm.jpg";

const ContactForm = () => {
  return (
    <div className="bg-[#fef7e7] py-10 px-5">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-[#245c38] text-[28px] font-medium mb-2">Let’s Connect</h2>
        <p className="text-[#444] text-[12px] font-thin max-w-[600px] mx-auto mb-10 leading-[1.5]">
          We're here to help you on your wellness journey. Reach out to us for any questions,
          product inquiries, or personalized advice.
        </p>

        <div className="flex flex-wrap gap-10 justify-center items-start">
          <div className="sm:flex-1  md:h-[330px] rounded-[10px]">
            <img src={contactImg} alt="contact" className="w-full rounded-lg h-[330px]" />
          </div>

          <form className="flex-1  bg-white border border-gray-300 rounded-[8px] p-6 text-left">
            <div className="flex gap-5 mb-5">
              <div className="flex-1">
                <label className="block text-[#3A643B] font-thin text-xs mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Vikas Kumar"
                  className="w-full border-b border-gray-400 px-1 py-2 text-[15px] bg-transparent focus:outline-none placeholder:text-[#888] font-medium"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[#3A643B] font-thin text-xs mb-1">Your Contact Number</label>
                <input
                  type="text"
                  placeholder="8743414476"
                  className="w-full border-b border-gray-400 px-1 py-2 text-[15px] bg-transparent focus:outline-none placeholder:text-[#888] font-medium"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-[#3A643B] font-thin text-xs mb-1">Your Email</label>
              <input
                type="email"
                placeholder="vikass@gmail.com"
                className="w-full border-b border-gray-400 px-1 py-2 text-[15px] bg-transparent focus:outline-none placeholder:text-[#888] font-medium"
              />
            </div>

            <div className="mb-5">
              <label className="block text-[#3A643B] font-thin text-xs mb-1">Message (Optional)</label>
              <input
                type="text"
                placeholder="I want to On-board as a Doctor"
                className="w-full border-b border-gray-400 px-1 py-2 text-[15px] bg-transparent focus:outline-none placeholder:text-[#888] font-medium"
              />
            </div>

            <button
              type="submit"
              className="bg-[#245c38] text-white px-5 py-2 rounded-md text-[15px] mt-2 hover:bg-[#1f4f31] transition-colors text-xs"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
