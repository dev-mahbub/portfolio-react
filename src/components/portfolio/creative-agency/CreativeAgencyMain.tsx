import React from 'react';
import CreativeAgencyBanner from './CreativeAgencyBanner';
import BrandSliderOne from '@/elements/brands/BrandSliderOne';
import AboutStyleThree from '@/elements/about/AboutStyleThree';
import CreativeCounterArea from './CreativeCounterArea';
import ServiceStyleThree from '@/elements/services/ServiceStyleThree';
import PorttfolioStyleThree from '@/elements/portfolio/PorttfolioStyleThree';
import TeamStyleOne from '@/elements/team/TeamStyleOne';
import CreativeVideoArea from './CreativeVideoArea';
import TestimonialStyleThree from '@/elements/testimonial/TestimonialStyleThree';
import LatestBlogThree from '@/elements/blogs/LatestBlogThree';
import CtaStyleOne from '@/elements/cta/CtaStyleOne';

const CreativeAgencyMain = () => {
    return (
        <>
            {/* Banner Component */}
            <CreativeAgencyBanner />
            {/* Banner Component end */}
            {/* Brand area start */}
            <div className="brand__area section-space">
                <div className="container">
                    <BrandSliderOne />
                </div>
            </div>
            {/* Brand area end*/}
            {/* About area start*/}
            <section id="homeabout" className="bd-about__area section-space theme-bg-secondary about-space">
                <div className="container">
                    <AboutStyleThree />
                </div>
            </section>
            {/* About area end*/}
            {/* Counter Component */}
            <CreativeCounterArea />
            {/* Counter Component end*/}
            {/* -- service area start -- */}
            <section id="homeservices" className="bd-service__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle sec-border">MY SERVICE</span>
                                <h2 className="section__title mb-20">Professional Services</h2>
                                <p className="section__paragraph is-br-none">Begin with a brief introduction or summary that
                                    <br /> highlights who you are and what</p>
                            </div>
                        </div>
                    </div>
                    <ServiceStyleThree />
                </div>
            </section>
            {/* -- service area end -- */}
            {/* -- portfolio area start -- */}
            <section id="homeworks" className="bd-portfolio__area section-space fix theme-bg-secondary">
                <div className="container">
                    <PorttfolioStyleThree />
                </div>
            </section>
            {/* -- portfolio area end -- */}
            {/* -- team area start -- */}
            <section className="bd-team__area section-space">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle sec-border">OUR TEAM</span>
                                <h2 className="section__title mb-20">Our Team Members</h2>
                                <p className="section__paragraph is-br-none">We maintain an open, inclusive, and collaborative
                                    <br /> environment where ideas flow freely.</p>
                            </div>
                        </div>
                    </div>
                    <TeamStyleOne />
                </div>
            </section>
            {/* -- team area end -- */}
            {/* Creative video area Component*/}
            <CreativeVideoArea />
            {/* Creative video area end*/}
            {/* -- testimonial area start -- */}
            <section className="bd-testimonial__area section-space theme-bg-primary">
                <div className="container">
                    <TestimonialStyleThree />
                </div>
            </section>
            {/* -- Letest Blog start -- */}
            <div id="homeblog" className="bd-blog__area section-space">
                <div className="container">
                    <LatestBlogThree />
                </div>
            </div>
            {/* -- Letest Blog start end -- */}
            {/* -- cta area start -- */}
            <div id="homecontact" className="cta__area is-cta-margin  fix">
                <div className="container">
                    <CtaStyleOne />
                </div>
            </div>
        </>
    );
};

export default CreativeAgencyMain;