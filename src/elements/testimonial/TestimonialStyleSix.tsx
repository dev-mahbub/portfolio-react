"use client"
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import React from 'react';
import testimonialImg from '../../../public/assets/images/testimonial/testimonial-04.png';
import testimonialQuote from '../../../public/assets/images/shape/testimonial-quote-03.png';
import testimonial_data from '@/data/testimonial-data';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css/bundle"
import GetRatting from '@/hooks/GetRatting';

const TestimonialStyleSix = () => {
    return (
        <>
            <div className="row g-5 align-items-center wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                <div className="col-lg-5 col-md-5">
                    <div className="testimonial__thumb-wrap style-four">
                        <div className="testimonial__thumb">
                            <Image loader={imageLoader} placeholder='blur' loading='lazy' src={testimonialImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-7">
                    <div className="testimonial__item style-four">
                        <div className="swiper testimonial__active">
                            <Swiper
                                modules={[Pagination]}
                                loop={false}
                                slidesPerView={1}
                                spaceBetween={30}
                                centeredSlides={false}
                                speed={1000}
                                pagination={{
                                    el: ".bd-swiper-dot-6",
                                    clickable: true,
                                }}
                            >
                                {
                                    testimonial_data.slice(28, 31).map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="testimonial__content">
                                                <div className="testimonial__shape mb-30">
                                                    <Image className="testimonial__shape-quote"
                                                        src={testimonialQuote} width={75} height={62}
                                                        alt="image not found" />
                                                </div>
                                                <div className="testimonial__text">
                                                    <p>{item.description}</p>
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
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            {/* -- If we need pagination -- */}
                            <div className="pagination__wrapper">
                                <div className="bd-swiper-dot-6"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default TestimonialStyleSix;