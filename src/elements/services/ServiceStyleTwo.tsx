"use client"
import Link from 'next/link';
import React from 'react';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import "swiper/css/bundle"
import services_data from '@/data/services-data';

const ServiceStyleTwo = () => {
    return (
        <>
            <div className="row g-5 wow fadeInUp" data-wow-delay=".3s">
                <div className="col-12">
                    <div className="swiper service__active">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={30}
                            roundLengths={true}
                            autoplay={{
                                delay: 3500,
                            }}
                            pagination={{
                                el: ".service-bd-swiper-dot",
                                clickable: true,
                            }}
                            breakpoints={{
                                1400: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 3,
                                },
                                992: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                576: {
                                    slidesPerView: 1,
                                },
                                0: {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            {
                                services_data.slice(6, 11).map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="service__wrapper service__item style-two text-center">
                                            <div className="contentHidden"></div>
                                            <div className="contentHidden"></div>
                                            <span className="service__icon-wrap bg-primary-opacity">
                                                <i className={item.icon}></i>
                                            </span>
                                            <div className="service__content">
                                                <h5 className="service__title"><Link href={`/service/service-details/${item.id}`}>{item.title}</Link></h5>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    {/* -- If we need pagination -- */}
                    <div className="pagination__wrapper">
                        <div className="service-bd-swiper-dot text-center"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceStyleTwo;