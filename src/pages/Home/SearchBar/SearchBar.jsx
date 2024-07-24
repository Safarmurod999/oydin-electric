import React, { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce';

const SearchBar = ({ search, setSearch, params, brand, category, setParams, setSearchParams, searchParams }) => {
    const [openSelect, setOpenSelect] = useState(false);
    const [filter, setFilter] = useState('So’ngi tovarlar');
    const [layout, setLayout] = useState('grid');
    const handleFilter = (filter) => {
        setFilter(filter)
        setOpenSelect(false)
    }
    const handleSearch = useDebouncedCallback((search) => {
        if (search.length > 0) {
            if (searchParams.getAll('brand').length) {
                params.brand = brand
            }
            if (searchParams.getAll('category').length) {
                params.category = category
            }
            setSearch(search);
            params.q = search;
            setParams(params);
            setSearchParams(params);
        } else {
            if (searchParams.getAll('brand').length) {
                params.brand = brand
            }
            if (searchParams.getAll('category').length) {
                params.category = category
            }
            setSearch('');
            delete params.q;
            searchParams.delete('q');
            setParams(params);
            setSearchParams(params);
        }
    }, 2000)
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Search Input */}
            <div className="flex items-center justify-center relative w-full md:w-[400px] lg:w-[600px] xl:w-[700px] 3xl:w-[995px]">
                <input type="text"
                    placeholder="Barcha 15 000ta mahsulotni izlang..."
                    className="w-full px-[20px] py-4 rounded-lg border-[2px] text-dark-gray border-blue"
                    onChange={(e) => handleSearch(e.target.value)}
                    defaultValue={search}
                    required />
                <div className="absolute top-[50%] -translate-y-[50%] right-0 bg-blue w-[72px] h-full flex items-center justify-center rounded-e-lg cursor-pointer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3613 17.584L20.7863 21.0002M11.6324 3C16.2814 3 20.0499 6.76847 20.0499 11.4175C20.0499 16.0666 16.2814 19.836 11.6324 19.836C6.98331 19.836 3.21484 16.0666 3.21484 11.4175C3.21484 6.76847 6.98331 3 11.6324 3Z" stroke="#F8F9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

            </div>

            {/* Filter and Layout */}
            <div className="w-full md:w-auto flex justify-between md:justify-center items-center gap-3">
                {/* Filter */}
                <div className="grow md:w-[170px] xl:w-[264px] relative inline-block text-left">
                    <div>
                        <button className="inline-flex w-full justify-between
                            gap-x-1.5 rounded-lg bg-white ps-[10px] lg:ps-[20px] pe-[10px] lg:pe-[14px] 
                            py-4 font-semibold text-gray-900 shadow-sm border
                            border-[#DFE1E7] ring-inset ring-gray-300 hover:bg-gray-50"
                            id="menu-button"
                            onClick={() => setOpenSelect(!openSelect)}
                        >
                            {filter}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.05726 13.8583C9.00892 13.8113 8.80226 13.6335 8.63226 13.4679C7.56309 12.4969 5.81309 9.96404 5.27892 8.63833C5.19309 8.437 5.01142 7.92799 4.99976 7.65603C4.99976 7.39544 5.05976 7.14702 5.18142 6.90997C5.35142 6.61447 5.61892 6.37741 5.93476 6.24752C6.15392 6.16391 6.80976 6.03401 6.82142 6.03401C7.53892 5.90412 8.70476 5.83268 9.99309 5.83268C11.2206 5.83268 12.3389 5.90412 13.0673 6.01047C13.0789 6.02265 13.8939 6.15254 14.1731 6.29461C14.6831 6.5552 14.9998 7.06421 14.9998 7.60894V7.65603C14.9873 8.0108 14.6706 8.75686 14.6589 8.75686C14.1239 10.0111 12.4598 12.4855 11.3539 13.48C11.3539 13.48 11.0698 13.7601 10.8923 13.8819C10.6373 14.0718 10.3214 14.166 10.0056 14.166C9.65309 14.166 9.32476 14.0597 9.05726 13.8583Z" fill="#A5A5A5" />
                            </svg>

                        </button>
                    </div>

                    <div className={`absolute right-0 z-20 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${openSelect ? 'block' : 'hidden'}`} aria-orientation="vertical">
                        <div className="py-1" role="none">
                            <div className="block px-4 py-2 text-dark-gray hover:bg-[#F3F4F6] cursor-pointer" onClick={() => handleFilter("So'nggi Tovarlar")} id="menu-item-0">So'nggi Tovarlar</div>
                            <div className="block px-4 py-2 text-dark-gray hover:bg-[#F3F4F6] cursor-pointer" onClick={() => handleFilter("Eng ko'p sotilgan tovarlar")} id="menu-item-1">Eng ko'p sotilgan tovarlar</div>
                            <div className="block px-4 py-2 text-dark-gray hover:bg-[#F3F4F6] cursor-pointer" onClick={() => handleFilter('Eng yaxshi tovarlar')} id="menu-item-2">Eng yaxshi tovarlar</div>
                        </div>
                    </div>
                </div>
                {/* Layout */}
                <div className="flex items-center w-[112px] rounded-lg border border-gray">
                    <div className={`p-4 rounded-lg transition duration-300 cursor-pointer ${layout == 'column' ? 'bg-[#EBEBEB]' : ''}`} onClick={() => setLayout('column')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.16004 18.0115H19.6806M8.16004 12.2515H19.6806M8.16004 6.49149H19.6806M4.33091 6.47736V6.53878M4.33091 12.3611V12.4225M4.33091 17.9974V18.0588M4.5798 6.49056C4.5798 6.62882 4.46763 6.7409 4.32937 6.7409C4.19112 6.7409 4.0791 6.62882 4.0791 6.49056C4.0791 6.35231 4.19112 6.24023 4.32937 6.24023C4.46763 6.24023 4.5798 6.35231 4.5798 6.49056ZM4.5798 12.3743C4.5798 12.5126 4.46763 12.6246 4.32937 12.6246C4.19112 12.6246 4.0791 12.5126 4.0791 12.3743C4.0791 12.2361 4.19112 12.124 4.32937 12.124C4.46763 12.124 4.5798 12.2361 4.5798 12.3743ZM4.5798 18.0106C4.5798 18.1488 4.46763 18.2609 4.32937 18.2609C4.19112 18.2609 4.0791 18.1488 4.0791 18.0106C4.0791 17.8723 4.19112 17.7602 4.32937 17.7602C4.46763 17.7602 4.5798 17.8723 4.5798 18.0106Z" className={`${!layout == 'column' ? 'stroke-[#66708D]' : 'stroke-[#01040E]'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className={`p-4 rounded-lg transition duration-300 cursor-pointer ${layout == 'grid' ? 'bg-[#EBEBEB]' : ''}`} onClick={() => setLayout('grid')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.10875 4.842C3.21375 3.859 4.02775 3.103 5.01575 3.072C6.08175 2.976 7.15475 2.976 8.22075 3.072C9.21375 3.092 10.0338 3.853 10.1277 4.842C10.2727 6.02 10.2727 7.21 10.1277 8.388C10.0278 9.373 9.21075 10.13 8.22075 10.154C7.15475 10.252 6.08175 10.252 5.01575 10.154C4.02575 10.13 3.20875 9.373 3.10875 8.388C2.96375 7.21 2.96375 6.02 3.10875 4.842Z" className={`${!layout == 'grid' ? 'stroke-[#66708D]' : 'stroke-[#01040E]'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.10875 15.6099C3.21475 14.6279 4.02875 13.8749 5.01575 13.8439C6.08175 13.7459 7.15375 13.7449 8.22075 13.8399C9.21375 13.8599 10.0338 14.6219 10.1277 15.6109C10.2727 16.7879 10.2727 17.9789 10.1277 19.1559C10.0307 20.1429 9.21175 20.9029 8.22075 20.9279C7.15475 21.0239 6.08175 21.0239 5.01575 20.9279C4.02375 20.9029 3.20675 20.1429 3.10875 19.1559C2.96375 17.9779 2.96375 16.7879 3.10875 15.6099Z" className={`${!layout == 'grid' ? 'stroke-[#66708D]' : 'stroke-[#01040E]'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.8732 15.6099C13.9782 14.6279 14.7922 13.8749 15.7792 13.8439C16.8452 13.7459 17.9172 13.7449 18.9842 13.8399C19.9772 13.8599 20.7972 14.6219 20.8902 15.6109C21.0362 16.7879 21.0362 17.9789 20.8902 19.1559C20.7932 20.1429 19.9752 20.9029 18.9842 20.9279C17.9182 21.0239 16.8452 21.0239 15.7792 20.9279C14.7882 20.9019 13.9702 20.1429 13.8732 19.1559C13.7272 17.9779 13.7272 16.7879 13.8732 15.6099Z" className={`${!layout == 'grid' ? 'stroke-[#66708D]' : 'stroke-[#01040E]'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.8732 4.842C13.9772 3.859 14.7912 3.103 15.7792 3.072C16.8452 2.976 17.9182 2.976 18.9842 3.072C19.9762 3.092 20.7972 3.854 20.8902 4.842C21.0362 6.02 21.0362 7.21 20.8902 8.388C20.7912 9.373 19.9742 10.13 18.9842 10.154C17.9182 10.252 16.8452 10.252 15.7792 10.154C14.7892 10.13 13.9722 9.373 13.8732 8.388C13.7272 7.21 13.7272 6.02 13.8732 4.842Z" className={`${!layout == 'grid' ? 'stroke-[#66708D]' : 'stroke-[#01040E]'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar