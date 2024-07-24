import React from 'react'

const Dropdown = ({ title, links, navigation }) => {
    return (
        <div className="dropdown w-full xl:w-auto group relative flex flex-col items-start justify-center p-[16px]">
            <a className='dropdown-title flex items-center justify-center gap-[12px] transition duration-300 hover:text-blue' href={`#`}>
                <span className='font-inter uppercase'>{title}</span>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.625 6.2784L8.5 10.7207L4.375 6.2784" className='transition duration-300 group-hover:stroke-blue' stroke="#66708D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
            <ul className='dropdown-list static xl:absolute top-0 xl:top-[50px] left-0 xl:left-[50%] w-full drop-shadow-none xl:drop-shadow-lg xl:-translate-x-[50%] w-auto xl:w-[200px] hidden  group-hover:flex flex-col items-start xl:items-center justify-start gap-2 mt-[15px] xl:mt-0 bg-white p-4 rounded-lg transition duration-300'>
                {
                    links.map((link, index) => {
                        return <li key={index} className='dropdown-item'>
                            <a href={link.path} className='inline-block font-inter uppercase transition duration-300 hover:text-blue text-center mx-auto'>{link.name}</a>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Dropdown