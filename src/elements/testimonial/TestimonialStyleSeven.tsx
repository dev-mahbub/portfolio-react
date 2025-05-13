"use client"
import testimonial_data from '@/data/testimonial-data';
import React from 'react';
import GetRatting from '@/hooks/GetRatting';
import testimonialQuote from '../../../public/assets/images/shape/testimonial-quote-07.png';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import "swiper/css/bundle"
import Image from 'next/image';

const TestimonialStyleSeven = () => {
    return (
        <>
            <div className="row g-5 justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10">
                    <div className="section__title-wrapper section__title-space text-center">
                        <span className="section__subtitle bg-field">TESTIMONIALS </span>
                        <h2 className="section__title">What Our Clients Have to Say</h2>
                    </div>
                </div>
            </div>
            <div className=" row">
                <div className="testimonial__slider wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                    <div className="swiper testimonial__active-two">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={30}
                            loop={true}
                            roundLengths={true}
                            speed={700}
                            autoplay={{
                                delay: 4500,
                            }}
                            navigation={{
                                nextEl: ".testimonial__button-next",
                                prevEl: ".testimonial__button-prev",
                            }}
                            breakpoints={{
                                1400: {
                                    slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 2,
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
                                testimonial_data.slice(34, 40).map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="testimonial__wrapper style-seven">
                                            <div className="testimonial__top-item">
                                                <span className="testimonial__rating">
                                                    <GetRatting averageRating={item.rating} />
                                                </span>
                                                <div className="testimonial__shape">
                                                    <Image className="testimonial__shape-quote"
                                                        src={testimonialQuote}
                                                        width={62} height={45}
                                                        alt="image not found" />
                                                </div>
                                            </div>
                                            <div className="testimonial__item">
                                                <div className="testimonial__content">
                                                    <div className="testimonial__text">
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="testimonial__thumb-wrap">
                                                <div className="testimonial__thumb">
                                                    <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                </div>
                                                <div className="testimonial__avatar-info">
                                                    <h6 className="testimonial__avatar-title">{item.userName}</h6>
                                                    <span className="testimonial__avatar-designation">{item.designation}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    {/* -- If we need navigation buttons -- */}
                    <div className="testimonial__navigation d-none d-sm-block">
                        <button className="testimonial__button-prev circle-btn slider__nav-btn"><i
                            className="fa-regular fa-arrow-left-long"></i></button>
                        <button className="testimonial__button-next circle-btn ml-5 slider__nav-btn"><i
                            className="fa-regular fa-arrow-right-long"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialStyleSeven;