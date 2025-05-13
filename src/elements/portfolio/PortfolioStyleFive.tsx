"use client"
import portfolio_data from '@/data/portfolio-data';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const PortfolioStyleFive = () => {
    return (
        <>
            <div className="row g-5 align-items-center section__title-space">
                <div className="col-xl-5 col-lg-7 col-md-6">
                    <div className="section__title-wrapper ">
                        <span className="section__subtitle bg-field">WHAT I HAVE DONE</span>
                        <h2 className="section__title">The Perfection of Artistry Our Works</h2>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-5 col-md-6">
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
            <div className="portfolio__wrapper">
                <div className="row grid g-5 wow fadeInUp" data-wow-delay=".3s">
                    <PhotoProvider
                        speed={() => 800}
                        easing={(type) =>
                            type === 2
                                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                        }
                    >
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
                            <Masonry gutter='30px'>
                                {
                                    portfolio_data.slice(23, 27).map((item) => (
                                        <div className="portfolio-item" key={item.id}>
                                            <div className=" portfolio__item style-five">
                                                <div className="portfolio__item-thumb">
                                                    <Image loader={imageLoader} placeholder='blur' loading='lazy' src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
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
                                                        <h5 className="portfolio__item-title underline small"><Link
                                                            href={`/portfolio/portfolio-details/${item.id}`}>{item.title}</Link></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Masonry>
                        </ResponsiveMasonry>
                    </PhotoProvider>
                </div>
            </div>
        </>
    );
};

export default PortfolioStyleFive;