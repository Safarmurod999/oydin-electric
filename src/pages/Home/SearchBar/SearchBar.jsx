import React, { useContext, useState } from 'react'
import { Context } from '@/context/catalogContext';

const SearchBar = ({ search, setSearch, params, brand, category, setParams, setSearchParams, searchParams }) => {
    const [openSelect, setOpenSelect] = useState(false);
    const [filter, setFilter] = useState("So'nggi tovarlar");
    const { state, dispatch } = useContext(Context)
    const handleFilter = (filter, name) => {
        dispatch({ type: 'ON_FILTER', payload: filter })
        setFilter(name);
        setOpenSelect(false)
    }
    const handleSearch = (search) => {
        if (searchParams.getAll('brand').length) {
            params.brand = brand
        }
        if (searchParams.getAll('category').length) {
            params.category = category
        }
        if (search.length > 0) {
            setSearch(search);
            params.q = search;
        } else {
            setSearch('');
            delete params.q;
            searchParams.delete('q');
        }
        setParams(params);
        setSearchParams(params);
    }
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
                        <button aria-label='select-btn' className="inline-flex w-full justify-between
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
                        <div className="py-1">
                            <div className="block px-4 py-2 text-dark-gray hover:bg-[#F3F4F6] cursor-pointer" onClick={() => handleFilter("latest", "So'nggi Tovarlar")} id="menu-item-0">So'nggi Tovarlar</div>
                            <div className="block px-4 py-2 text-dark-gray hover:bg-[#F3F4F6] cursor-pointer" onClick={() => handleFilter("ascending", "Harflar: O'sish tartibida")} id="menu-item-1">Harflar: O'sish tartibida</div>
                            <div className="block px-4 py-2 text-dark-gray hover:bg-[#F3F4F6] cursor-pointer" onClick={() => handleFilter('descending', "Harflar: Kamayish tartibida")} id="menu-item-2">Harflar: Kamayish tartibida</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar