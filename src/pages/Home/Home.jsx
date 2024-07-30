import { useContext, useEffect, useState } from "react"

import { useLocation, useSearchParams } from "react-router-dom"
import { useFetchMultipleAPIs } from "@/hooks/hooks"
import { filterHandler } from "@/utils/filter"
import { Context } from '@/context/catalogContext';
import { BASE_URL } from "@/const/data";

import { Container, Pagination, Bookmarks, ShoppingCart, Spinner } from "@/components/index"
import all from "@/assets/icons/brands/all.svg";

import SearchBar from "./SearchBar/SearchBar"
import Aside from "./Aside/Aside"
import ProductCard from "./ProductCard/ProductCard"


const Home = () => {
  const location = useLocation();
  var queryString = location.search;
  const [searchParams, setSearchParams] = useSearchParams();

  const [params, setParams] = useState(Object.fromEntries(searchParams.entries()))

  const [category, setCategory] = useState(searchParams.getAll('category') || '');
  const [brand, setBrand] = useState(searchParams.getAll('brand') || '');
  const [search, setSearch] = useState(searchParams.get('q') || '');

  const [openAside, setOpenAside] = useState(false);

  const urls = [
    '/product-list',
    '/categories',
    '/brands',
    '/characteristics'
  ]

  const { data, loading, error } = useFetchMultipleAPIs(urls);
  const [items, setItems] = useState([]);
  const [debounceTimer, setDebounceTimer] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(9);
  const [isLoading, setIsLoading] = useState(true);

  const { state, dispatch } = useContext(Context)

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/product-list${queryString.length ? '/' + queryString : '/?'}${queryString.length ? `&limit=${limit}&offset=${offset}` : `limit=${limit}&offset=${offset}`}`);
      const data = await response.json();
      setItems(data);
      dispatch({ type: 'GET_DATA', payload: data.results })
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const timer = setTimeout(() => {
      fetchData();
    }, 1500)

    setDebounceTimer(timer);

    return () => clearTimeout(timer);

  }, [limit, offset, queryString]);

  if (loading) {
    return <Spinner position={"full"} />
  }
  if (error) {
    console.log(error);
  }

  const handleBrand = (brand) => {
    setCategory('');
    setSearch('');
    setParams({});
    setSearchParams({})
    searchParams.delete('category');
    searchParams.delete('q');
    delete params.category;
    delete params.q;
    if (typeof brand == 'number') {
      setBrand([brand]);
      params.brand = brand;
    } else {
      setBrand([]);
      searchParams.delete('brand');
      delete params.brand;
    }
    setParams(params);
    setSearchParams(params);
  }

  if (items && data && items.results) {
    var products = items.results.map(el => {
      let characteristics = data[3].filter(item => item.product == el.id);
      let brand_image = data[2].find(item => item.id == el.brand)?.brand_image;
      return {
        ...el,
        characteristics: characteristics,
        brand_image: brand_image
      }
    });
  }

  const paginate = (pageNumber) => {
    setOffset((pageNumber - 1) * limit);
    setCurrentPage(pageNumber);
  };
  const filterArray = filterHandler(state.data, state.filter);

  return (
    !loading && (
      <section id='#'>
        <Container style="relative">
          {/* Breadcrumb */}
          <ul className='flex items-center justify-start gap-[5px] mb-[20px]'>
            <li className="uppercase font-inter text-dark-gray transition duration-300 hover:text-blue cursor-pointer text-sm">
              <a aria-label="breadcrumb" href="/">BOSH SAHIFA  /</a>
            </li>
            <li className="uppercase font-inter text-dark-gray transition duration-300 hover:text-blue cursor-pointer text-sm">
              <a aria-label="breadcrumb" href="/catalog">KATALOG</a>
            </li>
          </ul>
          {/* Title */}
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-[30px] md:mb-[45px] lg:mb-[60px]">MAHSULOTLAR KATALOGI</div>
          <div className="w-full bg-dark-gray h-[1px] opacity-30 mb-[20px] md:mb-[40px]"></div>

          {/* BrandList */}
          <ul className="flex flex-row flex-wrap gap-[16px] xs:gap-[15px] gap-6  mb-[30px] md:mb-[45px] lg:mb-[60px]">
            <li onClick={() => handleBrand('')} className="relative group w-brand-width xs:w-col-3 md:w-[220px] h-[72px] flex items-center justify-start gap-[10px] md:gap-[15px] -mb-[30px] xxs:-mb-[10px] md:mb-0 px-[12px] pe-[20px] cursor-pointer">
              <div className="min-w-[30px] h-[30px] md:min-w-[48px] md:h-[48px] flex items-center justify-center bg-[#ffffff] rounded-md z-10">
                <img src={all} alt={'all'} className="w-[28px] h-[28px] object-contain z-10" />
              </div>
              <div className={`text-[9px] sm:text-sm font-bold text-black z-10 uppercase group-hover:text-white ${brand != '' ? 'text-black' : 'text-white'}`}>Barchasi</div>
              <svg className="absolute z-0 top-0 left-0 w-full" width="220" height="72" viewBox="0 0 220 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12C0 5.37258 5.37258 0 12 0H189.54C192.528 0 195.408 1.11466 197.618 3.12596L216.078 19.9297C218.576 22.2038 220 25.4256 220 28.8038V60C220 66.6274 214.627 72 208 72H12C5.37258 72 0 66.6274 0 60V12Z" className={`transition duration-300 group-hover:fill-blue ${brand == '' ? 'fill-blue' : 'none'}`} fill="#F1F1F1" />
                <path d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5H189.54C192.403 0.5 195.164 1.56822 197.281 3.49571L215.741 20.2995C218.135 22.4788 219.5 25.5663 219.5 28.8038V60C219.5 66.3513 214.351 71.5 208 71.5H12C5.64873 71.5 0.5 66.3513 0.5 60V12Z" className={`transition duration-300 group-hover:fill-blue ${brand == '' ? 'fill-blue' : 'none'}`} stroke="#66708D" strokeOpacity="0.2" />
              </svg>
            </li>
            {
              data[2].map(item => (
                <li key={item.id} onClick={() => handleBrand(item.id)} className="relative group w-brand-width xs:w-col-3 md:w-[220px] h-[72px] flex items-center justify-start gap-[10px] md:gap-[15px] -mb-[30px] xxs:-mb-[10px] md:mb-0 px-[12px] pe-[20px] cursor-pointer">
                  <div className="min-w-[30px] h-[30px] md:min-w-[48px] md:h-[48px] flex items-center justify-center bg-[#ffffff] rounded-md z-10">
                    <img src={item.brand_image} alt={item.name} className="w-[28px] h-[28px] object-contain z-10" />
                  </div>
                  <div className={`text-[9px] sm:text-sm font-bold text-black z-10 uppercase group-hover:text-white  ${brand.find((el) => el == item.id) ? 'text-white' : 'text-black'}`}>{item.name}</div>
                  <svg className="absolute z-0 top-0 left-0 w-full" width="220" height="72" viewBox="0 0 220 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H189.54C192.528 0 195.408 1.11466 197.618 3.12596L216.078 19.9297C218.576 22.2038 220 25.4256 220 28.8038V60C220 66.6274 214.627 72 208 72H12C5.37258 72 0 66.6274 0 60V12Z" className={`transition duration-300 group-hover:fill-blue ${brand.find((el) => el == item.id) ? 'fill-blue' : 'none'}`} fill="#F1F1F1" />
                    <path d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5H189.54C192.403 0.5 195.164 1.56822 197.281 3.49571L215.741 20.2995C218.135 22.4788 219.5 25.5663 219.5 28.8038V60C219.5 66.3513 214.351 71.5 208 71.5H12C5.64873 71.5 0.5 66.3513 0.5 60V12Z" className={`transition duration-300 group-hover:fill-blue ${brand.find((el) => el == item.id) ? 'fill-blue' : 'none'}`} stroke="#66708D" strokeOpacity="0.2" />
                  </svg>
                </li>
              ))
            }
          </ul>

          {/* SearchBar */}
          <SearchBar
            search={search}
            setSearch={setSearch}
            params={params}
            setParams={setParams}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            brand={brand}
            category={category}
          />

          <div className="flex items-start justify-between gap-[32px] mt-[30px] md:mt-[45px] lg:mt-[70px]">
            <Aside
              openAside={openAside}
              setOpenAside={setOpenAside}
              brand={brand}
              setBrand={setBrand}
              category={category}
              setCategory={setCategory}
              search={search}
              setSearch={setSearch}
              categories={data[1]}
              brands={data[2]}
            />
            <div className="grow w-full">
              <div className="flex items-center justify-center w-full gap-[10px] border-2 border-[#ebebeb] rounded-lg py-2 xl:hidden mb-8 text-[20px]" onClick={() => setOpenAside(!openAside)}>
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99998 7V12.91C8.02998 13.135 7.95498 13.375 7.78248 13.5325C7.71309 13.602 7.63067 13.6572 7.53994 13.6948C7.44921 13.7325 7.35195 13.7518 7.25373 13.7518C7.1555 13.7518 7.05824 13.7325 6.96751 13.6948C6.87678 13.6572 6.79436 13.602 6.72498 13.5325L5.21748 12.025C5.13572 11.945 5.07356 11.8472 5.03583 11.7392C4.9981 11.6312 4.98583 11.516 4.99998 11.4025V7H4.97748L0.657476 1.465C0.535682 1.30865 0.480727 1.11044 0.504617 0.913697C0.528508 0.716951 0.629302 0.53766 0.784976 0.415C0.927476 0.31 1.08498 0.25 1.24998 0.25H11.75C11.915 0.25 12.0725 0.31 12.215 0.415C12.3707 0.53766 12.4714 0.716951 12.4953 0.913697C12.5192 1.11044 12.4643 1.30865 12.3425 1.465L8.02248 7H7.99998Z" fill="#231F20" />
                </svg>
                <p>Filtrlar</p>
              </div>
              {!isLoading && items?.count == 0 && <div className="text-center w-full text-[30px] min-h-[710px] flex items-center justify-center">Ma'lumot topilmadi</div>}
              <div className="relative grid grid-cols-2 2xl:grid-cols-3 gap-[10px] md:gap-8 grow mb-12 sm:min-h-[665px]  ">
                {
                  !isLoading ? filterArray.length ? (filterArray.map(el => {
                    let item = products.find(_el => _el.id == el.id);
                    return <ProductCard key={el.id} el={item} />
                  })) : '' : <Spinner position={"relative"} />
                }
              </div>
              <div className="mt-6">
                {
                  items.count > 0 ? (<Pagination
                    totalItems={items?.count}
                    itemsPerPage={limit}
                    currentPage={currentPage}
                    paginate={paginate}
                    offset={offset}
                    setOffset={setOffset}
                  />) : ''
                }
              </div>
            </div>
          </div>
        </Container>
        <Bookmarks />
        <ShoppingCart />
      </section>
    )
  )
}

export default Home