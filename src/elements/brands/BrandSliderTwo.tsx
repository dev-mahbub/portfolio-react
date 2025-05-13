"use client"
import brand_data from '@/data/brand-data';
import React from 'react';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import "swiper/css/bundle"
import Image from 'next/image';


const BrandSliderTwo = () => {
    return (
        <>
            <div className="brand__wrapper wow fadeInUp" data-wow-delay=".3s">
                <div className="swiper brand__active">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={6}
                        spaceBetween={30}
                        loop={true}
                        roundLengths={true}
                        autoplay={{
                            delay: 3000,
                        }}
                        breakpoints={{
                            1400: {
                                slidesPerView: 6,
                            },
                            1200: {
                                slidesPerView: 5,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {
                            brand_data.slice(4, 12).map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="brand__item">
                                        <Image src={item.image} width={122} height={95} alt="image not found" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default BrandSliderTwo;