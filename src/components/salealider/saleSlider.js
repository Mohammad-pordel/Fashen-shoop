import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import supabase from '../../supabase-client';

export default function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTabletMobile = useMediaQuery({ maxWidth: 1023 });
  const [allProductsOff, setAllProductsOff] = useState([]);


  useEffect( () => {
    getProducts()

  }, [])

  const getProducts=async()=>{
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.log("Error fetching", error);
    } else {
      let fainalData = data.filter((item) => {
        return item.discount > 0
      })
      setAllProductsOff(fainalData.slice(0, 15))
      console.log(data);

    }

  }

  return (
    <>
      {isTabletMobile && (
        <div className='px-4 pt-3 overflow-hidden bg-[#e0324e] '>
          <div className='flex flex-row justify-start align-middle'>
            <img className='w-14' src="./images/box.webp" alt="" />
            <span className='font-MorabbaBold text-xl  mt-2'>پیشنهاد شگفت انگیز</span>
          </div>
        </div>
      )}

      <div className='py-[10px] md:py-[20px] overflow-hidden bg-[#e0324e] cursor-pointer'>
        <Swiper
          slidesPerView={3.1}
          spaceBetween={20}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 3.1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.9,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5.2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5.9,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 6.5,
              spaceBetween: 30,
            },
            1500: {
              slidesPerView: 7.4,
              spaceBetween: 30,
            },
            1600: {
              slidesPerView: 8.5,
              spaceBetween: 30,
            }
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          style={{ maxWidth: '100%' }}
        >
          {isDesktop && (
            <SwiperSlide >
              <div className='w-0 md:w-full md:h-72 p-5 flex flex-col align-middle justify-evenly bg-[#e0324e]'>
                <span className='font-MorabbaBold text-sm md:text-xl'>پیشنهاد شگفت انگیز</span>
                <span className='font-MorabbaMedium text-sm md:text-base'>فقط به مدت 7 روز</span>
                <h1 className='flex justify-center align-middle'>
                  <img src="./images/box.webp" alt="" />
                </h1>

              </div>
            </SwiperSlide>
          )}


          {allProductsOff.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={`/product/${item.id}`}>
                <div className='h-52 w-32 md:h-72 md:w-52 p-5 flex flex-col justify-between bg-white rounded-lg'>
                  <div>
                    <img src={item.img} className='' alt={item.title} style={{ maxWidth: '100%' }} />
                  </div>
                  <div className='h-full w-full flex flex-col justify-around align-middle'>
                    <span className='text-sm md:text-base overflow-hidden '>{item.title}</span>
                    <div className='flex flex-row-reverse  justify-around gap-3 '>

                      <div className='flex flex-col'>
                        <span className='font-DanaDemiBold text-sm md:text-base  '>{item.price}تومان</span>

                        <span className='ml-5 font-DanaDemiBold text-sm  line-through opacity-50'>{item.price + (item.price * (item.discount / 100))}</span>
                      </div>
                      <div className='w-12 h-full'>
                        <span className=' hidden md:flex font-DanaDemiBold justify-center align-bottom   text-sm md:text-base pt-1 bg-[#da2f4e]  rounded-xl '>{item.discount}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}


          <SwiperSlide >
            <Link to={`/products/offs`}>
              <div className='group h-52 w-32 md:h-72 md:w-52 p-5 flex flex-col justify-center align-middle bg-[#da2f4e]  border-none'>
                <a href="#">
                  <h1 className='flex justify-center align-middle transition group-hover:text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                  </svg>
                  </h1>
                  <h1 className='flex justify-center align-middle transition group-hover:text-white'> مشاهده همه</h1>

                </a>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
