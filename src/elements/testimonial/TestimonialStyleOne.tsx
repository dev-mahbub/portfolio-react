"use client"
import React from 'react';
import testimonialImg from '../../../public/assets/images/testimonial/testimonial-01.png';
import userImgOne from '../../../public/assets/images/user/user-04.png';
import userImgTwo from '../../../public/assets/images/user/user-05.png';
import userImgThree from '../../../public/assets/images/user/user-06.png';
import Image from 'next/image';
import testimonial_data from '@/data/testimonial-data';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import "swiper/css/bundle"
import GetRatting from '@/hooks/GetRatting';
import { imageLoader } from '@/hooks/ImageLoader';

const TestimonialStyleOne = () => {
    return (
        <>
            <div className="row align-items-center g-5 wow fadeInUp" data-wow-delay=".3s">
                <div className="col-xl-5 col-lg-5">
                    <div className="testimonial__thumb-wrap">
                        <div className="testimonial__thumb">
                            <div className="testimonial__bg"></div>
                            <Image loader={imageLoader} placeholder='blur' loading='lazy' src={testimonialImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                            <div className="testimonial__thumb-small">
                                <Image className="img-one" src={userImgOne} style={{ width: "100%", height: "auto" }} alt="img not found" />
                                <Image className="img-two" src={userImgTwo} style={{ width: "100%", height: "auto" }} alt="img not found" />
                                <Image className="img-three" src={userImgThree} style={{ width: "100%", height: "auto" }} alt="img not found" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                    <div className="testimonial__item">
                        <div className="section__title-wrapper mb-25">
                            <span className="section__subtitle mb-15">Client say</span>
                            <h2 className="section__title">Client Experiences and Testimonials</h2>
                        </div>
                        <div className="swiper testimonial__active p-relative">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                loop={false}
                                slidesPerView={1}
                                spaceBetween={30}
                                centeredSlides={false}
                                speed={1000}
                                navigation={{
                                    nextEl: ".testimonial__button-next",
                                    prevEl: ".testimonial__button-prev",
                                }}
                                pagination={{
                                    el: ".bd-swiper-dot",
                                    clickable: true,
                                }}
                            >
                                {
                                    testimonial_data.slice(0, 5).map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="testimonial__content">
                                                <div className="testimonial__rating">
                                                    <GetRatting averageRating={item.rating} />
                                                </div>
                                                <div className="testimonial__text">
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="testimonial__avatar-item">
                                                    <div className="testimonial__avatar-thumb">
                                                        <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="img not found" />
                                                    </div>
                                                    <div className="testimonial__avatar-info">
                                                        <h6 className="testimonial__avatar-title">{item.userName}</h6>
                                                        <span className="testimonial__avatar-designation">{item.designation}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            {/* -- If we need navigation buttons -- */}
                            <div className="testimonial__navigation d-none d-sm-block">
                                <button className="testimonial__button-prev circle-btn slider__nav-btn"><i
                                    className="fa-regular fa-arrow-left-long"></i></button>
                                <button className="testimonial__button-next circle-btn slider__nav-btn"><i
                                    className="fa-regular fa-arrow-right-long"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default TestimonialStyleOne;