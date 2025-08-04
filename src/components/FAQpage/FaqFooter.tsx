import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedinIn,
    FaPinterestP,
  } from 'react-icons/fa';
  
  const FaqFooter = () => {
    const contactDetails = [
      'support@amrutam.global',
      'Amrutam Pharmaceuticals Pvt Ltd.,',
      'chitragupt ganj, Nai Sadak, Lashkar,',
      'Gwalior - 474001',
      '+91 9713171999',
    ];
  
    const infoLinks = [
      'About Us',
      'Terms and Conditions',
      'Privacy Policy',
      'Privacy Policy for Mobile Apps',
      'Shipping, return and cancellation Policy',
      'International Delivery',
      'For Businesses, Hotels, and Resorts',
    ];
  
    const socialIcons = [
      { icon: <FaFacebookF />, label: 'Facebook' },
      { icon: <FaInstagram />, label: 'Instagram' },
      { icon: <FaYoutube />, label: 'YouTube' },
      { icon: <FaTwitter />, label: 'Twitter' },
      { icon: <FaLinkedinIn />, label: 'LinkedIn' },
      { icon: <FaPinterestP />, label: 'Pinterest' },
    ];
  
    return (
      <footer className="bg-[#DFE8DF] py-12 px-6 md:px-20 text-green-900">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Contact Section */}
          <div className="flex-1">
            <h4 className="font-semibold mb-2">Get in touch</h4>
            <div className="mb-4 space-y-1 text-sm">
              {contactDetails.map((item, i) => (
                <p key={i} className='text-xs text-black'>{item}</p>
              ))}
            </div>
  
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {socialIcons.map((social, i) => (
                <div
                  key={i}
                  className="bg-green-900 text-white p-2 rounded-full hover:bg-green-800 transition"
                  title={social.label}
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>
  
          {/* Info Links */}
          <div className="flex-1">
            <h4 className="font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              {infoLinks.map((link, i) => (
                <li key={i} className="hover:underline cursor-pointer text-black text-xs">
                  {link}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Newsletter */}
          <div className="flex-1">
            <h4 className="font-semibold mb-4">
              Subscribe to our Newsletter and join Amrutam Family today!
            </h4>
            <form className="flex max-w-sm">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full border border-green-900 px-4 py-2 text-xs text-center rounded-l-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-12 md:px-3 lg:px-12 py-2 rounded-r-full text-xs hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    );
  };
  
  export default FaqFooter;
  