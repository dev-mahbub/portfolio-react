import React from 'react';
import CreativeAgencyBannerTwo from './CreativeAgencyBannerTwo';
import ServiceStyleFour from '@/elements/services/ServiceStyleFour';
import AboutStyleFour from '@/elements/about/AboutStyleFour';
import AboutShape from '../../../../public/assets/images/shape/lamp-shape.png';
import Image from 'next/image';
import PortfolioStyleFour from '@/elements/portfolio/PortfolioStyleFour';
import CounterStyleTwo from '@/elements/counter/CounterStyleTwo';
import TeamStyleTwo from '@/elements/team/TeamStyleTwo';
import TestimonialStyleSix from '@/elements/testimonial/TestimonialStyleSix';
import LatestBlogFour from '@/elements/blogs/LatestBlogFour';
import CtaStyleTwo from '@/elements/cta/CtaStyleTwo';

const CreativeAgencyTwoMain = () => {
    return (
        <>
            {/* banner component */}
            <CreativeAgencyBannerTwo />
            {/* end */}
            {/* -- service area start -- */}
            <section id="homeservices" className="bd-service__area section-space">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle sec-border">MY SERVICE</span>
                                <h2 className="section__title mb-20">Professional Services</h2>
                                <p className="section__paragraph is-br-none">Begin with a brief introduction or summary that
                                    <br /> highlights who you are and what
                                </p>
                            </div>
                        </div>
                    </div>
                    <ServiceStyleFour />
                </div>
            </section>
            {/* -- service area end -- */}
            {/* -- about area start -- */}
            <section id="homeabout" className="bd-about__area section-space theme-bg-secondary p-relative">
                <div className="about__shape">
                    <Image className="about__shape-two" src={AboutShape} style={{ width: "auto", height: "auto" }} alt="image not found" />
                </div>
                <div className="container">
                    <AboutStyleFour />
                </div>
            </section>
            {/* -- about area end -- */}
            {/* -- portfolio area start -- */}
            <section id="homeworks" className="bd-portfolio__area section-space fix portfolio-four-style">
                <div className="container">
                    <PortfolioStyleFour />
                </div>
            </section>
            {/* -- portfolio area end -- */}
            {/* -- counter component -- */}
            <CounterStyleTwo />
            {/* -- counter component end-- */}
            {/* -- team area start -- */}
            <section className="bd-team__area section-space">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle sec-border">OUR TEAM</span>
                                <h2 className="section__title mb-20">Management Group</h2>
                                <p className="section__paragraph is-br-none">We maintain an open, inclusive, and collaborative
                                    <br /> environment where ideas flow freely.
                                </p>
                            </div>
                        </div>
                    </div>
                    <TeamStyleTwo />
                </div>
            </section>
            {/* -- team area end -- */}
            {/* -- testimonial area start -- */}
            <section className="bd-testimonial__area section-space theme-bg-primary p-relative z-index-1">
                <div className="container">
                    <TestimonialStyleSix />
                </div>
            </section>
            {/* -- testimonial area end -- */}
            {/* -- blog area start -- */}
            <div id="homeblog" className="bd-blog__area section-space">
                <div className="container">
                    <LatestBlogFour />
                </div>
            </div>
            {/* -- blog area end -- */}
            {/* -- cta component -- */}
            <CtaStyleTwo />
            {/* -- cta component end-- */}

        </>
    );
};

export default CreativeAgencyTwoMain;