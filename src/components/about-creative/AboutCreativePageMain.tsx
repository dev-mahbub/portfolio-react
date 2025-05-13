import React from 'react';
import breadcrumbBg from '../../../public/assets/images/breadcrumb/breadcrumb-bg-01.png';
import testimonialBg from '../../../public/assets/images/bg/testimonial-bg-01.png';
import BreadcrumbOne from '@/elements/breadcrumb/BreadcrumbOne';
import AboutTextArea from './AboutTextArea';
import AboutPortfolioSlider from '../about/AboutPortfolioSlider';
import AboutCreativeSkillArea from './AboutCreativeSkillArea';
import AboutCreativeService from './AboutCreativeService';
import TeamStyleOne from '@/elements/team/TeamStyleOne';
import AwardStyleOne from '@/elements/award/AwardStyleOne';
import TestimonialStyleSeven from '@/elements/testimonial/TestimonialStyleSeven';
import BrandSliderThree from '@/elements/brands/BrandSliderThree';

const AboutCreativePageMain = () => {
    return (
        <>
            {/* bradcrumb area start */}
            <BreadcrumbOne title="Digital Agency for Your Business Solutions" subTitle='ABOUT CREATIVE' breadcrumbImg={breadcrumbBg} rowWrapperClass='col-xl-8 col-lg-8 col-md-10' />
            {/* bradcrumb area start */}
            {/* about text area start */}
            <AboutTextArea />
            {/* about text area end */}
            {/* about portfolio component */}
            <AboutPortfolioSlider />
            {/* about portfolio component end */}
            {/* skill area start */}
            <AboutCreativeSkillArea />
            {/* skill area end */}
            {/* service component */}
            <AboutCreativeService />
            {/* service componet end */}
            {/* -- team area start -- */}
            <section className="bd-team__area section-space theme-bg-secondary">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle sec-border">OUR TEAM</span>
                                <h2 className="section__title mb-20">Our Best Team</h2>
                                <p className="section__paragraph is-br-none">We maintain an open, inclusive, and collaborative
                                    <br /> environment where ideas flow freely.
                                </p>
                            </div>
                        </div>
                    </div>
                    <TeamStyleOne />
                </div>
            </section>
            {/* -- team area end -- */}
            {/* award area satrt */}
            {/* -- award area start -- */}
            <section className="bd-award__area section-space">
                <div className="container">
                    <AwardStyleOne />
                </div>
            </section>
            {/* award area end */}
            {/* testimonial area start */}
            {/* -- testimonial area start -- */}
            <section className="bd-testimonial__area section-space p-relative style-seven">
                <div className="bg__thumb-position include-bg is-overlay"
                    style={{ backgroundImage: `url(${testimonialBg.src})` }}>
                </div>
                <div className="container">
                    <TestimonialStyleSeven />
                </div>
            </section>
            {/* testimonial area end */}
            {/* brand area start */}
            <div className="brand__area section-space theme-bg-secondary">
                <div className="brand__wrapper style-two wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                    <div className="container">
                        <BrandSliderThree />
                    </div>
                </div>
            </div>
            {/* brand area end */}
        </>
    );
};

export default AboutCreativePageMain;