import {Container} from "@/components/index"
import { brandArray } from "@/const/data"

const Home = () => {
  return (
    <>
      <section id='#'>
        <Container>
          <ul className='flex items-center justify-start gap-[5px] mb-[20px]'>
            <li className="uppercase font-inter text-dark-gray transition duration-300 hover:text-blue cursor-pointer text-sm">
              <a href="/">BOSH SAHIFA  /</a>
            </li>
            <li className="uppercase font-inter text-dark-gray transition duration-300 hover:text-blue cursor-pointer text-sm">
              <a href="/">KATALOG</a>
            </li>
          </ul>

          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-[60px]">MAHSULOTLAR KATALOGI</div>
          <div className="w-full bg-dark-gray h-[1px] opacity-30 mb-[40px]"></div>
          <ul className="flex flex-row flex-wrap gap-6">
            {
              brandArray.map(brand => (
                <li key={brand.id} className="relative group w-[160px] sm:w-[220px] h-[72px] flex items-center justify-start gap-[15px] p-[12px] pe-[20px] cursor-pointer">
                  <div className="w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] flex items-center justify-center bg-[#ffffff] rounded-md z-10">
                    <img src={brand.img} alt={brand.title} className="w-[28px] h-[28px] object-contain z-10" />
                  </div>
                  <div className="text-[10px] sm:text-sm font-bold text-black z-10 uppercase group-hover:text-white">{brand.title}</div>
                  <svg className="absolute z-0 top-0 left-0 w-full" width="220" height="72" viewBox="0 0 220 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H189.54C192.528 0 195.408 1.11466 197.618 3.12596L216.078 19.9297C218.576 22.2038 220 25.4256 220 28.8038V60C220 66.6274 214.627 72 208 72H12C5.37258 72 0 66.6274 0 60V12Z" className="transition duration-300 group-hover:fill-blue" fill="#F1F1F1" />
                    <path d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5H189.54C192.403 0.5 195.164 1.56822 197.281 3.49571L215.741 20.2995C218.135 22.4788 219.5 25.5663 219.5 28.8038V60C219.5 66.3513 214.351 71.5 208 71.5H12C5.64873 71.5 0.5 66.3513 0.5 60V12Z" stroke="#66708D" strokeOpacity="0.2" />
                  </svg>
                </li>
              ))
            }
          </ul>
        </Container>
      </section>
    </>
  )
}

export default Home