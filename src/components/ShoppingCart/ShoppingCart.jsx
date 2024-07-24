import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsModalOpen } from '../../store/cartSlice';



const ShoppingCart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isModalOpen, cart } = useSelector((store) => store.cart)
    return (
        <div className={`fixed top-0 left-0 z-50 w-full h-dvh bg-blur backdrop-blur transition duration-300 ${isModalOpen ? 'flex' : 'hidden'} `}>
            <div className="fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-50 w-full max-w-[670px] rounded-[24px] bg-[#FDFDFD] p-[40px]">
                <div className="relative w-full">
                    <button className='absolute -top-[20px] -right-[20px] flex bg-blue rounded-full p-[11px] ms-auto' onClick={() => dispatch(setIsModalOpen(false))}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5L15 15" stroke="#F8F9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 5L5 15" stroke="#F8F9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div className="text-black  font-bold font-dacia text-[28px] mb-[30px]">Sizning buyurtmangiz:</div>
                    <div className="bg-[#E4E9F0] w-full h-[2px] mb-[30px]"></div>
                    <ul className="w-full overflow-y-auto space-y-4">
                        {
                            cart.map(el => {
                                return <li key={el.id} className="flex items-center justify-start gap-[20px]">
                                    <div onClick={() => {
                                        navigate(`/catalog/${el.id}`);
                                        dispatch(setIsModalOpen(false))
                                    }} className="min-w-[80px] size-[80px] sm:size-[120px] flex items-center justify-center bg-[#EBEBEB] p-[12px] rounded-xl">
                                        {el.image ? <img src={el.image} alt="product-image" className="h-full" /> : <p className="text-black">No Image</p>}
                                    </div>
                                    <div className="text-[16px] sm:text-[22px] font-semibold font-inter text-black">{el.name}</div>
                                    <button onClick={() => dispatch(removeBookmark(el.id))} className='flex border border-light-gray rounded-full p-[11px] ms-auto'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 5L15 15" stroke="#01040E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15 5L5 15" stroke="#01040E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                            })
                        }
                        {cart.length === 0 && <p className="text-[22px] text-black text-center">Saqlangan mahsulotlar mavjud emas</p>}
                    </ul>
                    <div className="bg-[#E4E9F0] w-full h-[2px] my-[30px]"></div>

                    <form className="flex flex-col gap-[15px] items-start justify-start">
                        <input type="text" className='w-full bg-[#F8F9FF] px-[40px] py-[24px] rounded-[14px] text-[22px] text-dark-gray border border-[#E4E9F0]' placeholder='Ismingiz' />
                        <input type="text" className='w-full bg-[#F8F9FF] px-[40px] py-[24px] rounded-[14px] text-[22px] text-dark-gray border border-[#E4E9F0]' placeholder='+998' />
                        <select className='w-full bg-[#F8F9FF] px-[40px] py-[24px] rounded-[14px] text-[22px] text-dark-gray border border-[#E4E9F0]' placeholder='Ismingiz'>

                        </select>
                    </form>

                    <div className="grow py-[21px] bg-blue hover:bg-yellow text-[18px] font-inter font-medium mt-[60px] text-white uppercase rounded-xl text-center">
                        XARIDNI AMALGA OSHIRISH
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShoppingCart