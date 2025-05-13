import portfolio_data from '@/data/portfolio-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const PortfolioStyleOne = () => {
    return (
        <>
            <section className="bd-portfolio__area">
                <div className="container">
                    <div className="row g-5 align-items-end section__title-space">
                        <div className="col-lg-5 col-md-7">
                            <div className="section__title-wrapper">
                                <span className="section__subtitle">MY RECENT PORTFOLIO</span>
                                <h2 className="section__title">Check My Latest Works</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-5">
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
                        <div className="row grid g-5 wow fadeInUp" data-wow-delay=".5s">
                            <div className="col-xl-4 col-lg-4 col-md-6 grid-item" >
                                {
                                    portfolio_data.slice(0, 1).map((item) => (
                                        <div className="portfolio__item" key={item.id}>
                                            <div className="portfolio__thumb">
                                                <Link href={`/portfolio/portfolio-details/${item.id}`}>
                                                    <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="img not found" /></Link>
                                            </div>
                                            <div className="portfolio__content">
                                                <div className="portfolio__info">
                                                    <div className="portfolio__tag">
                                                        <Link href={`/portfolio/portfolio-details/${item.id}`}>{item.tagName}</Link>
                                                    </div>
                                                    <h5 className="portfolio__title"><Link href={`/portfolio/portfolio-details/${item.id}`}>{item.title}</Link></h5>
                                                </div>
                                                <div className="portfolio__btn">
                                                    <Link href={`/portfolio/portfolio-details/${item.id}`} className="circle-btn">
                                                        <span className="icon__box">
                                                            <i className="fa-regular fa-arrow-right-long"></i>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 grid-item">
                                {
                                    portfolio_data.slice(1, 3).map((item) => (
                                        <div className={`portfolio__item ${item.style}`} key={item.id}>
                                            <div className="portfolio__thumb">
                                                <Link href={`/portfolio/portfolio-details/${item.id}`}>
                                                    <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="img not found" /></Link>
                                            </div>
                                            <div className="portfolio__content">
                                                <div className="portfolio__info">
                                                    <div className="portfolio__tag">
                                                        <Link href={`/portfolio/portfolio-details/${item.id}`}>{item.tagName}</Link>
                                                    </div>
                                                    <h5 className="portfolio__title"><Link href={`/portfolio/portfolio-details/${item.id}`}>{item.title}</Link></h5>
                                                </div>
                                                <div className="portfolio__btn">
                                                    <Link href={`/portfolio/portfolio-details/${item.id}`} className="circle-btn">
                                                        <span className="icon__box">
                                                            <i className="fa-regular fa-arrow-right-long"></i>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 grid-item" >
                                {
                                    portfolio_data.slice(3, 4).map((item) => (

                                        <div className=" portfolio__item" key={item.id}>
                                            <div className="portfolio__thumb">
                                                <Link href={`/portfolio/portfolio-details/${item.id}`}>
                                                    <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="img not found" /></Link>
                                            </div>
                                            <div className="portfolio__content">
                                                <div className="portfolio__info">
                                                    <div className="portfolio__tag">
                                                        <Link href={`/portfolio/portfolio-details/${item.id}`}>{item.tagName}</Link>
                                                    </div>
                                                    <h5 className="portfolio__title"><Link href={`/portfolio/portfolio-details/${item.id}`}>{item.title}</Link></h5>
                                                </div>
                                                <div className="portfolio__btn">
                                                    <Link href={`/portfolio/portfolio-details/${item.id}`} className="circle-btn">
                                                        <span className="icon__box">
                                                            <i className="fa-regular fa-arrow-right-long"></i>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default PortfolioStyleOne;