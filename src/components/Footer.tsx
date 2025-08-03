// Footer.jsx
import React from "react";
import {
  contactInfo,
  infoLinks,
  socialMediaIcons,
} from "../assets/utils/FooterData";

const Footer = () => {
  return (
    <footer className="bg-[#DBDCC4] text-center md:pl-28 py-12  mx-auto flex flex-wrap justify-between gap-12">
      {/* Column 1 - Contact */}
      <div className="flex-1 min-w-[260px]">
        <h1 className="text-[20px] font-bold tracking-[8px] mb-6 text-[#33643F]">
          A M R U T A M
        </h1>
        <h3 className="text-[16px] font-semibold mb-4 text-[#33643F]">Get in touch</h3>
        <p className="text-sm font-thin mb-3">{contactInfo.email}</p>
        {contactInfo.address.map((line, i) => (
          <p key={i} className="text-xs md:text-sm font-thin leading-relaxed">
            {line}
          </p>
        ))}
        <p className="text-sm font-thin mt-2">{contactInfo.phone}</p>
      </div>

      {/* Column 2 - Info Links */}
      <div className="flex-1 min-w-[260px]">
        <h3 className="text-[16px] font-semibold mb-4 text-[#33643F]">Information</h3>
        <ul className="space-y-2 text-xs md:text-sm font-thin">
          {infoLinks.map((link, i) => (
            <li key={i}>
              <a href="#" className="hover:opacity-70">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3 - Social Icons */}
      <div className="flex-1 min-w-[260px] text-[#33643F]">
        <h3 className="text-[16px] font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center gap-4 text-[18px] mt-2">
          {socialMediaIcons.map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} className="hover:text-[#154029]">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
