"use client"
import React from 'react';
import TestimoniaImg from '../../../public/assets/images/testimonial/testimonial-02.png';
import ShapeImg from '../../../public/assets/images/shape/dot-shape.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import testimonial_data from '@/data/testimonial-data';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import "swiper/css/bundle"

const TestimonialStyleTwo = () => {
    return (
        <>
            <div className="row g-5">
                <div className="col-xl-6 col-lg-6">
                    <div className="section__title-wrapper section__title-space">
                        <span className="section__subtitle bg-field">TESTIMONIAL </span>
                        <h2 className="section__title">What They Say</h2>
                    </div>
                </div>
            </div>
            <div className="testimonial__wrapper style-two  wow fadeInUp" data-wow-delay=".3s">
                <div className="row align-items-center g-5">
                    <div className="col-lg-3 col-md-5">
                        <div className="testimonial__thumb">
                            <Image loader={imageLoader} placeholder='blur' loading='lazy' src={TestimoniaImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                            <div className="testimonial__shape">
                                <Image className="testimonial__shape-dot" src={ShapeImg} style={{ width: "100%", height: "auto" }}
                                    alt="image not found" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-7">
                        <div className="testimonial__item">
                            <div className="swiper testimonial__active">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    loop={false}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    centeredSlides={false}
                                    speed={1000}
                                    navigation={{
                                        nextEl: ".testimonial__button-next-two",
                                        prevEl: ".testimonial__button-prev-two",
                                    }}
                                    pagination={{
                                        el: ".bd-swiper-dot-two",
                                        clickable: true,
                                    }}
                                >
                                    {
                                        testimonial_data.slice(5, 11).map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <div className="testimonial__content">
                                                    <div className="testimonial__shape-icon">
                                                        <Image src={item.image} width={72} height={61}
                                                            alt="image not found" />
                                                    </div>
                                                    <div className="testimonial__text">
                                                        <p>{item.description}</p>
                                                    </div>
                                                    <div className="testimonial__avatar-info">
                                                        <h6 className="testimonial__avatar-title">{item.userName}</h6>
                                                        <span className="testimonial__avatar-designation">{item.designation}</span>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                            {/* -- If we need navigation buttons -- */}
                            <div className="testimonial__navigation d-none d-sm-block">
                                <button className="testimonial__button-prev-two circle-btn slider__nav-btn"><i
                                    className="fa-regular fa-arrow-left-long"></i></button>
                                <button className="testimonial__button-next-two circle-btn ml-5 slider__nav-btn"><i
                                    className="fa-regular fa-arrow-right-long"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialStyleTwo;