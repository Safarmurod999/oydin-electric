import { Container } from "@/components/index"
import { brandArray } from "@/const/data"
import SearchBar from "./SearchBar/SearchBar"
import Aside from "./Aside/Aside"
import { productsArray } from "@/const/data"
import corner from "@/assets/images/corner.png"
import { useState } from "react"
import { Pagination } from "../../components"
import { useNavigate } from "react-router-dom"
const Home = () => {
  const [openAside, setOpenAside] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <section id='#'>
        <Container>
          {/* Breadcrumb */}
          <ul className='flex items-center justify-start gap-[5px] mb-[20px]'>
            <li className="uppercase font-inter text-dark-gray transition duration-300 hover:text-blue cursor-pointer text-sm">
              <a href="/">BOSH SAHIFA  /</a>
            </li>
            <li className="uppercase font-inter text-dark-gray transition duration-300 hover:text-blue cursor-pointer text-sm">
              <a href="/">KATALOG</a>
            </li>
          </ul>
          {/* Title */}
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-[30px] md:mb-[45px] lg:mb-[60px]">MAHSULOTLAR KATALOGI</div>
          <div className="w-full bg-dark-gray h-[1px] opacity-30 mb-[20px] md:mb-[40px]"></div>

          {/* BrandList */}
          <ul className="flex flex-row flex-wrap gap-[16px] xs:gap-[15px] gap-6  mb-[30px] md:mb-[45px] lg:mb-[60px]">
            {
              brandArray.map(brand => (
                <li key={brand.id} className="relative group w-brand-width xs:w-col-3 md:w-[220px] h-[72px] flex items-center justify-start gap-[10px] md:gap-[15px] -mb-[30px] xxs:-mb-[10px] md:mb-0 px-[12px] pe-[20px] cursor-pointer">
                  <div className="min-w-[30px] h-[30px] md:min-w-[48px] md:h-[48px] flex items-center justify-center bg-[#ffffff] rounded-md z-10">
                    <img src={brand.img} alt={brand.title} className="w-[28px] h-[28px] object-contain z-10" />
                  </div>
                  <div className="text-[9px] sm:text-sm font-bold text-black z-10 uppercase group-hover:text-white">{brand.title}</div>
                  <svg className="absolute z-0 top-0 left-0 w-full" width="220" height="72" viewBox="0 0 220 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H189.54C192.528 0 195.408 1.11466 197.618 3.12596L216.078 19.9297C218.576 22.2038 220 25.4256 220 28.8038V60C220 66.6274 214.627 72 208 72H12C5.37258 72 0 66.6274 0 60V12Z" className="transition duration-300 group-hover:fill-blue" fill="#F1F1F1" />
                    <path d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5H189.54C192.403 0.5 195.164 1.56822 197.281 3.49571L215.741 20.2995C218.135 22.4788 219.5 25.5663 219.5 28.8038V60C219.5 66.3513 214.351 71.5 208 71.5H12C5.64873 71.5 0.5 66.3513 0.5 60V12Z" className="transition duration-300 group-hover:fill-blue" stroke="#66708D" strokeOpacity="0.2" />
                  </svg>
                </li>
              ))
            }
          </ul>

          {/* SearchBar */}
          <SearchBar />

          <div className="flex items-start justify-between gap-[32px] mt-[30px] md:mt-[45px] lg:mt-[70px]">
            <Aside openAside={openAside} setOpenAside={setOpenAside} />
            <div className="grow">
              <div className="flex items-center justify-center w-full gap-[10px] border-2 border-[#ebebeb] rounded-lg py-2 xl:hidden mb-8 text-[20px]" onClick={() => setOpenAside(!openAside)}>
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99998 7V12.91C8.02998 13.135 7.95498 13.375 7.78248 13.5325C7.71309 13.602 7.63067 13.6572 7.53994 13.6948C7.44921 13.7325 7.35195 13.7518 7.25373 13.7518C7.1555 13.7518 7.05824 13.7325 6.96751 13.6948C6.87678 13.6572 6.79436 13.602 6.72498 13.5325L5.21748 12.025C5.13572 11.945 5.07356 11.8472 5.03583 11.7392C4.9981 11.6312 4.98583 11.516 4.99998 11.4025V7H4.97748L0.657476 1.465C0.535682 1.30865 0.480727 1.11044 0.504617 0.913697C0.528508 0.716951 0.629302 0.53766 0.784976 0.415C0.927476 0.31 1.08498 0.25 1.24998 0.25H11.75C11.915 0.25 12.0725 0.31 12.215 0.415C12.3707 0.53766 12.4714 0.716951 12.4953 0.913697C12.5192 1.11044 12.4643 1.30865 12.3425 1.465L8.02248 7H7.99998Z" fill="#231F20" />
                </svg>
                <p>Filtrlar</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-3 gap-8 grow mb-12">
                {
                  productsArray.map(el => {
                    return <div key={el.id} className="flex flex-col relative w-full">
                      <div className="w-full relative flex items-center justify-center pt-[55px] 3xl:pt-[75px] px-[60px] 3xl:px-[80px] pb-[45px] z-10">
                        <img src={el.image} alt={el.image} className="w-full z-10" />
                        <img src={el.logo} alt={el.logo} className="absolute top-[30px] left-[30px] w-[70px] 3xl:w-[108px] z-10" />
                        <img src={corner} alt="corner" className="absolute top-0 right-0 z-0 w-full" />
                      </div>

                      <div className="px-[30px] pt-[70px] 3xl:pt-[50px]  pb-[40px] -mt-20 3xl:-mt-12 border-[3px] border-gray rounded-3xl">
                        <div className="flex flex-col">
                          <div className="w-full flex items-center justify-between py-[15px]">
                            <div className="text-[18px] sm:text-[14px] font-bold font-dacia text-blue">{el.name}</div>
                            <div className="text-[18px] sm:text-[14px] font-bold font-dacia text-dark-gray uppercase">{el.category}</div>
                          </div>
                          <svg className="w-full" width="336" height="1" viewBox="0 0 336 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line opacity="0.3" y1="0.5" x2="336" y2="0.5" stroke="#66708D" strokeDasharray="8 8" />
                          </svg>
                          <div className="w-full flex items-center justify-between py-[15px]">
                            <div className="text-[16px] font-inter sm:text-[14px] font-bold text-black">Kommutatsiya quvvati</div>
                            <div className="text-[16px] font-inter sm:text-[14px] font-bold text-dark-gray uppercase">{el.power} WATT</div>
                          </div>
                          <svg className="w-full" width="336" height="1" viewBox="0 0 336 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line opacity="0.3" y1="0.5" x2="336" y2="0.5" stroke="#66708D" strokeDasharray="8 8" />
                          </svg>
                          <div className="w-full flex items-center justify-between py-[15px]">
                            <div className="text-[16px] font-inter sm:text-[14px] font-bold text-black">Qutblar soni</div>
                            <div className="text-[16px] font-inter sm:text-[14px] font-bold text-dark-gray">{el.polarity} ta</div>
                          </div>
                          <svg className="w-full" width="336" height="1" viewBox="0 0 336 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line opacity="0.3" y1="0.5" x2="336" y2="0.5" stroke="#66708D" strokeDasharray="8 8" />
                          </svg>
                          <div className="w-full flex items-center justify-between py-[15px]">
                            <div className="text-[16px] font-inter sm:text-[14px] font-bold text-black">Operatsion xarakteristikasi</div>
                            <div className="text-[16px] font-inter sm:text-[14px] font-bold text-dark-gray uppercase">{el.characteristic}</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-[12px]">
                          <div className="group flex items-stretch justify-between grow">
                            <svg className="bottom-0 left-0" width="20" height="54" viewBox="0 0 20 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path className="group-hover:fill-yellow" d="M0 6C0 2.68629 2.68629 0 6 0H20V54H14.2687C12.4659 54 10.7588 53.1895 9.61929 51.7925L1.35063 41.6558C0.47708 40.5849 0 39.2452 0 37.8632V6Z" fill="#0236E5" />
                            </svg>

                            <button onClick={() => navigate(`/${el.id}`)} className="relative flex items-center justify-center gap-[10px] grow py-[15px] -mx-[1px] bg-blue group-hover:bg-yellow">
                              <svg className="z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="group-hover:fill-black" fillRule="evenodd" clipRule="evenodd" d="M17.0183 7.67028C17.6913 7.67728 18.6263 7.68028 19.4203 7.67728C19.8263 7.67628 20.0333 7.18528 19.7513 6.89028C19.2423 6.35628 18.5333 5.61028 17.8203 4.86228C17.1053 4.11128 16.3873 3.35628 15.8643 2.80828C15.5763 2.50428 15.0713 2.71328 15.0713 3.13328V5.70328C15.0713 6.78228 15.9503 7.67028 17.0183 7.67028Z" fill="#F8F9FF" />
                                <path className="group-hover:fill-black" fillRule="evenodd" clipRule="evenodd" d="M14.8594 13.811H8.1314C7.7174 13.811 7.3814 13.475 7.3814 13.061C7.3814 12.647 7.7174 12.311 8.1314 12.311H14.8594C15.2734 12.311 15.6094 12.647 15.6094 13.061C15.6094 13.475 15.2734 13.811 14.8594 13.811ZM12.5904 17.232H8.1314C7.7174 17.232 7.3814 16.896 7.3814 16.482C7.3814 16.068 7.7174 15.732 8.1314 15.732H12.5904C13.0054 15.732 13.3404 16.068 13.3404 16.482C13.3404 16.896 13.0054 17.232 12.5904 17.232ZM8.1314 8.891H11.0744C11.4884 8.891 11.8244 9.227 11.8244 9.641C11.8244 10.055 11.4884 10.391 11.0744 10.391H8.1314C7.7174 10.391 7.3814 10.055 7.3814 9.641C7.3814 9.227 7.7174 8.891 8.1314 8.891ZM19.8534 9.094H16.8894C15.1234 9.085 13.6654 7.622 13.6654 5.838V2.698C13.6654 2.455 13.4724 2.25 13.2214 2.25H8.0664C5.6624 2.25 3.7124 4.229 3.7124 6.647V17.158C3.7124 19.693 5.7594 21.75 8.2694 21.75H15.9434C18.3474 21.75 20.2874 19.79 20.2874 17.372V9.533C20.2874 9.289 20.0944 9.094 19.8534 9.094Z" fill="#F8F9FF" />
                              </svg>
                              <p className="font-bold text-white uppercase z-10 group-hover:text-black">Batafsil <span className="hidden 2xl:inline-block">ma'lumot</span></p>
                            </button>
                            <svg width="20" height="54" viewBox="0 0 20 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path className="group-hover:fill-yellow" d="M20 48C20 51.3137 17.3137 54 14 54H0L0 0H5.73134C7.53405 0 9.24123 0.810547 10.3807 2.20746L18.6494 12.3442C19.5229 13.4151 20 14.7548 20 16.1368L20 48Z" fill="#0236E5" />
                            </svg>

                          </div>
                          <button className="flex items-center justify-center bg-yellow size-[54px] rounded-xl">
                            <svg className="size-[28px]" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23.1537 11.4539C23.143 8.72293 21.7103 6.15468 18.8855 5.24471C16.9459 4.61878 14.8331 4.96686 13.1923 7.32261C11.5515 4.96686 9.43861 4.61878 7.49899 5.24471C4.67395 6.15478 3.24118 8.72352 3.23081 11.4548C3.20468 16.8864 8.70862 21.0429 13.1909 23.0295L13.1923 23.0289L13.1937 23.0295C17.6761 21.0428 23.1805 16.886 23.1537 11.4539Z" fill="#231C04" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  })
                }
              </div>
              <div className="mt-6">
                <Pagination itemsPerPage={9}
                  totalItems={200}
                  currentPage={1}
                  offset={0}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Home