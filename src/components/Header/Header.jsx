import React, { useState } from 'react'
import logo from '@/assets/icons/logo.svg'

import Dropdown from './Dropdown'
import Container from '../Container/Container';


const Header = ({ data }) => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const catalog = [{
        id: 0,
        path: 'https://oydin-electric.framer.website/brendlar/tess',
        name: "Tess"
    }, {
        id: 1,
        path: 'https://oydin-electric.framer.website/brendlar/kaya',
        name: "Kaya"
    }];
    const brands = [{
        id: 0,
        path: 'https://oydin-electric.framer.website/brendlar/tess',
        name: "Tess"
    }, {
        id: 1,
        path: 'https://oydin-electric.framer.website/brendlar/kaya',
        name: "Kaya"
    }];
    return (
        <header className='fixed w-full top-0 left-0 z-50'>
            <nav className='relative py-[15px] lg:py-[30px] bg-gray rounded-b-[24px] '>
                <Container style={'flex items-center justify-between'}>
                    <div className='navbar-logo'>
                        <a href="/">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    <div className={`flex grow-[0.5] flex-col xl:flex-row items-start 
                         xl:items-center justify-between absolute xl:static top-[100px] lg:top-[135px]
                         left-0 -translate-x-[100%] xl:translate-x-[0px] p-4 xl:p-0
                         w-nav-mobile sm:w-[320px] xl:w-auto rounded-xl bg-gray xl:bg-transparent transition duration-300
                         drop-shadow-xl xl:drop-shadow-none
                         ${openNavbar ? 'translate-x-[15px]' : '-translate-x-[100%]'}`}>
                        <div className="navbar-main ">
                            <ul className="navbar-menu flex flex-col xl:flex-row items-start xl:items-center justify-center">
                                <li className="navbar-item text-dark-gray font-bold">
                                    <Dropdown title={'Katalog'} links={catalog} navigation={'category'} />
                                </li>
                                <li className="navbar-item text-dark-gray font-bold p-[16px]">
                                    <a href="https://oydin-electric.framer.website/b2b" className="navbar-link font-inter uppercase transition duration-300 hover:text-blue">B2B sotuv</a>
                                </li>
                                <li className="navbar-item text-dark-gray font-bold p-[16px]">
                                    <a href="https://oydin-electric.framer.website/news" className="navbar-link font-inter uppercase transition duration-300 hover:text-blue">Yangiliklar</a>
                                </li>
                                <li className="navbar-item text-dark-gray font-bold">
                                    <Dropdown title={'Brendlar'} links={brands} navigation={'brand'} />
                                </li>
                                <li className="navbar-item text-dark-gray font-bold p-[16px]">
                                    <a href="https://oydin-electric.framer.website/about-us" className="navbar-link font-inter uppercase transition duration-300 hover:text-blue">Kompaniya haqida</a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-contact flex items-center gap-[15px] p-3 xl:p-0">
                            <a href="tel:+998 71 184 11 81" className="navbar-link bg-blue py-[16px] px-[25px] rounded-2xl">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1956 11.6406C13.5902 15.0343 14.599 10.8692 16.7601 13.0285C18.8445 15.112 20.0415 15.5284 17.4023 18.1676C17.0704 18.4334 14.9701 21.6308 7.58684 14.2495C0.203639 6.86802 3.39755 4.7649 3.66334 4.43401C6.30963 1.78773 6.71991 2.9918 8.8034 5.07529C10.9636 7.23549 6.80107 8.24691 10.1956 11.6406Z" stroke="#F8F9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.2593 5.93164C14.7666 6.22419 15.9448 7.4024 16.2374 8.90972" stroke="#F8F9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.2593 2.91602C16.4087 3.26564 18.8961 5.7505 19.2493 8.89981" stroke="#F8F9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="/" className="navbar-link bg-blue py-[16px] px-[25px] rounded-2xl">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4703 14.6311L9.33863 16.4514C8.9596 16.7742 8.37183 16.5718 8.27283 16.084L7.46037 12.0865L3.52165 11.587C2.62172 11.4728 2.45939 10.2384 3.29868 9.89501L18.098 3.83807C18.7242 3.5821 19.3788 4.13776 19.2281 4.79688L16.3223 17.5172C16.1627 18.2173 15.2939 18.4671 14.7864 17.9596L9.94693 13.121" stroke="#F8F9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.46045 12.0837L14.1435 7.58398" stroke="#F8F9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <button className='flex xl:hidden p-[10px] rounded-[13px] border-[1.5px] border-[#3A3A3B]' onClick={() => setOpenNavbar(!openNavbar)}>
                        {
                            !openNavbar ? <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5.33325" y="9.3335" width="16" height="4" rx="2" fill="#000000" />
                                <rect x="21.3333" y="28" width="16" height="4" rx="2" fill="#000000" />
                                <rect opacity="0.6" x="5.33325" y="28" width="8" height="4" rx="2" fill="#000000" />
                                <rect opacity="0.6" x="29.3333" y="9.3335" width="8" height="4" rx="2" fill="#000000" />
                                <rect x="5.33325" y="18.6665" width="32" height="4" rx="2" fill="#000000" />
                            </svg> :
                                <svg width="42" height="42" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.6" x="6.5" y="4" width="7.42857" height="2.28571" rx="1.14286" transform="rotate(42 6.5 4)" fill="#000000" />
                                    <rect opacity="0.6" x="15.0713" y="12" width="7.42857" height="2.28571" rx="1.14286" transform="rotate(42 15.0713 12)" fill="#000000" />
                                    <rect x="5.35718" y="16.5713" width="18.2857" height="2.28571" rx="1.14286" transform="rotate(-42 5.35718 16.5713)" fill="#000000" />
                                </svg>
                        }
                    </button>
                </Container>
            </nav>
        </header>
    )
}

export default Header