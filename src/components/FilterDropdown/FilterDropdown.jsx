import React, { useState } from 'react'

const FilterDropdown = ({ title, offset, array }) => {
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
    return (
        <div className="w-full md:w-[300px] 3xl:w-[396px] border border-[#BAC0D0] rounded-lg p-[24px] pb-[32px] bg-gray mb-6">
            <div className="flex justify-between items-center gap-[15px] border-b border-[#BAC0D0] pb-[12px]" onClick={() => setToggleDrop(!toggleDrop)}>
                <div className="text-[18px] font-semibold uppercase text-black font-inter">{title}</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 8.5L12 15.5L5 8.5" stroke="#66708D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <ul className={`mt-6 space-y-[12px] ${toggleDrop ? 'flex flex-col' : 'hidden'}`}>
                {
                    slice.map((item) => (
                        <li key={item.id} className='flex items-center justify-start gap-[10px]'>
                            <input type="checkbox" name={`checkbox-${item.id + item.name}`} id={`checkbox-${item.id + item.name}`} className='rounded-[4px] size-[24px] border border-[#BAC0D0]' />
                            <label htmlFor={`checkbox-${item.id + item.name}`} className='font-inter font-semibold text-black'>
                                {item.name}
                            </label>
                        </li>
                    ))
                }
            </ul>
            <div className={`inline-block mt-6 font-inter font-semibold text-blue border-b border-blue ${toggleDrop ? 'flex flex-col' : 'hidden'}`}
                onClick={handleOffset}>
                {
                    (array.length > slice.length) ? `Yana ko'rsatish: ${array.length - slice.length}` : 'Yopish'
                }
            </div>
        </div>
    )
}

export default FilterDropdown