import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-4 mt-2">
      <div className="relative">
        <div className="rounded-sm p-2 absolute left-5 bottom-1/4 transform -translate-y-1/2 w-5 h-5">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.9">
              <path d="M7.19008 10.8098L2.25 15.7499" stroke="#39D8B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.7357 12.2786C13.505 12.2786 15.75 10.0336 15.75 7.26429C15.75 4.49497 13.505 2.25 10.7357 2.25C7.96641 2.25 5.72144 4.49497 5.72144 7.26429C5.72144 8.64894 6.28268 9.90251 7.19009 10.8099C8.09749 11.7173 9.35106 12.2786 10.7357 12.2786Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </div>
        <input
          type="text"
          placeholder="جستجو در فیزیوتراپی، آزمایشگاه، داروخانه، ..."
          className="w-full text-xs p-3 pr-4 pl-10 rounded-full bg-dunkel text-secondary-100 placeholder-secondary-900 border border-secondary-500 border-r-4 border-r-primary-300 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;