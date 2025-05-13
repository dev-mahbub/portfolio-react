import React from 'react';
import CorporateBusinessBanner from './CorporateBusinessBanner';
import ServiceStyleSeven from '@/elements/services/ServiceStyleSeven';
import AboutStyleSeven from '@/elements/about/AboutStyleSeven';
import counterBgImg from '../../../../public/assets/images/counter/bg/counter-bg-02.png';
import CounterStyleFour from '@/elements/counter/CounterStyleFour';
import TeamStyleFive from '@/elements/team/TeamStyleFive';
import CorporateBusinessVideoArea from './CorporateBusinessVideoArea';
import CorporateBusinessBrandArea from './CorporateBusinessBrandArea';
import PricingStyleTwo from '@/elements/pricing/PricingStyleTwo';
import LatestBlogSeven from '@/elements/blogs/LatestBlogSeven';
import CtaStyleTwo from '@/elements/cta/CtaStyleTwo';
import AwardStyleOne from '@/elements/award/AwardStyleOne';

const CorporateBusinessMain = () => {
    return (
        <>
            {/* banner component */}
            <CorporateBusinessBanner />
            {/* banner component ends */}
            {/* -- service area start -- */}
            <section id="homeservices" className="bd-service__area section-space">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle bg-field">MY SERVICE</span>
                                <h2 className="section__title mb-20">Professional Services</h2>
                                <p className="section__paragraph is-br-none">Begin with a brief introduction or summary that
                                    <br /> highlights who you are and what
                                </p>
                            </div>
                        </div>
                    </div>
                    <ServiceStyleSeven />
                </div>
            </section>
            {/* service area end */}
            {/* about area start */}
            <section id="homeabout" className="bd-about__area section-space theme-bg-secondary">
                <div className="container">
                    <AboutStyleSeven />
                </div>
            </section>
            {/* about area end */}
            {/* -- counter area start -- */}
            <section className="bd-counter__area section-space counter-space p-relative">
                <div className="counter__bg include-bg is-bg-none" style={{ backgroundImage: `url(${counterBgImg.src})` }}>
                </div>
                <div className="container">
                    <CounterStyleFour />
                </div>
            </section>
            {/* counter area end */}
            {/* -- team area start -- */}
            <section className="bd-team__area section-space">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle bg-field">OUR TEAM</span>
                                <h2 className="section__title mb-20">Management Group</h2>
                                <p className="section__paragraph is-br-none">We maintain an open, inclusive, and collaborative
                                    <br /> environment where ideas flow freely.
                                </p>
                            </div>
                        </div>
                    </div>
                    <TeamStyleFive />
                </div>
            </section>
            {/* -- team area end -- */}
            {/* brand area start */}
            <CorporateBusinessBrandArea />
            {/* brand area end */}
            {/* video area start */}
            <CorporateBusinessVideoArea />
            {/* video area end */}
            {/* -- pricing area start -- */}
            <div className="bd-pricing__area section-space">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-8 col-sm-10">
                            <div className="section__title-wrapper section__title-space">
                                <span className="section__subtitle bg-field">Expense Plan</span>
                                <h2 className="section__title mb-20">Pricing Strategy</h2>
                                <p className="Many different iterations of Lorem Ipsum passages are accessible, but most havebeen adjusted.">
                                    Many different iterations of Lorem Ipsum passages are accessible, but most havebeen
                                    adjusted.Text</p>
                            </div>
                        </div>
                    </div>
                    <PricingStyleTwo />
                </div>
            </div>
            {/* pricing area end */}
            {/* award area start */}
            <section id="homeworks" className="bd-award__area section-space theme-bg-secondary">
                <div className="container">
                    <AwardStyleOne />
                </div>
            </section>
            {/* award area end */}
            {/* -- blog area start -- */}
            <div id="homeblog" className="bd-blog__area section-space">
                <div className="container">
                    <LatestBlogSeven />
                </div>
            </div>
            {/* -- blog area end -- */}
            {/* cta component */}
            <CtaStyleTwo ctaBorderClass="bg-field" />
        </>
    );
};

export default CorporateBusinessMain;