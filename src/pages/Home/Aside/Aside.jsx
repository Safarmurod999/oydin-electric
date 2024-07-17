import React from 'react'
import FilterDropdown from '@/components/FilterDropdown/FilterDropdown'
import { productArray } from "@/const/data.js"
import { companyArray } from '@/const/data'
const Aside = () => {
    return (
        <aside>
            <FilterDropdown array={productArray} title={'Mahsulot Turi'} offset={4} />
            <FilterDropdown array={companyArray} title={'Kompaniyalar'} offset={6} />
        </aside>
    )
}

export default Aside