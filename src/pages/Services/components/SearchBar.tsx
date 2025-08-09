import React from 'react';
import searchIcon from '@/assets/images/Search.png';

const SearchBar: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-4 mt-2">
      <div className="relative">
        <img
          src={searchIcon}
          alt="search"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
        <input
          type="text"
          placeholder="جستجو در فیزیوتراپی، آزمایشگاه، داروخانه، ..."
          className="w-full text-xs p-3 pr-4 pl-10 rounded-full bg-[#1E1E1E] text-white placeholder-[#505050] border border-gray-600 border-r-4 border-r-[#3EFFC7] focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;