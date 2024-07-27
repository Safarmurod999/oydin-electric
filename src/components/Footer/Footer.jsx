import React from 'react'
import Container from '../Container/Container'
import footer_map from "@/assets/images/footer-map.png"
import footer_form from "@/assets/images/footer-form.png"
import footer_bottom from "@/assets/images/footer-bottom.png"
import footer_logo from "@/assets/icons/footer-logo.svg"

const Footer = () => {
    return (
        <footer className='pt-[40px] xs:pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[120px] xl:pt-[150px] 3xl:pt-[180px] pb-[30px] sm:pb-[40px] lg:pb-[60px] 3xl:pb-[80px] bg-[#11141C] rounded-t-3xl'>
            <Container>
                <div className="w-full bg-gray h-[1px] opacity-30 mb-[20px]"></div>
                <div className="w-full flex justify-between items-start mb-[40px] sm:mb-[60px] md:mb-[80px] xl:mb-[100px] 3xl:mb-[160px]">
                    <p className='text-gray uppercase font-dacia opacity-30 tracking-[1%]'>08/</p>
                    <p className='text-gray uppercase font-dacia opacity-30 tracking-[1%]'>ALOQA</p>
                </div>
                <div className='mx-auto max-w-[960px] text-2xl xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white text-center font-dacia font-bold'>ALOQA VA KONTAKT MA’LUMOTIMIZ</div>
                <p className='mt-6 mx-auto max-w-[490px] text-center text-[18px] text-gray font-inter opacity-30'>Kompaniyamizni shu kungacha erishgan natija va yutuqlarni stastika orqali bilib oling</p>
                <div className="flex flex-col xl:flex-row justify-between items-stretch gap-8  mt-[40px] sm:mt-[60px] md:mt-[80px] xl:mt-[100px] 3xl:mt-[120px]">
                    {/* Footer Top Left */}
                    <div className="relative flex flex-col items-start p-[25px] xs:p-[30px] md:p-[45px] xl:p-[60px] grow max-w-full xl:max-w-[640px] 3xl:max-w-[995px] z-10">
                        <img src={footer_map} alt="Image" className='absolute top-0 left-0 w-full  h-full' />
                        <div className='z-10 text-white text-[20px] xs:text-[25px] md:text-[38px] font-dacia font-bold max-w-[700px] mb-[20px] md:mb-[40px]'>
                            <span className='text-dark-gray'>BIZ HAR QANDAY</span> SAVOLINGIZGA JAVOB BERAMIZ
                        </div>
                        <iframe title='map' className='w-full h-[250px] md:h-[360px] z-10 rounded-xl invert mb-[20px]' src="https://yandex.com/map-widget/v1/?um=constructor%3Aaf038589953fabe73f119757d8d5276be7996e5c1441ec2f1bf5354ec0ae2566&amp;source=constructor"
                            width="875" height="360">
                        </iframe>
                        <div className="w-full flex flex-wrap items-center justify-start gap-[25px]">
                            <div className="w-full sm:w-auto flex items-center justify-start gap-[10px] md:gap-[15px] px-[15px] md:px-[22px] py-[14px] md:py-[18px] z-10 bg-[#1E232E] rounded-lg">
                                <svg className='min-w-[28px]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M19.1334 3.9668H8.86675C5.48341 3.9668 2.91675 6.7668 2.91675 10.3835V17.6168C2.91675 19.4835 3.61675 21.2335 4.78341 22.4001C5.83341 23.4501 7.23341 24.0335 8.86675 24.0335H19.1334C20.6501 24.0335 22.0501 23.4501 23.2167 22.4001C24.3834 21.2335 25.0834 19.4835 25.0834 17.6168V10.3835C25.0834 6.7668 22.5167 3.9668 19.1334 3.9668Z" fill="#F8F9FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.7666 11.4341L16.1 15.1675C15.5166 15.6341 14.8166 15.8675 14 15.8675C13.3 15.8675 12.6 15.6341 11.9 15.1675L7.23327 11.3175C6.88327 10.9675 6.7666 10.5008 7.1166 10.0341C7.4666 9.56745 7.93327 9.56745 8.39994 9.91745L13.0666 13.6508C13.65 14.1175 14.4666 14.1175 14.9333 13.6508L19.6 9.91745C19.95 9.56745 20.5333 9.68412 20.8833 10.0341C21.2333 10.5008 21.1166 11.0841 20.7666 11.4341Z" fill="#F8F9FF" />
                                </svg>
                                <p className='text-white font-medium font-inter'>oydinelectric@info.com</p>
                            </div>
                            <div className="w-full sm:w-auto flex items-center justify-start gap-[10px] md:gap-[15px] px-[15px] md:px-[22px] py-[14px] md:py-[18px] z-10 bg-[#1E232E] rounded-lg">
                                <svg className='min-w-[28px]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M21.3216 16.9588C21.0599 16.7101 20.7756 16.4387 20.474 16.1361C19.0988 14.7673 17.911 15.2315 16.9557 15.6073C15.811 16.0542 14.7319 16.4785 12.7633 14.5121C10.7936 12.5435 11.2157 11.4622 11.6637 10.3175C12.0374 9.36115 12.5026 8.17222 11.1274 6.8013C10.828 6.50084 10.5588 6.21653 10.31 5.95376C9.29878 4.88653 8.56862 4.11545 7.54016 4.10253C6.69909 4.07453 5.71909 4.65284 4.3277 6.04638C4.3137 6.06038 4.2437 6.13038 4.23186 6.14545C3.92386 6.44484 3.10647 7.24391 3.09678 8.80222C3.08062 11.2393 5.04601 14.4485 8.93693 18.3416C12.8096 22.2132 16.0059 24.1742 18.4386 24.1742H18.4656C20.0271 24.1656 20.8273 23.3472 21.1288 23.0392L21.23 22.9412C22.616 21.5541 23.1782 20.6236 23.1663 19.7352C23.1545 18.7067 22.3856 17.9733 21.3216 16.9588Z" fill="#F8F9FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.6878 11.8365C18.7631 12.222 19.1013 12.4891 19.4793 12.4891C19.531 12.4891 19.5838 12.4848 19.6354 12.4751C20.0727 12.39 20.3591 11.9657 20.2741 11.5274C19.8638 9.42308 18.2398 7.79908 16.1365 7.38878C15.6982 7.31554 15.275 7.58908 15.1888 8.02739C15.1038 8.4657 15.3891 8.89001 15.8274 8.97508C17.2813 9.25724 18.4045 10.3805 18.6878 11.8365Z" fill="#F8F9FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.0706 3.83681C15.6323 3.76897 15.2273 4.10712 15.1789 4.54974C15.1293 4.99343 15.4492 5.39297 15.8929 5.44143C19.241 5.81297 21.8407 8.41158 22.2166 11.7608C22.2629 12.1744 22.6118 12.4792 23.0178 12.4792C23.048 12.4792 23.0781 12.477 23.1093 12.4749C23.552 12.4253 23.8718 12.0258 23.8212 11.5821C23.3624 7.47681 20.1747 4.29127 16.0706 3.83681Z" fill="#F8F9FF" />
                                </svg>
                                <p className='text-white font-medium font-inter'>+998 71 184 11 81</p>
                            </div>
                            <div className="w-full sm:w-auto flex items-center justify-start gap-[10px] md:gap-[15px] px-[15px] md:px-[22px] py-[14px] md:py-[18px] z-10 bg-[#1E232E] rounded-lg">
                                <svg className='min-w-[28px]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M10.7264 16.7231C10.2741 16.7231 9.89719 16.3462 9.89719 15.8831C9.89719 15.4201 10.2741 15.0431 10.7264 15.0431C11.1895 15.0431 11.5664 15.4201 11.5664 15.8831C11.5664 16.3462 11.1895 16.7231 10.7264 16.7231ZM6.76334 16.7231C6.30027 16.7231 5.92334 16.3462 5.92334 15.8831C5.92334 15.4201 6.30027 15.0431 6.76334 15.0431C7.22642 15.0431 7.60334 15.4201 7.60334 15.8831C7.60334 16.3462 7.22642 16.7231 6.76334 16.7231ZM6.76334 20.3308C6.30027 20.3308 5.92334 19.9539 5.92334 19.4908C5.92334 19.0278 6.30027 18.6616 6.76334 18.6616C7.22642 18.6616 7.60334 19.0278 7.60334 19.4908C7.60334 19.9539 7.22642 20.3308 6.76334 20.3308ZM19.1695 13.8693C19.8341 13.8693 20.475 13.9801 21.0717 14.1745C21.2152 14.2212 21.3664 14.1169 21.3664 13.966V12.4693C21.3664 12.3503 21.27 12.2539 21.151 12.2539H3.22027C3.10131 12.2539 3.00488 12.3503 3.00488 12.4693V18.4893C3.00488 21.6662 4.92181 23.5724 8.12027 23.5724H13.4568C13.6269 23.5724 13.7311 23.3837 13.6487 23.235C13.1472 22.3297 12.8587 21.2889 12.8587 20.1801C12.8587 16.7016 15.6802 13.8693 19.1695 13.8693Z" fill="#F8F9FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.3713 9.79876C21.3713 8.29322 20.9233 7.03322 20.0586 6.16845C19.2789 5.40061 18.1793 4.9623 16.8763 4.84492V3.81969C16.8763 3.38245 16.5134 3.01953 16.0761 3.01953C15.6281 3.01953 15.2749 3.38245 15.2749 3.81969V7.61045C15.2006 7.63199 15.137 7.65245 15.0617 7.65245C14.6137 7.65245 14.2615 7.28953 14.2615 6.8523V5.01722C14.2615 4.89827 14.1651 4.80184 14.0461 4.80184H9.10417V3.81969C9.10417 3.38245 8.75202 3.01953 8.30402 3.01953C7.86571 3.01953 7.50279 3.38245 7.50279 3.81969V7.61045C7.43925 7.63199 7.36494 7.65245 7.28956 7.65245C6.85233 7.65245 6.4894 7.28953 6.4894 6.8523V5.29125C6.4894 5.15137 6.35768 5.04853 6.22368 5.08871C4.18649 5.69969 3.00879 7.35204 3.00879 9.79876V10.4374C3.00879 10.5563 3.10522 10.6528 3.22417 10.6528H21.156C21.275 10.6528 21.3713 10.5563 21.3713 10.4374V9.79876Z" fill="#F8F9FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.2048 21.7851C21.054 22.0328 20.7848 22.1727 20.5155 22.1727C20.3755 22.1727 20.2248 22.1405 20.0955 22.0543L18.7817 21.2682C18.5448 21.1282 18.394 20.8696 18.394 20.5788V18.8881C18.394 18.4465 18.7494 18.0804 19.2017 18.0804C19.6432 18.0804 20.0094 18.4465 20.0094 18.8881V20.1266L20.9248 20.6758C21.3124 20.9019 21.4309 21.3974 21.2048 21.7851ZM19.2232 15.582C16.6278 15.582 14.5278 17.6927 14.5278 20.2881C14.5278 22.8727 16.6278 24.9835 19.2232 24.9835C21.8078 24.9835 23.9186 22.8727 23.9186 20.2881C23.9186 17.6927 21.8078 15.582 19.2232 15.582Z" fill="#F8F9FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.7259 16.7229C10.2736 16.7229 9.8967 16.3459 9.8967 15.8829C9.8967 15.4198 10.2736 15.043 10.7259 15.043C11.189 15.043 11.5659 15.4198 11.5659 15.8829C11.5659 16.3459 11.189 16.7229 10.7259 16.7229ZM6.76285 16.7229C6.29977 16.7229 5.92285 16.3459 5.92285 15.8829C5.92285 15.4198 6.29977 15.043 6.76285 15.043C7.22593 15.043 7.60285 15.4198 7.60285 15.8829C7.60285 16.3459 7.22593 16.7229 6.76285 16.7229ZM6.76285 20.3306C6.29977 20.3306 5.92285 19.9536 5.92285 19.4906C5.92285 19.0275 6.29977 18.6613 6.76285 18.6613C7.22593 18.6613 7.60285 19.0275 7.60285 19.4906C7.60285 19.9536 7.22593 20.3306 6.76285 20.3306Z" fill="#F8F9FF" />
                                </svg>
                                <p className='text-white font-medium font-inter uppercase'>DUSH-SHANBA: 09:30 - 18:00</p>
                            </div>
                        </div>
                    </div>
                    {/* Footer Top Right */}
                    <div className="relative  flex flex-col items-start p-[25px] xs:p-[30px] md:p-[45px] xl:p-[60px] grow z-10">
                        <img src={footer_form} className='absolute top-0 left-0 w-full h-full' alt="form" />
                        <div className='z-10 text-white text-[20px] xs:text-[25px] md:text-[38px] font-dacia font-bold max-w-full xl:max-w-[450px] mb-[20px] md:mb-[40px]'>
                            <span className='text-dark-gray'>ALOQAGA CHIQISH </span> UCHUN SO’ROVNI TO’LDIRING
                        </div>
                        <form className='w-full flex flex-col gap-[12px] z-10'>
                            <input type="text" placeholder='Ismingiz' className='w-full bg-[#1E232E] text-white placeholder:text-[#393F53] text-[18px] font-inter px-[30px] h-[54px] md:h-[74px] rounded-lg' />
                            <input type="text" placeholder='Telefon raqamingiz' className='w-full bg-[#1E232E] text-white placeholder:text-[#393F53] text-[18px] font-inter px-[30px] h-[54px] md:h-[74px] rounded-lg' />
                            <textarea name="text" id="area" cols="30" rows="10" placeholder="XABARINGIZ.." className='text-white bg-[#1E232E] placeholder:text-[#393F53] rounded-lg p-[20px] resize-none h-[140px]'></textarea>
                            <button aria-label='request' className='w-full h-[54px] md:h-[74px] bg-white text-black text-[18px] font-inter rounded-lg font-semibold'>SO’ROVNI YUBORISH</button>
                        </form>
                    </div>

                </div>
                {/* Footer Bottom */}
                <div className="relative w-full mt-[35px] p-[25px] xs:p-[30px] md:p-[45px] xl:p-[60px] rounded-lg bg-footer-bottom bg-center bg-no-repeat bg-[length:100%_100%]">
                    {/* <img src={footer_bottom} alt="Image" className='absolute left-0 top-0 w-full h-full rounded-xl' /> */}
                    <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-[15px] sm:gap-[30px] z-10">
                        <div className="max-w-[402px] z-10">
                            <a aria-label='logo' href="https://oydin-electric.framer.website/"><img className='w-[100px] md:w-auto' src={footer_logo} alt="Logo" /></a>
                            <p className='text-dark-gray font-inter text-[12px] md:text-[18px] mt-[20px] md:mt-[32px]'>Kompaniyamiz 10 yildan ortiq vaqt davomida xizmat ko’rsatib kelmoqdamiz</p>
                        </div>
                        <div className="max-w-full sm:max-w-[60%] z-10">
                            <ul className='flex flex-wrap items-center justify-start sm:justify-end gap-[15px] sm:gap-[32px]'>
                                <li className='font-inter font-bold uppercase text-[14px] sm:text-[18px] text-white cursor-pointer'><a aria-label='links' href="/catalog">KATALOG</a></li>
                                <li className='font-inter font-bold uppercase text-[14px] sm:text-[18px] text-white cursor-pointer'><a aria-label='links' href="https://oydin-electric.framer.website/b2b">B2B SOTUV</a></li>
                                <li className='font-inter font-bold uppercase text-[14px] sm:text-[18px] text-white cursor-pointer'><a aria-label='links' href="https://oydin-electric.framer.website/news">YANGILIKLAR</a></li>
                                <li className='font-inter font-bold uppercase text-[14px] sm:text-[18px] text-white cursor-pointer'><a aria-label='links' href="/">BRENDLAR</a></li>
                                <li className='font-inter font-bold uppercase text-[14px] sm:text-[18px] text-white cursor-pointer'><a aria-label='links' href="https://oydin-electric.framer.website/about-us">KOMPANIYA HAQIDA</a></li>
                                <li className='font-inter font-bold uppercase text-[14px] sm:text-[18px] text-white cursor-pointer'><a aria-label='links' href="/">ALOQA</a></li>
                            </ul>
                            <ul className="flex items-center justify-start sm:justify-end mt-[20px] sm:mt-[40px] gap-[10px] sm:gap-[18px]">
                                <li className='flex items-center justify-center'>
                                    <a aria-label='social' href="/" className='inline-block p-[10px] sm:p-[18px] rounded-full bg-[#1E232E]'>
                                        <svg className='size-[20px] sm:size-[28px]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.3364 22.3186C11.324 22.4219 11.4469 22.4842 11.5235 22.4139C11.9331 22.038 12.7784 21.2623 12.9535 21.103C14.1989 19.9684 14.1978 19.9662 12.7911 19.0075C11.7988 18.3299 11.7853 18.3276 11.6633 19.498C11.5874 20.2184 11.4123 21.6867 11.3364 22.3186ZM17.7544 10.5114C17.8533 10.4187 17.7362 10.2619 17.6214 10.3339C15.6376 11.5787 11.1678 14.3838 9.36283 15.5176C8.91819 15.7976 8.77819 16.1862 8.96523 16.6958C9.33819 17.7072 9.69323 18.7252 10.0684 19.7366C10.0945 19.8076 10.2012 20.0379 10.296 20.2393C10.3433 20.3397 10.4914 20.3166 10.5063 20.2066C10.5414 19.9477 10.584 19.6298 10.596 19.5249C10.6688 18.8854 10.7505 18.247 10.7841 17.6052C10.811 17.0856 11.0473 16.7249 11.4225 16.3856C12.9527 15.0017 16.2121 11.9556 17.7544 10.5114ZM26.2356 5.92024C25.885 7.6428 25.5513 9.36872 25.1559 11.0812C24.2789 14.8825 23.3594 18.6726 22.4567 22.4683C22.4332 22.5691 22.4029 22.6676 22.3749 22.7684C21.9561 24.2692 20.7185 24.6937 19.4506 23.7675C18.1436 22.811 16.8309 21.8612 15.5396 20.8835C15.2092 20.6337 14.993 20.6427 14.6973 20.9283C13.9189 21.6776 13.1249 22.4112 12.3151 23.1246C11.2623 24.0508 10.4515 23.8481 9.95643 22.522C9.23851 20.5968 8.53179 18.667 7.86763 16.7238C7.69179 16.2064 7.40731 15.9611 6.90555 15.8099C5.57499 15.4089 4.26123 14.9497 2.93515 14.5353C2.28107 14.3304 1.69195 14.0414 1.66171 13.2764C1.63371 12.5686 2.16235 12.2203 2.75147 11.9907C6.44411 10.5526 10.1289 9.0932 13.8372 7.6932C17.1378 6.44776 20.4631 5.2684 23.7794 4.06328C24.0516 3.96472 24.3282 3.86504 24.6116 3.80904C25.5053 3.63096 26.0037 3.986 26.2916 4.71848C26.4069 5.0108 26.2826 5.69288 26.2356 5.92024Z" fill="#F8F9FF" />
                                        </svg>
                                    </a>
                                </li>
                                <li className='flex items-center justify-center'>
                                    <a href="/" aria-label='social' className='inline-block p-[10px] sm:p-[18px] rounded-full bg-[#1E232E]'>
                                        <svg className='size-[20px] sm:size-[28px]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.8261 11.2988C12.1259 11.2988 10.7427 12.6798 10.7427 14.3788C10.7427 16.0779 12.1259 17.4588 13.8261 17.4588C15.5263 17.4588 16.9083 16.0779 16.9083 14.3788C16.9083 12.6798 15.5263 11.2988 13.8261 11.2988Z" fill="#F8F9FF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.4475 9.98722C18.8091 9.98722 18.2883 9.46978 18.2883 8.83474C18.2883 8.19746 18.8091 7.68002 19.4475 7.68002C20.0859 7.68002 20.6056 8.19746 20.6056 8.83474C20.6056 9.46978 20.0859 9.98722 19.4475 9.98722ZM13.8251 19.1388C11.1999 19.1388 9.0629 17.004 9.0629 14.3788C9.0629 11.7535 11.1999 9.61874 13.8251 9.61874C16.4515 9.61874 18.5874 11.7535 18.5874 14.3788C18.5874 17.004 16.4515 19.1388 13.8251 19.1388ZM18.7229 3.36914H9.2757C5.73762 3.36914 3.35986 5.85778 3.35986 9.56274V18.4556C3.35986 22.1594 5.73762 24.6492 9.2757 24.6492H18.7218C22.261 24.6492 24.6399 22.1594 24.6399 18.4556V9.56274C24.6399 5.85778 22.2621 3.36914 18.7229 3.36914Z" fill="#F8F9FF" />
                                        </svg>

                                    </a>
                                </li>
                                <li className='flex items-center justify-center'>
                                    <a href="/" aria-label='social' className='inline-block p-[10px] sm:p-[18px] rounded-full bg-[#1E232E]'>
                                        <svg className='size-[20px] sm:size-[28px]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.3339 14.1548H14.0615V18.59C14.0615 19.0536 13.6851 19.43 13.2215 19.43C12.7578 19.43 12.3815 19.0536 12.3815 18.59V14.1548H11.6658C11.2021 14.1548 10.8258 13.7784 10.8258 13.3148C10.8258 12.8511 11.2021 12.4748 11.6658 12.4748H12.3815V11.7244C12.3815 9.99506 13.7882 8.58722 15.5163 8.58722H16.3328C16.7965 8.58722 17.1728 8.96354 17.1728 9.42722C17.1728 9.8909 16.7965 10.2672 16.3328 10.2672H15.5163C14.7144 10.2672 14.0615 10.9213 14.0615 11.7244V12.4748H16.3339C16.7976 12.4748 17.1739 12.8511 17.1739 13.3148C17.1739 13.7784 16.7976 14.1548 16.3339 14.1548ZM13.9999 3.36914C8.1333 3.36914 3.35986 8.14258 3.35986 14.0092C3.35986 19.8757 8.1333 24.6492 13.9999 24.6492C19.8664 24.6492 24.6399 19.8757 24.6399 14.0092C24.6399 8.14258 19.8664 3.36914 13.9999 3.36914Z" fill="#F8F9FF" />
                                        </svg>

                                    </a>
                                </li>
                                <li className='flex items-center justify-center'>
                                    <a href="/" aria-label='social' className='inline-block p-[10px] sm:p-[18px] rounded-full bg-[#1E232E]'>
                                        <svg className='size-[20px] sm:size-[28px]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0992 14.9777L12.9865 17.3185C12.8152 17.4114 12.6315 17.4574 12.45 17.4574C12.2563 17.4574 12.0648 17.4047 11.8923 17.3017C11.5607 17.1046 11.3625 16.7585 11.3625 16.3732V11.6905C11.3625 11.2985 11.5663 10.9446 11.9068 10.7486C12.2451 10.5526 12.6483 10.5504 12.9888 10.7464L17.0992 13.0871C17.4374 13.2775 17.648 13.6415 17.648 14.0313C17.648 14.4233 17.4374 14.785 17.0992 14.9777ZM24.1529 8.27788C23.8628 7.07948 22.9579 6.12076 21.792 5.7702C19.8129 5.11724 8.02935 5.1542 6.22391 5.8094C5.05351 6.14316 4.14295 7.10636 3.86183 8.2734C3.19879 10.2121 3.19879 17.8762 3.85175 19.7937C4.17655 20.9641 5.08599 21.8903 6.18695 22.1961C7.15575 22.5478 10.6154 22.7214 14.055 22.7214C17.4721 22.7214 20.8713 22.55 21.783 22.2073C22.9534 21.8601 23.8617 20.898 24.1384 19.7489C24.7992 17.8471 24.8014 10.2032 24.1529 8.27788Z" fill="#F8F9FF" />
                                        </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full bg-gray opacity-40 h-[1px] mt-[20px] md:mt-[40px] mb-[15px] md:mb-[30px]"></div>
                    <div className="w-full flex flex-wrap items-center justify-between relative z-10 gap-[20px]">
                        <p className='text-dark-gray text-[10px] sm:text-sm font-inter uppercase text-start max-w-[250px]'>© 2024 Oydin Electric. Barcha huquqlar himoyalangan.</p>
                        <p className='text-dark-gray text-[10px] sm:text-sm font-inter uppercase text-start lg:text-center max-w-[350px]'>Ushbu saytdagi barcha kontent mualliflik huquqi bilan himoyalangan</p>
                        <p className='text-dark-gray text-[10px] sm:text-sm font-inter uppercase text-start lg:text-end max-w-[230px]'><span className='uppercase font-bold'>abba marketing</span> <br /> tomonidan ishlab chiqilgan</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer



