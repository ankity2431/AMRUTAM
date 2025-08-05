import React from 'react';
import { FaSearch } from 'react-icons/fa';

const FaqSearchBar = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-12 px-4 md:px-0"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/SearchBar/searchbarBackground.png)`,
      }}
    >
      {/* Content Wrapper */}
      <div className="max-w-2xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#1f1f1f] mb-6">FAQ</h2>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-lg shadow-md px-4 py-2">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for any queries that you have"
            className="flex-1 outline-none text-[8px] font-thin md:text-sm placeholder:text-gray-500 bg-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSearchBar;
