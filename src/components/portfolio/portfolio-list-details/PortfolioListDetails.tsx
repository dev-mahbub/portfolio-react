"use client"
import React from 'react';
import PortfolioImg1 from '../../../../public/assets/images/portfolio/portfolio-17.png';
import PortfolioImg2 from '../../../../public/assets/images/portfolio/portfolio-20.png';
import PortfolioImg3 from '../../../../public/assets/images/portfolio/portfolio-21.png';
import PortfolioImg4 from '../../../../public/assets/images/portfolio/portfolio-22.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import Link from 'next/link';

const PortfolioListDetails = () => {
    return (
        <>
            <section className="bd-portfolio__area section-space">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="portfolio__details-img-list">

                                <div className="portfolio__details-img-list-box">
                                    <Image
                                        src={PortfolioImg1}
                                        loader={imageLoader}
                                        placeholder="blur"
                                        loading="lazy"
                                        style={{ width: "100%", height: "auto" }}
                                        alt="image not found"
                                    />
                                </div>
                                <div className="portfolio__details-img-list-box">
                                    <Image
                                        src={PortfolioImg2}
                                        loader={imageLoader}
                                        placeholder="blur"
                                        loading="lazy"
                                        style={{ width: "100%", height: "auto" }}
                                        alt="image not found"
                                    />
                                </div>
                                <div className="portfolio__details-img-list-box">
                                    <Image
                                        src={PortfolioImg3}
                                        loader={imageLoader}
                                        placeholder="blur"
                                        loading="lazy"
                                        style={{ width: "100%", height: "auto" }}
                                        alt="image not found"
                                    />
                                </div>
                                <div className="portfolio__details-img-list-box">
                                    <Image
                                        src={PortfolioImg4}
                                        loader={imageLoader}
                                        placeholder="blur"
                                        loading="lazy"
                                        style={{ width: "100%", height: "auto" }}
                                        alt="image not found"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="portfolio__details-info-wrapper">
                                <div className="portfolio__details-sec-wrapper">
                                    <div className="section__title-wrapper">
                                        <div className="section__title-wrapper mb-15">
                                            <span className="section__subtitle bg-field">BRANDING IDES</span>
                                            <h2 className="portfolio__details-title">Digital Agency</h2>
                                        </div>
                                        <p>We provide digital experience services to startups and small businesses. We help
                                            our clients succeed by creating brand identities, digital experiences, and print
                                            materials. Install any demo, plugin or template in a matter of seconds.</p>
                                    </div>
                                </div>
                                <div className="portfolio__details-meta">
                                    <div className="portfolio__details-meta-item">
                                        <div className="portfolio__details-meta-icon">
                                            <span>
                                                <i className="fa-regular fa-user"></i>
                                            </span>
                                        </div>
                                        <div className="portfolio__details-meta-content">
                                            <h5>Client:</h5>
                                            <span>Digital Agency</span>
                                        </div>
                                    </div>
                                    <div className="portfolio__details-meta-item">
                                        <div className="portfolio__details-meta-icon">
                                            <span>
                                                <i className="fa-light fa-award"></i>
                                            </span>
                                        </div>
                                        <div className="portfolio__details-meta-content">
                                            <h5>Awards:</h5>
                                            <span>First Place</span>
                                        </div>
                                    </div>

                                    <div className="portfolio__details-meta-item">
                                        <div className="portfolio__details-meta-icon">
                                            <span>
                                                <i className="fa-sharp fa-light fa-layer-group"></i>
                                            </span>
                                        </div>
                                        <div className="portfolio__details-meta-content">
                                            <h5>Category:</h5>
                                            <span>Portfolio</span>
                                        </div>
                                    </div>
                                    <div className="portfolio__details-meta-item">
                                        <div className="portfolio__details-meta-icon">
                                            <span>
                                                <i className="fa-light fa-calendar-days"></i>
                                            </span>
                                        </div>
                                        <div className="portfolio__details-meta-content">
                                            <h5>Date:</h5>
                                            <span>May 4, 2020</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio__details-btn">
                                    <Link className="bd-btn is-btn-anim" href="/portfolio">
                                        <span className="bd-btn-inner">
                                            <span className="bd-btn-normal">View Website</span>
                                            <span className="bd-btn-hover">View Website</span>
                                            <i className="contentHidden"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioListDetails;