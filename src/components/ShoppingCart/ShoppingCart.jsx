import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, setBookmarkOpen, setIsModalOpen, setName, setPhoneNumber, setStatus, setEmail, addData } from '../../store/cartSlice';
import { useMask } from '@react-input/mask';
import { toast } from 'sonner';

const ShoppingCart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isModalOpen, cart, name, phone_number, email, status } = useSelector((store) => store.cart);
    const inputRef = useMask({ mask: '+998 (__) ___ __ __', replacement: { _: /\d/ } });

    const handleSubmit = (e) => {
        e.preventDefault();
        let newData = {
            name,
            phone_number,
            email,
            status,
            cart
        }
        if (newData.phone_number.length == 19) {
            if (newData.cart.length > 0) {
                dispatch(addData({ apiEndpoint: '/orders/', newData }))
                toast.success('Buyurtma muvaffaqiyatli qabul qilindi!',
                    {
                        position: 'top-right'
                    }
                );
                dispatch(setIsModalOpen(false))
            } else {
                toast.error('Savatchangiz bo`sh!', {
                    position: 'top-right'
                });
            }
        } else {
            toast.error("Telefon raqamni to'liq kiriting!", {
                position: 'top-right'
            });
        }

    }
    return (
        <div className={`fixed top-0 left-0 z-50 w-full h-dvh bg-blur backdrop-blur transition duration-300 ${isModalOpen ? 'flex' : 'hidden'} `}>
            <div className="fixed sm:top-[50%] sm:left-[50%] sm:-translate-y-[50%] sm:-translate-x-[50%] z-50 w-full h-full sm:h-auto sm:max-w-[670px] rounded-0 sm:rounded-[24px] bg-[#FDFDFD] p-[20px] sm:p-[40px]">
                <div className="relative w-full max-h-[85vh] cart overflow-y-scroll">
                    <button className=' flex bg-blue -mb-[20px] rounded-full p-[11px] ms-auto z-50' onClick={() => dispatch(setIsModalOpen(false))}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5L15 15" stroke="#F8F9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 5L5 15" stroke="#F8F9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div className="text-black font-bold font-dacia text-[16px] sm:text-[28px] mb-[30px]">Sizning buyurtmangiz:</div>
                    <div className="bg-[#E4E9F0] w-full h-[2px] mb-[30px]"></div>
                    <ul className="cart-list w-full overflow-y-auto space-y-4 max-h-[390px] overflow-y-scroll">
                        {
                            cart.map(el => {
                                return <li key={el.id} className="flex items-center justify-start gap-[20px]">
                                    <div onClick={() => {
                                        navigate(`/catalog/${el.id}`);
                                        dispatch(setIsModalOpen(false))
                                        dispatch(setBookmarkOpen(false))
                                    }} className="min-w-[80px] size-[80px] sm:size-[120px] flex items-center justify-center bg-[#EBEBEB] p-[12px] rounded-xl">
                                        {el.image ? <img src={el.image} alt="product-image" className="h-full" /> : <p className="text-black">No Image</p>}
                                    </div>
                                    <div className="text-[16px] sm:text-[22px] font-semibold font-inter text-black first-letter:uppercase">{el.name_uz}</div>
                                    <button onClick={() => dispatch(removeItem(el.id))} className='flex border border-light-gray rounded-full p-[11px] ms-auto'>
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

                    <form className="flex flex-col gap-[15px] items-start justify-start"
                        onSubmit={handleSubmit}
                    >
                        <input type="text"
                            className='w-full bg-[#F8F9FF] px-[40px] h-[74px] rounded-[14px] text-[22px] text-dark-gray border border-[#E4E9F0]'
                            placeholder='Ismingiz'
                            value={name}
                            onChange={(e) => {
                                if (/\d/.test(e.target.value)) {
                                    toast.error('Raqam kiritish mumkin emas!', {
                                        position: 'top-right'
                                    })
                                } else {
                                    dispatch(setName(e.target.value))
                                }
                            }}
                            required />
                        <input type="text"
                            className='w-full bg-[#F8F9FF] px-[40px] h-[74px] rounded-[14px] text-[22px] text-dark-gray border border-[#E4E9F0]'
                            placeholder='+998'
                            ref={inputRef}
                            value={phone_number}
                            onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
                            required />
                        <input type="email"
                            className='w-full bg-[#F8F9FF] px-[40px] h-[74px] rounded-[14px] text-[22px] text-dark-gray border border-[#E4E9F0]'
                            placeholder='Emailingiz'
                            value={email}
                            onChange={(e) => dispatch(setEmail(e.target.value))}
                            required />
                        <textarea
                            name="message"
                            id="msg"
                            className='w-full bg-[#F8F9FF] px-[40px] py-[15px] h-[104px] rounded-[14px] text-[22px] text-dark-gray border border-[#E4E9F0] resize-none'
                            value={status}
                            onChange={(e) => dispatch(setStatus(e.target.value))}
                            placeholder='Xabaringiz...'
                            required
                        >

                        </textarea>
                        <button type='submit' className="inline-block w-full py-[21px] bg-blue hover:bg-yellow text-[18px] font-inter font-medium mt-[15px] text-white uppercase rounded-xl text-center">
                            XARIDNI AMALGA OSHIRISH
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ShoppingCart