import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import supabase from '../../supabase-client';
import 'swiper/css';
import 'swiper/css/pagination';
import './homeslider.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const [imgBanner, setimgBanner] = useState([])

  useEffect(() => {
    getCovereSlider()
  }, [])

const getCovereSlider=async()=>{
  const { data, error } = await supabase.from("covereSlider").select("*");
  if (error) {
    console.log("Error fetching", error);
  } else {
    setimgBanner(data)
    console.log(data);
  }
}

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {imgBanner.map((item) => (
          <SwiperSlide key={item.id}>
            <NavLink to={`/products/${item.category}`}>
              <div className='group overflow-hidden container w-[145%] h-[50vw] md:w-[100%] md:h-[30vw]'>
                <img className='group-hover:scale-110 transform transition duration-500 ease-in-out relative md:absolute md:left-0  md:right-0 ' src={item.img} alt="" />
              </div>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
