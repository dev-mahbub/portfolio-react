"use client"
import portfolio_data from '@/data/portfolio-data';
import Link from 'next/link';
import React from 'react';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css/bundle"

const PortfolioStyleSix = () => {
    return (
        <>
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                    <div className="section__title-wrapper text-center section__title-space">
                        <span className="section__subtitle bg-field">WHAT I HAVE DONE</span>
                        <h2 className="section__title mb-20">Welcome to Our Featured Works</h2>
                        <p className="section__paragraph is-br-none">For each project in the portfolio, provide detailed
                            <br /> descriptions that cover.</p>
                    </div>
                </div>
            </div>
            <div className="portfolio__wrapper style-six wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                <div className="swiper portfolio__active">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={30}
                        speed={700}
                        loop={true}
                        autoplay={{
                            delay: 4500
                        }}
                        pagination={{
                            el: ".bd-swiper-dot-7",
                            clickable: true,
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
                            portfolio_data.slice(27, 33).map((item) => (
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
                    {/* -- If we need pagination -- */}
                    <div className="pagination__wrapper">
                        <div className="bd-swiper-dot-7 text-center is-border"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioStyleSix;