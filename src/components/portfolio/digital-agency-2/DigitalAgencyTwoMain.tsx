
import React from 'react';
import DigitalAgencyBannerTwo from './DigitalAgencyBannerTwo';
import AboutStyleSix from '@/elements/about/AboutStyleSix';
import ServiceStyleSix from '@/elements/services/ServiceStyleSix';
import PortfolioStyleSix from '@/elements/portfolio/PortfolioStyleSix';
import TeamAreaDigitalAgency from './TeamAreaDigitalAgency';
import DigitalAgencyVideoArea from './DigitalAgencyVideoArea';
import TestimonialStyleFour from '@/elements/testimonial/TestimonialStyleFour';
import LatestBlogSix from '@/elements/blogs/LatestBlogSix';
import CtaStyleThree from '@/elements/cta/CtaStyleThree';

const DigitalAgencyTwoMain = () => {
    return (
        <>
            {/* banner-component */}
            <DigitalAgencyBannerTwo />
            {/* banner-component end*/}
            {/* -- about area start -- */}
            <section id="homeabout" className="bd-about__area section-space">
                <div className="container">
                    <AboutStyleSix />
                </div>
            </section>
            {/* about area end */}
            {/* -- service area start -- */}
            <section id="homeservices" className="bd-service__area section-space theme-bg-secondary">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-8">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle bg-field">WHAT DO I DO</span>
                                <h2 className="section__title mb-20">We Provide Professional Services</h2>
                                <p className="section__paragraph is-br-none">Begin with a brief introduction or summary that
                                    highlights who you are and what</p>
                            </div>
                        </div>
                    </div>
                    <ServiceStyleSix />
                </div>
            </section>
            {/* -- service area end -- */}
            {/* -- portfolio area start -- */}
            <section id="homeworks" className="bd-portfolio__area section-space fix portfolio-four-style">
                <div className="container">
                    <PortfolioStyleSix />
                </div>
            </section>
            {/* -- portfolio area start end -- */}
            {/* -- team area start -- */}
            <TeamAreaDigitalAgency />
            {/* -- team area end -- */}
            {/* video area start */}
            <DigitalAgencyVideoArea />
            {/* video area end */}
            {/* -- testimonial area start -- */}
            <section className="bd-testimonial__area section-space theme-bg-secondary p-relative">
                <div className="container">
                    <TestimonialStyleFour />
                </div>
            </section>
            {/* Testimonial area end */}
            {/* -- blog area start -- */}
            <div id="homeblog" className="bd-blog__area section-space">
                <div className="container">
                    <LatestBlogSix />
                </div>
            </div>
            {/* -- blog area end -- */}
            {/* Cta component */}
            <CtaStyleThree />
        </>
    );
};

export default DigitalAgencyTwoMain;