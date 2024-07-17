import React from 'react'
import FilterDropdown from '@/components/FilterDropdown/FilterDropdown'
import { productArray } from "@/const/data.js"
import { companyArray } from '@/const/data'
const Aside = ({ openAside, setOpenAside }) => {
    return (
        <aside className={`fixed top-[110px] left-0 h-[91svh] xl:static p-6 xl:p-0 
            drop-shadow-lg xl:drop-shadow-none rounded-lg transition duration-300 xl:translate-x-0
            bg-white z-20 ${openAside ? 'translate-x-[10px]' : '-translate-x-[100%]'}`}>
            <button className='block xl:hidden mb-6 ml-auto' onClick={() => setOpenAside(false)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.12134" width="24" height="3" rx="1" transform="rotate(45 2.12134 0)" fill="#231F20" />
                    <rect x="0.121338" y="17" width="24" height="3" rx="1" transform="rotate(-45 0.121338 17)" fill="#231F20" />
                </svg>
            </button>
            <FilterDropdown array={productArray} title={'Mahsulot Turi'} offset={4} />
            <FilterDropdown array={companyArray} title={'Kompaniyalar'} offset={6} />
        </aside>
    )
}

export default Aside