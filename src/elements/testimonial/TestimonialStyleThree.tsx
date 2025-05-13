"use client"
import React from 'react';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import "swiper/css/bundle"
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import testimonial_data from '@/data/testimonial-data';
import GetRatting from '@/hooks/GetRatting';
import quoteImg from '../../../public/assets/images/shape/testimonial-quote.png';

const TestimonialStyleThree = () => {
    return (
        <>
            <div className="row g-5">
                <div className="col-xl-6 col-lg-6">
                    <div className="section__title-wrapper section__title-space">
                        <span className="section__subtitle sec-border">CLIENT SAYS </span>
                        <h2 className="section__title">What They Say</h2>
                    </div>
                </div>
            </div>
            <div className="testimonial__wrapper style-three wow fadeInUp" data-wow-delay=".3s">
                <div className="swiper testimonial__active">
                    <div>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            loop={false}
                            slidesPerView={1}
                            spaceBetween={30}
                            centeredSlides={false}
                            speed={1000}
                            navigation={{
                                nextEl: ".testimonial__button-next-three",
                                prevEl: ".testimonial__button-prev-three",
                            }}
                            pagination={{
                                el: ".bd-swiper-dot-three",
                                clickable: true,
                            }}
                        >
                            {
                                testimonial_data.slice(11, 17).map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-5 col-sm-5">
                                                <div className="testimonial__thumb-wrap">
                                                    <div className="testimonial__thumb">
                                                        <Image loader={imageLoader} placeholder='blur' loading='lazy' src={item.image} width={178} height={262} alt="image not found" />
                                                    </div>
                                                    <div className="testimonial__avatar-info">
                                                        <h6 className="testimonial__avatar-title">{item.userName}</h6>
                                                        <span className="testimonial__avatar-designation">{item.designation} /
                                                            <span className="testimonial__rating">{" "}
                                                                <GetRatting averageRating={item.rating} />
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-9 col-md-7 col-sm-7">
                                                <div className="testimonial__item">
                                                    <div className="testimonial__content">
                                                        <div className="testimonial__text">
                                                            <p>{item.description}</p>
                                                        </div>
                                                        <div className="testimonial__shape">
                                                            <Image className="testimonial__shape-quote"
                                                                src={quoteImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                        </div>
                                                    </div>
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
                        <button className="testimonial__button-prev-three circle-btn slider__nav-btn"><i
                            className="fa-regular fa-arrow-left-long"></i></button>
                        <button className="testimonial__button-next-three circle-btn ml-5 slider__nav-btn"><i
                            className="fa-regular fa-arrow-right-long"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialStyleThree;