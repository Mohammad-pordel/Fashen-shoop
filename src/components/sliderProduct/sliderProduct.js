import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function SliderProduct({ allimage }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <div className="flex flex-col items-center">
            <div className="w-full md:w-[100%] h-full md:h-[25vw] mb-3 md:mb-8">
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#000',
                        '--swiper-pagination-color': '#000',
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 rounded-lg shadow-lg "
                >
                    {
                        allimage.map((item) => (
                            <SwiperSlide>
                                <img className="object-cover w-full h-full rounded-lg" src={`./../${item.img}`} alt="product " />
                            </SwiperSlide>

                        ))
                    }

                </Swiper>
            </div>

            <div className="w-full md:w-[100%] cursor-pointer ">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper rounded-lg shadow-lg"
                >
                    {
                        allimage.map((item) => (
                            <SwiperSlide>
                                <img className="object-cover w-full h-full rounded-lg" src={`./../${item.img}`} alt="product" />
                            </SwiperSlide>

                        ))
                    }

                </Swiper>
            </div>
        </div>
    );
}
