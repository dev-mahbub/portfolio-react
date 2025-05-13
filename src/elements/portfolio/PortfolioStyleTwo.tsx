"use client"
import portfolio_data from '@/data/portfolio-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const PortfolioStyleTwo = () => {
    return (
        <>
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                    <div className="section__title-wrapper text-center section__title-space">
                        <span className="section__subtitle bg-field">MY RECENT PORTFOLIO</span>
                        <h2 className="section__title mb-20">Project Portfolio</h2>
                        <p className="section__paragraph">For each project in the portfolio, provide detailed
                            descriptions following the aspects</p>
                    </div>
                </div>
            </div>
            <div className="portfolio__wrapper">
                <div className="row grid g-5 wow fadeInUp" data-wow-delay=".3s">
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                        <Masonry gutter='20px'>
                            {portfolio_data.slice(4, 10).map((item) => (
                                <div className="portfolio-item" key={item.id}>
                                    <div className=" portfolio__item style-two">
                                        <div className="portfolio__item-thumb">
                                            <Link href={`/portfolio/portfolio-details/${item.id}`}>
                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                            </Link>
                                        </div>
                                        <div className="portfolio__item-content">
                                            <div className="portfolio__item-info">
                                                <div className="portfolio__tag">
                                                    <Link href={`/portfolio/portfolio-details/${item.id}`}>{item.tagName}</Link>
                                                </div>
                                                <h5 className="portfolio__item-title underline">
                                                    <Link href={`/portfolio/portfolio-details/${item.id}`}>{item.title}</Link>
                                                </h5>
                                            </div>
                                            <div className="portfolio__item-btn">
                                                <Link href={`/portfolio/portfolio-details/${item.id}`} className="circle-btn is-bg-white">
                                                    <span className="icon__box">
                                                        <i className="fa-regular fa-arrow-right-long"></i>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                    <div className="row">
                        <div className="col-12">
                            <div className="portfolio__more text-center mt-50">
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
                </div>
            </div>
        </>
    );
};

export default PortfolioStyleTwo;