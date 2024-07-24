import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const FilterDropdown = ({ title, offset, array, handleFunction, type }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [toggleDrop, setToggleDrop] = useState(true);
    const [slice, setSlice] = useState(array.slice(0, offset));
    const [last, setLast] = useState(offset);

    const handleOffset = () => {
        if (last < array.length) {
            setSlice(slice.concat(array.slice(last, last + offset)));
            setLast(last + offset);
        } else if (array.length == slice.length) {
            setSlice(array.slice(0, offset));
            setLast(offset);
        }
    }
    const handleCheck = (value) => {
        const categories = searchParams.getAll(type);
        let isExist = false;
        let arr = categories.length ? categories : []
        for (const el of arr) {
            if (el == value) {
                isExist = true;
                break;
            }
        }
        return isExist;
    }
    return (
        <div className="w-full md:w-[300px] 3xl:min-w-[396px] border border-[#BAC0D0] rounded-lg p-[24px] pb-[32px] bg-gray mb-6">
            <div className="flex justify-between items-center gap-[15px] border-b border-[#BAC0D0] pb-[12px] cursor-pointer" onClick={() => setToggleDrop(!toggleDrop)}>
                <div className="text-[18px] font-semibold uppercase text-black font-inter">{title}</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 8.5L12 15.5L5 8.5" stroke="#66708D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <ul className={`mt-6 space-y-[12px] ${toggleDrop ? 'flex flex-col' : 'hidden'}`}>
                {
                    slice.map((item) => (
                        <li key={item.id} className='flex items-center justify-start gap-[10px]'>
                            <input type="checkbox"
                                name={`checkbox-${item.id + item.name}`}
                                id={`checkbox-${item.id + item.name}`}
                                className='rounded-[4px] size-[24px] border border-[#BAC0D0] cursor-pointer'
                                onChange={() => handleFunction(item.id)}
                                checked={handleCheck(item.id)}
                            />
                            <label htmlFor={`checkbox-${item.id + item.name}`} className='font-inter font-semibold text-black first-letter:uppercase cursor-pointer'>
                                {item.name}
                            </label>
                        </li>
                    ))
                }
            </ul>
            <div className={`flex mt-6 font-inter font-semibold text-blue border-b border-blue max-w-[150px] ${toggleDrop ? 'flex flex-col' : 'hidden'} cursor-pointer`}
                onClick={handleOffset}>
                {
                    (array.length > slice.length) ? `Yana ko'rsatish: ${array.length - slice.length}` : 'Yopish'
                }
            </div>
        </div>
    )
}

export default FilterDropdown