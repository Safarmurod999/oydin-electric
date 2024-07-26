import React from 'react'
import { useNavigate } from 'react-router-dom';
import corner from "@/assets/images/corner.png"
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark } from '../../../store/cartSlice';
const ProductCard = ({ el }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { bookmarks } = useSelector(state => state.cart);
    return (
        <div className="flex flex-col relative w-full h-full">
            <div className="w-full relative flex items-center justify-center pt-[55px] 3xl:pt-[75px] min-h-[154px] max-h-[154px] sm:min-h-[295px] sm:max-h-[295px] px-[60px] 3xl:px-[80px] pb-[45px] z-10 overflow-hidden">
                {
                    el.image ? <img src={el?.image} alt={el.image} className="max-w-[92px] sm:max-w-full w-full z-10 h-full" /> : <p className="text-black">No Image</p>
                }
                {
                    el.brand_image && <img src={el?.brand_image} alt={el.brand} className="absolute top-[30px] left-[30px] w-[43px] sm:w-[70px] 3xl:w-[108px] z-10" />
                }
                <img src={corner} alt="corner" className="absolute top-0 right-0 z-0 w-full h-full" />
            </div>
            <div className="flex flex-col items-center justify-between px-[12px] slider:px-[30px] pt-[50px] pb-[15px] slider:pb-[40px] -mt-[45px] 3xl:-mt-[40px] 3xl:-mt-12 border-[3px] border-gray rounded-xl slider:rounded-3xl h-full">
                <div className="w-full flex flex-col  mb-[20px] xl:mb-[40px]">
                    <div className="w-full flex items-center justify-between py-[15px]">
                        <div className="text-[6px] slider:text-[14px] sm:text-[18px] font-bold font-dacia first-letter:uppercase text-blue">{el.name_uz.split(" ")[0]}</div>
                        {/* <div className="text-[18px] sm:text-[14px] font-bold font-dacia first-letter:uppercase text-dark-gray text-end uppercase">{el.name_uz.split(" ")[1]}</div> */}
                    </div>
                    {
                        el.characteristics.map(data => {
                            return (
                                <div key={data.id} className="w-full flex items-center justify-between py-[6px] slider:py-[15px] inner-border">
                                    <div className=" font-inter text-[6px] slider:text-[14px] md:text-[16px] font-bold text-black first-letter:uppercase">{data.name}</div>
                                    <div className=" font-inter text-[6px] slider:text-[14px] md:text-[16px] font-bold text-dark-gray text-end uppercase">{data.value}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-full flex items-center justify-between gap-[5px] slider:gap-[12px] mt-auto">
                    <div className="group flex items-stretch justify-between grow">
                        <svg className="w-[9px] h-[21px] slider:w-[20px] slider:h-[54px]" width="20" height="54" viewBox="0 0 20 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="group-hover:fill-yellow" d="M0 6C0 2.68629 2.68629 0 6 0H20V54H14.2687C12.4659 54 10.7588 53.1895 9.61929 51.7925L1.35063 41.6558C0.47708 40.5849 0 39.2452 0 37.8632V6Z" fill="#0236E5" />
                        </svg>

                        <button onClick={() => navigate(`/catalog/${el.id}`)} className="relative flex items-center justify-center gap-[10px] grow py-[6px] slider:py-[15px] -mx-[1px] bg-blue group-hover:bg-yellow  h-[21px] slider:h-[54px]">
                            <svg className="size-[10px] slider:size-[24px] z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="group-hover:fill-black" fillRule="evenodd" clipRule="evenodd" d="M17.0183 7.67028C17.6913 7.67728 18.6263 7.68028 19.4203 7.67728C19.8263 7.67628 20.0333 7.18528 19.7513 6.89028C19.2423 6.35628 18.5333 5.61028 17.8203 4.86228C17.1053 4.11128 16.3873 3.35628 15.8643 2.80828C15.5763 2.50428 15.0713 2.71328 15.0713 3.13328V5.70328C15.0713 6.78228 15.9503 7.67028 17.0183 7.67028Z" fill="#F8F9FF" />
                                <path className="group-hover:fill-black" fillRule="evenodd" clipRule="evenodd" d="M14.8594 13.811H8.1314C7.7174 13.811 7.3814 13.475 7.3814 13.061C7.3814 12.647 7.7174 12.311 8.1314 12.311H14.8594C15.2734 12.311 15.6094 12.647 15.6094 13.061C15.6094 13.475 15.2734 13.811 14.8594 13.811ZM12.5904 17.232H8.1314C7.7174 17.232 7.3814 16.896 7.3814 16.482C7.3814 16.068 7.7174 15.732 8.1314 15.732H12.5904C13.0054 15.732 13.3404 16.068 13.3404 16.482C13.3404 16.896 13.0054 17.232 12.5904 17.232ZM8.1314 8.891H11.0744C11.4884 8.891 11.8244 9.227 11.8244 9.641C11.8244 10.055 11.4884 10.391 11.0744 10.391H8.1314C7.7174 10.391 7.3814 10.055 7.3814 9.641C7.3814 9.227 7.7174 8.891 8.1314 8.891ZM19.8534 9.094H16.8894C15.1234 9.085 13.6654 7.622 13.6654 5.838V2.698C13.6654 2.455 13.4724 2.25 13.2214 2.25H8.0664C5.6624 2.25 3.7124 4.229 3.7124 6.647V17.158C3.7124 19.693 5.7594 21.75 8.2694 21.75H15.9434C18.3474 21.75 20.2874 19.79 20.2874 17.372V9.533C20.2874 9.289 20.0944 9.094 19.8534 9.094Z" fill="#F8F9FF" />
                            </svg>
                            <p className="font-bold text-[6px] slider:text-[16px] text-white uppercase z-10 group-hover:text-black">Batafsil <span className="hidden 3xl:inline-block">ma'lumot</span></p>
                        </button>
                        <svg className='w-[9px] h-[21px] slider:w-[20px] slider:h-[54px]' width="20" height="54" viewBox="0 0 20 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="group-hover:fill-yellow" d="M20 48C20 51.3137 17.3137 54 14 54H0L0 0H5.73134C7.53405 0 9.24123 0.810547 10.3807 2.20746L18.6494 12.3442C19.5229 13.4151 20 14.7548 20 16.1368L20 48Z" fill="#0236E5" />
                        </svg>

                    </div>
                    <button
                        onClick={() => dispatch(addBookmark(el))} className={`flex items-center justify-center size-[21px] slider:size-[54px] rounded-[4.7px] slider:rounded-xl ${bookmarks.find(item => item.id == el.id) ? 'bg-black' : 'bg-yellow'}`}>
                        <svg className="size-[10px] slider:size-[28px]" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.1537 11.4539C23.143 8.72293 21.7103 6.15468 18.8855 5.24471C16.9459 4.61878 14.8331 4.96686 13.1923 7.32261C11.5515 4.96686 9.43861 4.61878 7.49899 5.24471C4.67395 6.15478 3.24118 8.72352 3.23081 11.4548C3.20468 16.8864 8.70862 21.0429 13.1909 23.0295L13.1923 23.0289L13.1937 23.0295C17.6761 21.0428 23.1805 16.886 23.1537 11.4539Z" fill={`${bookmarks.find(item => item.id == el.id) ? 'white' : '#231C04'}`} />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard