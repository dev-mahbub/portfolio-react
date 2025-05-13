"use client"
import brand_data from '@/data/brand-data';
import React from 'react';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import "swiper/css/bundle"
import Image from 'next/image';

const DigitalAgencyBrandSlider = () => {
    return (
        <>
            {/* -- brand style -- */}
            <div className="brand__wrapper style-two">
                <div className="container">
                    <div className="swiper brand__active-two">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            loop={true}
                            roundLengths={true}
                            autoplay={{
                                delay: 3500,
                            }}
                            breakpoints={{
                                1400: {
                                    slidesPerView: 4,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                576: {
                                    slidesPerView: 2,
                                },
                                500: {
                                    slidesPerView: 2,
                                },
                                0: {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            {
                                brand_data.slice(20, 26).map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="brand__item text-center">
                                            <div className="brand__thumb">
                                                <Image src={item.image} width={item.imageWidth} height={item.imageHeight}
                                                    alt="image not found" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DigitalAgencyBrandSlider;