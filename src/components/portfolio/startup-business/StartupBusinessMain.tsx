import React from 'react';
import StartupBusinessBanner from './StartupBusinessBanner';
import AboutStyleEight from '@/elements/about/AboutStyleEight';
import ServiceElementEight from '@/elements/services/ServiceElementEight';
import PortfolioStyleSeven from '@/elements/portfolio/PortfolioStyleSeven';
import StartupCounterArea from './StartupCounterArea';
import StartupSkillArea from './StartupSkillArea';
import PricingStyleThree from '@/elements/pricing/PricingStyleThree';
import TestimonialStyleSeven from '@/elements/testimonial/TestimonialStyleSeven';
import TestimonialBgImg from '../../../../public/assets/images/bg/testimonial-bg-01.png';
import LatestBlogEight from '@/elements/blogs/LatestBlogEight';
import StartupContactArea from './StartupContactArea';
import AwardStyleTwo from '@/elements/award/AwardStyleTwo';

const StartupBusinessMain = () => {
    return (
        <>
            {/* banner component */}
            <StartupBusinessBanner />
            {/* banner component end*/}
            {/* -- About area start -- */}
            <section id="homeabout" className="bd-about__area section-space">
                <div className="container">
                    <AboutStyleEight />
                </div>
            </section>
            {/* About area end */}
            {/* -- Service area start -- */}
            <section id="homeservices" className="bd-service__area section-space theme-bg-secondary">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8 col-sm-10">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle bg-field">MY SERVICE</span>
                                <h2 className="section__title mb-20">Professional Services</h2>
                                <p className="section__paragraph is-br-none">Begin with a brief introduction or summary that
                                    <br /> highlights who you are and what</p>
                            </div>
                        </div>
                    </div>
                    <ServiceElementEight />
                </div>
            </section>
            {/* -- Service area end -- */}
            {/* -- portfolio area start -- */}
            <section id="homeworks" className="bd__portfolio-area section-space">
                <div className="container">
                    <PortfolioStyleSeven />
                </div>
            </section>
            {/* -- portfolio area end -- */}
            {/* -- counter component -- */}
            <StartupCounterArea />
            {/* -- counter component end-- */}
            {/* Skill area component */}
            <StartupSkillArea />
            {/* Skill area component end */}
            {/* award area component */}
            <section className="bd-award__area section-space theme-bg-secondary">
                <div className="container">
                    <AwardStyleTwo />
                </div>
            </section>
            {/* award area component end */}
            {/* pricing area start */}
            {/* -- pricing area start -- */}
            <div className="bd-pricing__area section-space">
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-lg-5 col-md-8 col-sm-10">
                            <div className="section__title-wrapper section__title-space">
                                <span className="section__subtitle bg-field">Expense Plan</span>
                                <h2 className="section__title mb-20">Pricing Strategy</h2>
                                <p
                                    className="Many different iterations of Lorem Ipsum passages are accessible, but most havebeen adjusted.">
                                    Many different iterations of Lorem Ipsum passages are accessible, but most havebeen
                                    adjusted.Text</p>
                            </div>
                        </div>
                    </div>
                    <PricingStyleThree />
                </div>
            </div>
            {/* pricing area end */}
            {/* testimonial area start */}
            <section className="bd-testimonial__area section-space p-relative style-seven">
                <div className="bg__thumb-position include-bg is-overlay"
                    style={{ backgroundImage: `url(${TestimonialBgImg.src})` }}></div>
                <div className="container">
                    <TestimonialStyleSeven />
                </div>
            </section>
            {/* testimonial area end */}
            {/* blog area start */}
            {/* -- blog area start -- */}
            <div id="homeblog" className="bd-blog__area section-space">
                <div className="container">
                    <LatestBlogEight />
                </div>
            </div>
            {/* blog area end */}
            {/* contact component */}
            <StartupContactArea />
            {/* contact component end */}
        </>
    );
};

export default StartupBusinessMain;