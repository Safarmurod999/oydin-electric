import React, { useState } from 'react'
import Container from '@/components/Container/Container'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { EffectFade, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useParams } from 'react-router-dom';

import { productsArray } from '@/const/data'
const ProductInner = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const { id } = useParams();
    let data = productsArray.find(product => product.id == id);
    return (
        <section>
            <Container>
                <ul className='flex flex-wrap items-center justify-start gap-[5px] mb-[40px]'>
                    <li className="uppercase font-inter text-dark-gray transition duration-300 hover:text-blue cursor-pointer text-sm">
                        <a href="/" className='whitespace-nowrap'>BOSH SAHIFA  /</a>
                    </li>
                    <li className="uppercase font-inter text-dark-gray transition duration-300 hover:text-blue cursor-pointer text-sm">
                        <a href="/" className='whitespace-nowrap'>KATALOG  /</a>
                    </li>
                    <li className="uppercase font-inter text-dark-gray transition duration-300 hover:text-blue cursor-pointer text-sm">
                        <a href="/" className='whitespace-nowrap'>Proyektor MGL</a>
                    </li>
                </ul>
                {/* PAGE TOP */}
                <div className="w-[270px] flex items-stretch justify-center h-[64px] mb-[64px]">
                    <svg width="17" height="64" viewBox="0 0 17 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7.99999C0 3.58171 3.58172 0 8 0H18V64H15.8846C13.289 64 10.8548 62.7408 9.35511 60.6223L1.47053 49.4847C0.513802 48.1332 0 46.5182 0 44.8623V7.99999Z" fill="#FAFAFA" />
                        <path d="M8 0.5H17.5V63.5H15.8846C13.4513 63.5 11.1692 62.3195 9.7632 60.3334L1.87862 49.1958C0.981689 47.9288 0.5 46.4147 0.5 44.8623V7.99999C0.5 3.85785 3.85786 0.5 8 0.5Z" stroke="#66708D" strokeOpacity="0.3" />
                    </svg>
                    <a href="/catalog" className='flex items-center justify-center gap-[10px] border-y border-y-light-gray -mx-[1px] w-[234px]'>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.60425 13.2969L20.8542 13.2969" stroke="#01040E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.1582 19.8236L4.60404 13.2976L11.1582 6.77051" stroke="#01040E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className='font-bold uppercase text-black text-[18px]'>ORTGA QAYTISH</span>
                    </a>
                    <svg width="17" height="64" viewBox="0 0 17 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 56C17 60.4183 13.4183 64 9 64H-1L-1 0H1.11542C3.71097 0 6.1452 1.25922 7.64489 3.37766L15.5295 14.5153C16.4862 15.8668 17 17.4818 17 19.1377L17 56Z" fill="#FAFAFA" />
                        <path d="M9 63.5H-0.500002L-0.500002 0.5H1.11542C3.54875 0.5 5.83084 1.68052 7.2368 3.66656L15.1214 14.8042C16.0183 16.0712 16.5 17.5853 16.5 19.1377L16.5 56C16.5 60.1421 13.1421 63.5 9 63.5Z" stroke="#66708D" strokeOpacity="0.3" />
                    </svg>
                </div>
                {/* PAGE CONTENT */}
                <div className="flex flex-col inner:flex-row gap-[32px] pb-[200px]">
                    <div className="w-full xl:w-[654px]">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={15}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[FreeMode, Thumbs, EffectFade]}
                            effect="fade"
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            className="mySwiper2 mb-[15px] rounded-[48px] w-full h-[400px] md:h-[654px]"
                        >
                            <SwiperSlide>
                                <div className="w-full flex items-center p-6 justify-center bg-[#EBEBEB] rounded-[48px] h-full">
                                    <img className='w-full max-w-[250px] mini:max-w-[300px] md:max-w-[405px]' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full flex items-center p-6 justify-center bg-[#EBEBEB] rounded-[48px] h-full">

                                    <img className='w-full max-w-[250px] mini:max-w-[300px] md:max-w-[405px]' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full flex items-center p-6 justify-center bg-[#EBEBEB] rounded-[48px] h-full">

                                    <img className='w-full max-w-[250px] mini:max-w-[300px] md:max-w-[405px]' src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full flex items-center p-6 justify-center bg-[#EBEBEB] rounded-[48px] h-full">

                                    <img className='w-full max-w-[250px] mini:max-w-[300px] md:max-w-[405px]' src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full flex items-center p-6 justify-center bg-[#EBEBEB] rounded-[48px] h-full">

                                    <img className='w-full max-w-[250px] mini:max-w-[300px] md:max-w-[405px]' src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full flex items-center p-6 justify-center bg-[#EBEBEB] rounded-[48px] h-full">

                                    <img className='w-full max-w-[250px] mini:max-w-[300px] md:max-w-[405px]' src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full flex items-center p-6 justify-center bg-[#EBEBEB] rounded-[48px] h-full">

                                    <img className='w-full max-w-[250px] mini:max-w-[300px] md:max-w-[405px]' src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full flex items-center p-6 justify-center bg-[#EBEBEB] rounded-[48px] h-full">

                                    <img className='w-full max-w-[250px] mini:max-w-[300px] md:max-w-[405px]' src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full flex items-center p-6 justify-center bg-[#EBEBEB] rounded-[48px] h-full">

                                    <img className='w-full max-w-[250px] mini:max-w-[300px] md:max-w-[405px]' src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full flex items-center p-6 justify-center bg-[#EBEBEB] rounded-[48px] h-full">

                                    <img className='w-full max-w-[250px] mini:max-w-[300px] md:max-w-[405px]' src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={15}
                            slidesPerView={'auto'}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='size-[152px] rounded-[32px]'>
                                <div className="rounded-[32px] flex items-center justify-center bg-[#EBEBEB] h-[152px]">
                                    <img className='w-full max-w-[96px]' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='size-[152px] rounded-[32px]'>
                                <div className="rounded-[32px] flex items-center justify-center bg-[#EBEBEB] h-[152px]">
                                    <img className='w-full max-w-[96px]' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='size-[152px] rounded-[32px]'>
                                <div className="rounded-[32px] flex items-center justify-center bg-[#EBEBEB] h-[152px]">
                                    <img className='w-full max-w-[96px]' src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='size-[152px] rounded-[32px]'>
                                <div className="rounded-[32px] flex items-center justify-center bg-[#EBEBEB] h-[152px]">
                                    <img className='w-full max-w-[96px]' src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='size-[152px] rounded-[32px]'>
                                <div className="rounded-[32px] flex items-center justify-center bg-[#EBEBEB] h-[152px]">
                                    <img className='w-full max-w-[96px]' src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='size-[152px] rounded-[32px]'>
                                <div className="rounded-[32px] flex items-center justify-center bg-[#EBEBEB] h-[152px]">
                                    <img className='w-full max-w-[96px]' src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='size-[152px] rounded-[32px]'>
                                <div className="rounded-[32px] flex items-center justify-center bg-[#EBEBEB] h-[152px]">
                                    <img className='w-full max-w-[96px]' src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='size-[152px] rounded-[32px]'>
                                <div className="rounded-[32px] flex items-center justify-center bg-[#EBEBEB] h-[152px]">
                                    <img className='w-full max-w-[96px]' src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='size-[152px] rounded-[32px]'>
                                <div className="rounded-[32px] flex items-center justify-center bg-[#EBEBEB] h-[152px]">
                                    <img className='w-full max-w-[96px]' src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='size-[152px] rounded-[32px]'>
                                <div className="rounded-[32px] flex items-center justify-center bg-[#EBEBEB] h-[152px]">
                                    <img className='w-full max-w-[96px]' src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="w-full xl:w-[500px] 3xl:w-[620px]">
                        <div className="font-inter text-dark-gray text-[18px] uppercase mb-[10px]">{data.brand}</div>
                        <div className="font-dacia font-bold text-[30px] sm:text-[42px] text-black mb-[40px]">{data.name}</div>
                        <div className="flex items-stretch justify-start gap-[15px] mb-[40px]">
                            <button className='uppercase bg-blue rounded-xl px-[32px] text-white font-medium font inter text-[18px]'>Sotib olish</button>
                            <button className='flex items-center justify-center border border-light-gray rounded-xl size-[54px]'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8459 9.81774C19.8367 7.47694 18.6087 5.27558 16.1874 4.4956C14.5249 3.95909 12.7139 4.25745 11.3075 6.27666C9.90111 4.25745 8.0901 3.95909 6.42756 4.4956C4.0061 5.27567 2.77801 7.47744 2.76912 9.81854C2.74673 14.4742 7.46439 18.0369 11.3063 19.7397L11.3075 19.7392L11.3087 19.7397C15.1508 18.0369 19.8689 14.4739 19.8459 9.81774Z" stroke="#01040E" strokeWidth="1.5" strokeLinecap="square" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full bg-light-gray h-[1px] mb-[40px]"></div>
                        <div className="font-inter text-dark-gray text-[18px] uppercase mb-[20px] uppercase">MAHSULOT HAQIDA:</div>
                        <div className="w-full bg-[#EBEBEB] p-[20px] sm:p-[40px] rounded-2xl border border-[#D0D2D8]">
                            <p className='text-dark-gray font-inter text-[18px]'>
                                Loyihaning jonli tasviri va haqiqiy rangi: 1080p DLP proyektori,
                                20 000:1 kontrast nisbati. O'yin uchun qulay: 17ms da past kirish kechikishi.
                            </p>
                            <div className="flex flex-col">
                                <div className="w-full flex items-center justify-between py-[15px]">
                                    <div className="text-[16px] font-inter sm:text-[14px] font-bold text-black">Kommutatsiya quvvati</div>
                                    <div className="text-[16px] font-inter sm:text-[14px] font-bold text-dark-gray text-end uppercase">{data.power} WATT</div>
                                </div>
                                <svg className='w-full' width="540" height="1" viewBox="0 0 540 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line opacity="0.3" y1="0.5" x2="540" y2="0.5" stroke="#66708D" strokeDasharray="8 8" />
                                </svg>

                                <div className="w-full flex items-center justify-between py-[15px]">
                                    <div className="text-[16px] font-inter sm:text-[14px] font-bold text-black">Qutblar soni</div>
                                    <div className="text-[16px] font-inter sm:text-[14px] font-bold text-dark-gray text-end">{data.polarity} ta</div>
                                </div>
                                <svg className='w-full' width="540" height="1" viewBox="0 0 540 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line opacity="0.3" y1="0.5" x2="540" y2="0.5" stroke="#66708D" strokeDasharray="8 8" />
                                </svg>

                                <div className="w-full flex items-center justify-between py-[15px]">
                                    <div className="text-[16px] font-inter sm:text-[14px] font-bold text-black">Operatsion xarakteristikasi</div>
                                    <div className="text-[16px] font-inter sm:text-[14px] font-bold text-dark-gray text-end uppercase">{data.characteristic}</div>
                                </div>
                                <svg className='w-full' width="540" height="1" viewBox="0 0 540 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line opacity="0.3" y1="0.5" x2="540" y2="0.5" stroke="#66708D" strokeDasharray="8 8" />
                                </svg>

                                <div className="w-full flex items-center justify-between py-[15px]">
                                    <div className="text-[16px] font-inter sm:text-[14px] font-bold text-black">Chiroq</div>
                                    <div className="text-[16px] font-inter sm:text-[14px] font-bold text-dark-gray text-end uppercase">Metall halid</div>
                                </div>

                                <svg className='w-full' width="540" height="1" viewBox="0 0 540 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line opacity="0.3" y1="0.5" x2="540" y2="0.5" stroke="#66708D" strokeDasharray="8 8" />
                                </svg>

                                <div className="w-full flex items-center justify-between py-[15px]">
                                    <div className="text-[16px] font-inter sm:text-[14px] font-bold text-black">Ishlash kuchlanishi</div>
                                    <div className="text-[16px] font-inter sm:text-[14px] font-bold text-dark-gray text-end uppercase">220-240 V.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ProductInner