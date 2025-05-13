"use client"
import portfolio_data from '@/data/portfolio-data';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import React from 'react';
import Link from 'next/link';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import "swiper/css/bundle"

const PorttfolioStyleThree = () => {
    return (
        <>
            <div className="row g-5 p-relative">
                <div className="col-xl-4 col-lg-5 col-md-5">
                    <div className="section__title-wrapper is-margin">
                        <span className="section__subtitle sec-border">WHAT I HAVE DONE</span>
                        <h2 className="section__title mb-20">The Pinnacle of Artistry Our Works</h2>
                        <p className="section__paragraph">For each project in the portfolio, provide detailed
                            descriptions that cover the following aspects</p>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-7 col-md-7">
                    <div className="portfolio__wrapper style-three">
                        <div className="swiper portfolio__active-two">
                            <PhotoProvider
                                speed={() => 800}
                                easing={(type) =>
                                    type === 2
                                        ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                        : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                                }
                            >
                                <Swiper
                                    modules={[Autoplay, Navigation]}
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    speed={700}
                                    autoplay={{
                                        delay: 4500,
                                    }}
                                    navigation={{
                                        nextEl: ".portfolio__button-next",
                                        prevEl: ".portfolio__button-prev",
                                    }}
                                    breakpoints={{
                                        1200: {
                                            slidesPerView: 3,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                        },
                                        576: {
                                            slidesPerView: 3,
                                        },
                                        400: {
                                            slidesPerView: 1,
                                        },
                                        0: {
                                            slidesPerView: 1,
                                        },
                                    }}
                                >
                                    {
                                        portfolio_data.slice(10, 16).map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <div className=" portfolio__item style-three wow slideInDown" data-wow-delay={item.wowDelay}
                                                    data-wow-duration="1s">
                                                    <div className="portfolio__item-thumb"
                                                        style={{ backgroundImage: `url(${item.image.src})` }}>
                                                        <div className="portfolio__item-btn">
                                                            <span className="icon__box">
                                                                <PhotoView src={item.image.src}>
                                                                    <button className="popup-image circle-btn is-bg-white is-btn-large">
                                                                        <i className="icon-plus"></i>
                                                                    </button>
                                                                </PhotoView>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="portfolio__item-content">
                                                        <div className="portfolio__item-info">
                                                            <div className="portfolio__tag">
                                                                <Link href={`/portfolio/portfolio-details/${item.id}`}>{item.tagName}</Link>
                                                            </div>
                                                            <h5 className="portfolio__item-title underline"><Link
                                                                href={`/portfolio/portfolio-details/${item.id}`}>{item.title}</Link></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </PhotoProvider>
                        </div>
                    </div>
                </div>
                {/* -- If we need navigation buttons -- */}
                <div className="portfolio__navigation d-none d-md-block">
                    <button className="portfolio__button-prev circle-btn slider__nav-btn"><i
                        className="fa-regular fa-arrow-left-long"></i></button>
                    <button className="portfolio__button-next portfolio_button-spacing circle-btn slider__nav-btn"><i
                        className="fa-regular fa-arrow-right-long"></i></button>
                </div>
            </div>

        </>
    );
};

export default PorttfolioStyleThree;