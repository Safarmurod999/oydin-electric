import React from 'react'

const Dropdown = ({ title }) => {
    return (
        <div className="dropdown group relative p-[16px]">
            <a className='dropdown-title flex items-center justify-center gap-[12px] transition duration-300 hover:text-blue' href="#">
                <span className='font-inter uppercase'>{title}</span>
                
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.625 6.2784L8.5 10.7207L4.375 6.2784" className='transition duration-300 group-hover:stroke-blue' stroke="#66708D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </a>
            <ul className='dropdown-list absolute top-[50px] left-[50%] -translate-x-[50%] w-[150px] hidden group-hover:flex flex-col items-center justify-start gap-2 bg-white p-4 rounded-lg transition duration-300'>
                <li className='dropdown-item'>
                    <a href="/" className='font-inter uppercase transition duration-300 hover:text-blue'>B2B sotuv</a>
                </li>
                <li className='dropdown-item'>
                    <a href="/" className='font-inter uppercase transition duration-300 hover:text-blue'>Kategoriyalar</a>
                </li>
            </ul>

        </div>
    )
}

export default Dropdown