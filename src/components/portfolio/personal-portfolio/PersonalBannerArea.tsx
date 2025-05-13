import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import towerShape from '../../../../public/assets/images/shape/tower-shape-small.png';
import towerShapeTwo from '../../../../public/assets/images/shape/tower-shape.png';
import handShape from '../../../../public/assets/images/shape/hand-shape.png';
import bannerImage from '../../../../public/assets/images/banner/banner-01.png';

const PerSonalPortFolioBanner = () => {
    return (
        <>
            <section className="banner__area banner-height d-flex justify-content-center align-items-center p-relative">
                <div className="banner-shape d-none d-lg-block">
                    <Image className="banner__shape-two" src={towerShape} width={42} height={42} alt="image not found" />
                </div>
                {/* -- when slide active remove this class -- */}
                <div className="swiper banner__active overflow-visible">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide banner_more_item">
                            <div className="container">
                                <div className="row align-items-center gy-5">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="banner__content p-relative">
                                            <h1 className="banner__title large wow fadeInUp" data-wow-delay=".3s"
                                                data-wow-duration=".7s">Hi, <span className="banner__shape-hand">
                                                    <Image src={handShape} width={43} height={43} alt="image not found" />
                                                </span>{" "}
                                                I’m <span className="bd-text-primary">Portlu</span> UI Designer Based in Florida
                                            </h1>
                                            <p className="wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">We are a
                                                creative agency that specializes in providing high-quality design and
                                                branding solutions to design and coding.</p>
                                        </div>
                                        <div className="banner__btn wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1.1s">
                                            <Link className="bd-btn is-btn-anim" href="/portfolio">
                                                <span className="bd-btn-inner">
                                                    <span className="bd-btn-normal">Get my work</span>
                                                    <span className="bd-btn-hover">Get my work</span>
                                                    <i className="contentHidden"></i>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="banner__thumb-wrapper wow fadeInRight" data-wow-delay=".8s"
                                            data-wow-duration="1.2s">
                                            <div className="banner__shape">
                                                <Image className="banner__shape-one" src={towerShapeTwo} width={78} height={90}
                                                    alt="image not found" />
                                            </div>
                                            <div className="banner__bg"></div>
                                            <div className="banner__thumb">
                                                <Image src={bannerImage} style={{ width: "100%", height: "auto" }}
                                                    alt="image not found" />
                                            </div>

                                            <div className="theme__social banner-social">
                                                <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i>
                                                    <div className="banner__social-tooltip">
                                                        <p>Facebook</p>
                                                    </div>
                                                </Link>
                                                <Link href="https://twitter.com/"><i className="icon-twiter"></i>
                                                    <div className="banner__social-tooltip">
                                                        <p>Twitter</p>
                                                    </div>
                                                </Link>
                                                <Link href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin"></i>
                                                    <div className="banner__social-tooltip">
                                                        <p>Linkedin</p>
                                                    </div>
                                                </Link>
                                                <Link href="https://www.behance.net/"><i className="fa-brands fa-behance"></i>
                                                    <div className="banner__social-tooltip">
                                                        <p>Behance</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PerSonalPortFolioBanner;