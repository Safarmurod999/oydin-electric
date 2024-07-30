import React, { useState } from 'react'
import Container from '@/components/Container/Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import corner from "@/assets/images/corner.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { EffectFade, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useNavigate, useParams } from 'react-router-dom';
import { Bookmarks, ShoppingCart, Spinner } from '@/components/index';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, addItem, setIsModalOpen } from '@/store/cartSlice';
import { useFetchMultipleAPIs } from '@/hooks/hooks';
import ProductCard from './ProductCard/ProductCard';

const ProductInner = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const navigate = useNavigate();

    const { id } = useParams();

    const dispatch = useDispatch();

    const { bookmarks } = useSelector(store => store.cart);

    const urls = [
        `/product-detail/${id}`,
        '/product-list',
        '/categories',
        '/brands',
        '/characteristics'
    ]
    const { data: product, loading, error } = useFetchMultipleAPIs(urls);

    if (loading) {
        return <Spinner position="full" />
    }
    if (error) {
        console.log(error);
    }

    const brand = product[3].find(el => el.id == product[0].brand)?.name;

    const products = product[1]?.results.map(el => {
        let characteristics = product[4].filter(item => item.product == el.id);
        let brand_image = product[3].find(item => item.id == el.brand)?.brand_image;
        return {
            ...el,
            characteristics: characteristics,
            brand_image: brand_image
        }
    });

    return (
        !loading && (
            <section className='pb-[40px] md:pb-[80px] lg:pb-[120px] xl:pb-[160px] 2xl:pb-[200px] 3xl:pb-[240px]'>
                <Container>
                    <ul className='flex flex-wrap items-center justify-start gap-[5px] mb-[40px]'>
                        <li className="uppercase font-inter text-dark-gray transition duration-300 hover:text-blue cursor-pointer text-sm">
                            <a aria-label='breadcroumb' href="/" className='whitespace-nowrap'>BOSH SAHIFA  /</a>
                        </li>
                        <li className="uppercase font-inter text-dark-gray transition duration-300 hover:text-blue cursor-pointer text-sm">
                            <a aria-label='breadcroumb' href="/catalog" className='whitespace-nowrap'>KATALOG  /</a>
                        </li>
                        <li className="uppercase font-inter text-dark-gray transition duration-300 hover:text-blue cursor-pointer text-sm">
                            <a aria-label='breadcroumb' href={`/catalog/${id}`} className='whitespace-nowrap'>{product[0].name}</a>
                        </li>
                    </ul>
                    {/* PAGE TOP */}
                    <div className="w-[270px] flex items-stretch justify-center h-[64px] mb-[64px]">
                        <svg width="17" height="64" viewBox="0 0 17 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 7.99999C0 3.58171 3.58172 0 8 0L18.5 0L18.5 64H15.3683C12.6972 64 10.2024 62.6669 8.71779 60.4465L1.34951 49.4258C0.469653 48.1099 0 46.5624 0 44.9794L0 7.99999Z" fill="#FAFAFA" />
                            <path d="M8 0.5L18 0.5L18 63.5H15.3683C12.8642 63.5 10.5252 62.2503 9.13344 60.1686L1.76517 49.1479C0.940299 47.9142 0.5 46.4635 0.5 44.9794L0.5 7.99999C0.5 3.85785 3.85786 0.5 8 0.5Z" stroke="#66708D" strokeOpacity="0.3" />
                        </svg>
                        <a aria-label='back-link' href="/catalog" className='flex items-center justify-center gap-[10px] border-y-[1.5px] border-y-light-gray -mx-[1px] w-[234px]'>
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
                    <div className="flex flex-col inner:flex-row gap-[32px] pb-[40px] md:pb-[80px] xl:pb-[120px] 2xl:pb-[160px] 3xl:pb-[200px]">
                        {/* Product Images */}
                        <div className="w-full xl:w-[654px]">
                            {
                                product[0]?.product_shots.length > 0 ? <>
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
                                        className="mySwiper2 mb-[15px] rounded-[20px] sm:rounded-[48px] w-full h-[300px] mini:h-[350px] sm:h-[654px]"
                                    >
                                        {
                                            product[0]?.product_shots.map(el => {
                                                return <SwiperSlide key={el.id}>
                                                    <div className="w-full flex items-center p-6 justify-center bg-[#EBEBEB] rounded-[20px] sm:rounded-[48px] h-full">
                                                        <img className='w-full max-w-[250px] mini:max-w-[300px] sm:max-w-[405px]' src={el.image} />
                                                    </div>
                                                </SwiperSlide>
                                            })
                                        }
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
                                        {
                                            product[0]?.product_shots.map(el => {
                                                return <SwiperSlide key={el.id} className='size-[100px] sm:size-[152px] rounded-[10px] sm:rounded-[32px]'>
                                                    <div className="rounded-[10px] sm:rounded-[32px] flex items-center justify-center bg-[#EBEBEB] h-[100px] sm:h-[152px]">
                                                        <img className='w-full max-w-[66px] sm:max-w-[96px]' src={el.image} />
                                                    </div>
                                                </SwiperSlide>
                                            })
                                        }
                                    </Swiper>
                                </> : <div className="w-full flex items-center p-6 justify-center bg-[#EBEBEB] rounded-[20px] sm:rounded-[48px] h-full">
                                    <img className='w-full max-w-[250px] mini:max-w-[300px] sm:max-w-[405px]' src={product[0]?.image} />
                                </div>
                            }
                        </div>
                        {/* Product Details */}
                        <div className="w-full xl:w-[500px] 3xl:w-[620px]">
                            <div className="font-inter text-dark-gray text-[18px] uppercase mb-[10px] first-letter:uppercase">{brand}</div>
                            <div className="font-dacia font-bold text-[30px] sm:text-[42px] text-black mb-[40px] first-letter:uppercase">{product[0].name}</div>
                            <div className="flex items-stretch justify-start gap-[15px] mb-[40px]">
                                <button className='uppercase bg-blue rounded-xl px-[32px] text-white font-medium font inter text-[18px]' onClick={() => {
                                    dispatch(addItem(product[0]));
                                    dispatch(setIsModalOpen(true))
                                }}>Sotib olish</button>
                                <button className={`flex items-center justify-center border border-light-gray rounded-xl size-[54px] ${bookmarks.find(item => item.id == product[0].id) ? 'bg-yellow' : 'bg-white'}`} onClick={() => dispatch(addBookmark(product[0]))}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.8459 9.81774C19.8367 7.47694 18.6087 5.27558 16.1874 4.4956C14.5249 3.95909 12.7139 4.25745 11.3075 6.27666C9.90111 4.25745 8.0901 3.95909 6.42756 4.4956C4.0061 5.27567 2.77801 7.47744 2.76912 9.81854C2.74673 14.4742 7.46439 18.0369 11.3063 19.7397L11.3075 19.7392L11.3087 19.7397C15.1508 18.0369 19.8689 14.4739 19.8459 9.81774Z" stroke={`${bookmarks.find(item => item.id == product[0].id) ? 'white' : '#01040E'}`} strokeWidth="1.5" strokeLinecap="square" />
                                    </svg>
                                </button>
                            </div>
                            <div className="w-full bg-light-gray h-[1px] mb-[40px]"></div>
                            <div className="font-inter text-dark-gray text-[18px] uppercase mb-[20px] uppercase">MAHSULOT HAQIDA:</div>
                            <div className="w-full bg-[#EBEBEB] p-[20px] sm:p-[40px] rounded-2xl border border-[#D0D2D8]">
                                <p className='text-dark-gray font-inter text-[18px] first-letter:uppercase'>
                                    {product[0].description}
                                </p>
                                <div className="flex flex-col">
                                    {
                                        product[0]?.characteristics.map(el => {
                                            return (
                                                <div key={el.id} className="w-full flex items-center justify-between py-[15px] inner-border">
                                                    <div className="text-[16px] font-inter sm:text-[14px] font-bold text-black first-letter:uppercase">{el.name}</div>
                                                    <div className="text-[16px] font-inter sm:text-[14px] font-bold text-dark-gray text-end uppercase">{el.value}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* PAGE LIST */}
                    <div className="w-full bg-dark-gray h-[1px] opacity-30 mb-[20px]"></div>
                    <div className="w-full flex justify-between items-start mb-[40px] sm:mb-[60px] md:mb-[80px] xl:mb-[100px] 3xl:mb-[160px]">
                        <p className='text-dark-gray uppercase font-dacia opacity-30 tracking-[1%]'>02/</p>
                        <p className='text-dark-gray uppercase font-dacia opacity-30 tracking-[1%]'>MAHSULOTLARIMIZ</p>
                    </div>
                    <div className='mx-auto max-w-[960px] text-2xl xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-black text-center font-dacia font-bold '>
                        O’XSHASH MAHSULOTLARIMIZ
                    </div>
                    {/* CARD LIST */}
                    <div className="grow flex flex-wrap items-stretch justify-center inner:justify-betweeen gap-[10px] lg:gap-[30px] mb-12 mt-[40px] md:mt-[60px] xl:mt-[80px] 2xl:mt-[100px] 3xl:mt-[120px]">
                        {
                            products.map(el => {
                                return <ProductCard key={el.id} el={el} />
                            })
                        }
                    </div>
                    {/* LINK BUTTON */}
                    <div className="w-[300px] sm:w-[390px] flex items-stretch justify-center h-[64px] md:mb-[30px] 3xl:mb-[64px] mx-auto">
                        <svg width="17" height="64" viewBox="0 0 17 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 7.99999C0 3.58171 3.58172 0 8 0L18.5 0L18.5 64H15.3683C12.6972 64 10.2024 62.6669 8.71779 60.4465L1.34951 49.4258C0.469653 48.1099 0 46.5624 0 44.9794L0 7.99999Z" fill="#FAFAFA" />
                            <path d="M8 0.5L18 0.5L18 63.5H15.3683C12.8642 63.5 10.5252 62.2503 9.13344 60.1686L1.76517 49.1479C0.940299 47.9142 0.5 46.4635 0.5 44.9794L0.5 7.99999C0.5 3.85785 3.85786 0.5 8 0.5Z" stroke="#66708D" strokeOpacity="0.3" />
                        </svg>
                        <a aria-label='all-btn' href="/catalog" className='flex items-center justify-center gap-[10px] border-y-[1.5px] border-y-light-gray -mx-[1px] grow'>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.7373 9.7118V16.2696C4.7373 17.1385 5.20141 17.9421 5.95351 18.3761L11.6327 21.655C12.3858 22.0899 13.313 22.0899 14.0661 21.655L19.7453 18.3761C20.4974 17.9421 20.9615 17.1385 20.9615 16.2696V9.7118C20.9615 8.84197 20.4974 8.03927 19.7453 7.60435L14.0661 4.32546C13.313 3.89151 12.3858 3.89151 11.6327 4.32546L5.95351 7.60435C5.20141 8.03927 4.7373 8.84197 4.7373 9.7118Z" stroke="#01040E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.6252 8.46484L12.8531 12.9609L5.08203 8.46484" stroke="#01040E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.8516 21.9998V12.9541" stroke="#01040E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.4244 6.0459L8.65234 10.542V13.2818" stroke="#01040E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span className='font-bold uppercase text-black text-[18px]'>Barcha mahsulotlar</span>
                        </a>
                        <svg width="17" height="64" viewBox="0 0 17 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 56C17 60.4183 13.4183 64 9 64H-1L-1 0H1.11542C3.71097 0 6.1452 1.25922 7.64489 3.37766L15.5295 14.5153C16.4862 15.8668 17 17.4818 17 19.1377L17 56Z" fill="#FAFAFA" />
                            <path d="M9 63.5H-0.500002L-0.500002 0.5H1.11542C3.54875 0.5 5.83084 1.68052 7.2368 3.66656L15.1214 14.8042C16.0183 16.0712 16.5 17.5853 16.5 19.1377L16.5 56C16.5 60.1421 13.1421 63.5 9 63.5Z" stroke="#66708D" strokeOpacity="0.3" />
                        </svg>
                    </div>
                </Container>

                <Bookmarks />
                <ShoppingCart />
            </section >
        )
    )
}

export default ProductInner