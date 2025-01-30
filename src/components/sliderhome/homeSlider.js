import React, {  useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './homeslider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const [imgBanner, setimgBanner] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/covereSlider")
      .then((res) => res.json())
      .then((data) => (
        setimgBanner(Object.entries(data))
      )) 
  },[])
  


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

{imgBanner.map((item)=>(
        <SwiperSlide key={item[1].id}>
          <NavLink to={`/products/${item[1].category}`}>
          <div className='group overflow-hidden container w-[145%] h-[50vw] md:w-[100%] md:h-[30vw]'>
            <img className='group-hover:scale-110 transform transition duration-500 ease-in-out relative md:absolute md:left-0  md:right-0 ' src={item[1].img} alt="" />
          </div>
          </NavLink>
        </SwiperSlide>
))}
      </Swiper>
    </>
  );
}
