'use client'
import testimonial_data from '@/data/testimonial-data';
import React from 'react';
import testimonialQuoteOne from '../../../public/assets/images/shape/testimonial-quote-05.png';
import testimonialQuoteTwo from '../../../public/assets/images/shape/testimonial-quote-06.png';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import "swiper/css/bundle"
import Image from 'next/image';
import GetRatting from '@/hooks/GetRatting';

const TestimonialStyleFour = () => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6 col-md-8">
                    <div className="section__title-wrapper text-center section__title-space">
                        <span className="section__subtitle bg-field">OUR TESTIMONIAL</span>
                        <h2 className="section__title mb-20">What Our Clients Have to Say</h2>
                    </div>
                </div>
            </div>
            <div className="testimonial__slider style-two">
                <div className="row align-items-center g-5 justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-8 col-lg-8">
                        <div className="swiper testimonial__active">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                loop={false}
                                slidesPerView={1}
                                spaceBetween={30}
                                centeredSlides={false}
                                speed={1000}
                                navigation={{
                                    nextEl: ".testimonial__button-next-four",
                                    prevEl: ".testimonial__button-prev-four",
                                }}
                                pagination={{
                                    el: ".bd-swiper-dot",
                                    clickable: true,
                                }}
                            >
                                {
                                    testimonial_data.slice(17, 23).map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="testimonial__wrapper style-six">
                                                <div className="testimonial__item">
                                                    <div className="bg-shape"></div>
                                                    <div className="testimonial__shape">
                                                        <Image className="testimonial__shape-one"
                                                            src={testimonialQuoteOne} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                        <Image className="testimonial__shape-two"
                                                            src={testimonialQuoteTwo} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                    </div>
                                                    <div className="testimonial__content">
                                                        <div className="testimonial__text">
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="testimonial__avatar-item">
                                                    <div className="testimonial__avatar-thumb">
                                                        <Image
                                                            src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
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
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                    {/* -- If we need navigation buttons -- */}
                    <div className="testimonial__navigation d-none d-sm-block">
                        <button className="testimonial__button-prev-four circle-btn slider__nav-btn"><i
                            className="fa-regular fa-arrow-left-long"></i></button>
                        <button className="testimonial__button-next-four circle-btn ml-5 slider__nav-btn"><i
                            className="fa-regular fa-arrow-right-long"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialStyleFour;