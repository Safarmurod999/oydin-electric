import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { setBookmarkOpen } from "@/store/cartSlice"
import { removeBookmark, setCart } from "../../store/cartSlice";
const Bookmarks = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isBookMarkOpen, bookmarksLength, bookmarks } = useSelector((store) => store.cart)
    return (
        <>
            <div className={`fixed top-0 left-0 z-50 w-full h-dvh bg-blur backdrop-blur transition duration-300 ${isBookMarkOpen ? 'flex' : 'hidden'}`}>
                <div className="fixed top-0 right-0 z-50 w-full h-dvh max-w-[670px] bg-[#FDFDFD] p-[20px]">
                    <button className='flex bg-blue rounded-full p-[11px] ms-auto' onClick={() => dispatch(setBookmarkOpen(false))}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5L15 15" stroke="#F8F9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 5L5 15" stroke="#F8F9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div className="text-black  font-bold font-dacia text-[28px] mb-[30px]">Saqlanganlari</div>
                    <div className="bg-[#E4E9F0] w-full h-[2px] max-w-[490px] mb-[30px]"></div>
                    <ul className="bookmark w-full max-w-[490px] space-y-4 max-h-[390px] overflow-y-scroll">
                        {
                            bookmarks.map(el => {
                                return <li key={el.id} className="flex items-center justify-start gap-[20px]">
                                    <div onClick={() => {
                                        navigate(`/catalog/${el.id}`);
                                        dispatch(setBookmarkOpen(false))
                                    }} className="min-w-[80px] size-[80px] sm:size-[120px] flex items-center justify-center bg-[#EBEBEB] p-[12px] rounded-xl">
                                        {el.image ? <img src={el.image} alt="product-image" className="h-full" /> : <p className="text-black">No Image</p>}
                                    </div>
                                    <div className="text-[16px] sm:text-[22px] font-semibold font-inter text-black first-letter:uppercase">{el.name_uz}</div>
                                    <button onClick={() => dispatch(removeBookmark(el.id))} className='flex border border-light-gray rounded-full p-[11px] ms-auto'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 5L15 15" stroke="#01040E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15 5L5 15" stroke="#01040E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                            })
                        }
                        {bookmarks.length === 0 && <p className="text-[22px] text-black">Saqlangan mahsulotlar mavjud emas</p>}
                    </ul>
                    <div onClick={() => { dispatch(setCart()); dispatch(setBookmarkOpen(false)) }} className="group flex items-stretch justify-between grow  max-w-[490px] mt-[60px]">
                        <svg className="bottom-0 left-0" width="20" height="54" viewBox="0 0 20 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="group-hover:fill-yellow" d="M0 6C0 2.68629 2.68629 0 6 0H20V54H14.2687C12.4659 54 10.7588 53.1895 9.61929 51.7925L1.35063 41.6558C0.47708 40.5849 0 39.2452 0 37.8632V6Z" fill="#0236E5" />
                        </svg>

                        <button className="relative flex items-center justify-center gap-[10px] grow py-[15px] -mx-[1px] bg-blue group-hover:bg-yellow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.3291 13.15C8.94208 13.15 7.00008 11.208 7.00008 8.82C7.00008 8.406 7.33608 8.07 7.75008 8.07C8.16408 8.07 8.50008 8.406 8.50008 8.82C8.50008 10.38 9.76908 11.65 11.3291 11.65C12.8901 11.65 14.1591 10.38 14.1591 8.82C14.1591 8.406 14.4951 8.07 14.9091 8.07C15.3231 8.07 15.6591 8.406 15.6591 8.82C15.6591 11.208 13.7171 13.15 11.3291 13.15ZM20.2851 13.0601C20.5783 13.0636 20.8301 12.8349 20.8301 12.5417V8.026C20.8301 4.721 18.7071 2.5 15.5471 2.5H7.11208C3.95308 2.5 1.83008 4.721 1.83008 8.026V15.974C1.83008 19.279 3.95308 21.5 7.11208 21.5H11.9487C12.2441 21.5 12.4736 21.2446 12.4671 20.9492C12.3736 16.6987 16.0185 13.0084 20.2851 13.0601Z" fill="#F8F9FF" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.9501 16.4303C21.6571 16.1373 21.1821 16.1373 20.8891 16.4303L17.8741 19.4463L16.6311 18.2023C16.3381 17.9093 15.8631 17.9093 15.5701 18.2023C15.2771 18.4953 15.2771 18.9703 15.5701 19.2633L17.3441 21.0363C17.4901 21.1833 17.6821 21.2563 17.8741 21.2563C18.0661 21.2563 18.2581 21.1833 18.4041 21.0363L21.9501 17.4913C22.2431 17.1983 22.2431 16.7233 21.9501 16.4303Z" fill="#F8F9FF" />
                            </svg>
                            <p className="font-bold text-white uppercase z-10 group-hover:text-black"> <span className="hidden 3xl:inline-block">barchasini</span> harid qilish</p>
                        </button>
                        <svg width="20" height="54" viewBox="0 0 20 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="group-hover:fill-yellow" d="M20 48C20 51.3137 17.3137 54 14 54H0L0 0H5.73134C7.53405 0 9.24123 0.810547 10.3807 2.20746L18.6494 12.3442C19.5229 13.4151 20 14.7548 20 16.1368L20 48Z" fill="#0236E5" />
                        </svg>
                    </div>
                </div>

            </div>
            <div onClick={() => dispatch(setBookmarkOpen(true))} className="fixed right-[10px] md:right-[50px] bottom-[100px] z-20 bg-blue rounded-2xl p-[18px] flex items-center justify-center ">
                <svg className="relative size-[18px] slider:size-[36px]" width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.9998 12.2061C35.9806 7.06445 33.3917 2.22912 28.2875 0.515874C24.7826 -0.662585 20.9649 -0.0072371 18 4.42801C15.0352 -0.0072371 11.2174 -0.662585 7.71255 0.515874C2.60785 2.2293 0.0189069 7.06556 0.00016743 12.2078C-0.0470412 22.4342 9.8983 30.2598 17.9975 34L18 33.9988L18.0025 34C26.1022 30.2596 36.0483 22.4334 35.9998 12.2061Z" fill="#F8F9FF" />
                </svg>
                {
                    bookmarksLength ? <p className="absolute top-[9px] right-[9px] bg-yellow rounded-full px-[7px] py-[1px] rounded-[100px] text-[12px]">{bookmarksLength}</p> : ''
                }
            </div>
        </>
    )
}

export default Bookmarks