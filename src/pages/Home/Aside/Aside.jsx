import React, { useState } from 'react'
import FilterDropdown from '@/components/FilterDropdown/FilterDropdown'
import { productArray } from "@/const/data.js"
import { companyArray } from '@/const/data'
import { useSearchParams } from 'react-router-dom'
const Aside = ({ openAside, setOpenAside, category, brand, search, setBrand, setCategory, setSearch }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [params, setParams] = useState(Object.fromEntries(searchParams.entries()))

    const handleCategory = (newCategory) => {
        let categoryArray = searchParams.getAll('category')
        if (!categoryArray.includes(`${newCategory}`)) {
            if (searchParams.getAll('brand').length) {
                params.brand = brand
            }
            if (searchParams.get('q') && searchParams.get('q').length > 0) {
                params.q = search
            }
            categoryArray.push(newCategory)
            setCategory(categoryArray);
            params.category = categoryArray;
            setParams(params);
            setSearchParams(params);
        } else {
            if (searchParams.getAll('brand').length) {
                params.brand = brand
            }
            if (searchParams.get('q') && searchParams.get('q').length > 0) {
                params.q = search
            }
            categoryArray = categoryArray.filter((item) => item != newCategory);
            setCategory(categoryArray);
            params.category = categoryArray;
            setParams(params);
            setSearchParams(params);
        }

    }
    const handleBrand = (newBrand) => {
        let brandArray = searchParams.getAll('brand')
        if (!brandArray.includes(`${newBrand}`)) {
            if (searchParams.getAll('category').length) {
                params.category = category
            }
            if (searchParams.get('q') && searchParams.get('q').length > 0) {
                params.q = search
            }
            brandArray.push(newBrand)
            setBrand(brandArray);
            params.brand = brandArray;
            setParams(params);
            setSearchParams(params);
        } else {
            if (searchParams.getAll('category').length) {
                params.category = category
            }
            if (searchParams.get('q') && searchParams.get('q').length > 0) {
                params.q = search
            }
            brandArray = brandArray.filter((item) => item != newBrand);
            setBrand(brandArray);
            params.brand = brandArray;
            setParams(params);
            setSearchParams(params);
        }
    }
    return (
        <aside className={`aside fixed top-[100px] w-full sm:w-auto md:top-[110px] left-0 grow h-[91svh] xl:static p-6 xl:p-0 overflow-y-scroll xl:overflow-y-visible
            drop-shadow-lg xl:drop-shadow-none rounded-lg transition duration-300 xl:translate-x-0
            bg-white xl:bg-transparent z-30 ${openAside ? 'translate-x-0' : '-translate-x-[100%]'}`}>
            <button className='block xl:hidden mb-6 ml-auto' onClick={() => setOpenAside(false)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.12134" width="24" height="3" rx="1" transform="rotate(45 2.12134 0)" fill="#231F20" />
                    <rect x="0.121338" y="17" width="24" height="3" rx="1" transform="rotate(-45 0.121338 17)" fill="#231F20" />
                </svg>
            </button>
            <FilterDropdown array={productArray} title={'Mahsulot Turi'} offset={4} handleFunction={handleCategory} type="category" />
            <FilterDropdown array={companyArray} title={'Kompaniyalar'} offset={6} handleFunction={handleBrand} type="brand" />
        </aside>
    )
}

export default Aside