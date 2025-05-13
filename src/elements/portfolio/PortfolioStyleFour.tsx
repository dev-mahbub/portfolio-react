"use client"
import portfolio_data from '@/data/portfolio-data';
import React from 'react';
import Link from 'next/link';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import "swiper/css/bundle"


const PortfolioStyleFour = () => {
    return (
        <>
            <div className="row g-5 align-items-end  section__title-space portfolio-four-style">
                <div className="col-xl-5 col-lg-5 col-md-6">
                    <div className="section__title-wrapper">
                        <span className="section__subtitle sec-border">WHAT I HAVE DONE</span>
                        <h2 className="section__title">The Pinnacle of Artistry Our Works</h2>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-6">
                    <div className="portfolio__more text-md-end">
                        <Link className="bd-btn is-btn-anim" href="/portfolio">
                            <span className="bd-btn-inner">
                                <span className="bd-btn-normal">View all project</span>
                                <span className="bd-btn-hover">View all project</span>
                                <i className="contentHidden"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="portfolio__wrapper style-six wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                <div className="swiper portfolio__active">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={false}
                        speed={700}
                        autoplay={{
                            delay: 45000000
                        }}
                        navigation={{
                            nextEl: ".portfolio__button-next",
                            prevEl: ".portfolio__button-prev",
                        }}
                        breakpoints={{
                            1200: {
                                slidesPerView: 2.3,
                                centeredSlides: false,
                            },
                            992: {
                                slidesPerView: 2.3,
                                centeredSlides: true,
                            },
                            768: {
                                slidesPerView: 1.7,
                                centeredSlides: true,
                            },
                            576: {
                                slidesPerView: 1,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                        className='o-visible'
                    >
                        {
                            portfolio_data.slice(17, 23).map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className=" portfolio__item style-six">
                                        <div className="portfolio__item-thumb"
                                            style={{ backgroundImage: `url(${item.image.src})` }}>
                                            <div className="portfolio__item-btn">
                                                <Link href={`/portfolio/portfolio-details/${item.id}`}
                                                    className="circle-btn is-bg-white is-btn-large">
                                                    <span className="icon__box">
                                                        <i className="fa-regular fa-arrow-right-long"></i>
                                                    </span>
                                                </Link>
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
                    {/* -- If we need navigation buttons -- */}
                    <div className="portfolio__navigation d-none d-sm-block">
                        <button
                            className="portfolio__button-prev circle-btn is-bg-white slider__nav-btn is-hover-blue"><i
                                className="fa-regular fa-arrow-left-long"></i></button>
                        <button
                            className="portfolio__button-next circle-btn is-bg-white slider__nav-btn is-hover-blue"><i
                                className="fa-regular fa-arrow-right-long"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioStyleFour;