import React from 'react';
import DigitalAgencyBannerArea from './DigitalAgencyBannerArea';
import Image from 'next/image';
import aboutShapeOne from '../../../../public/assets/images/shape/four-line-shape-1.png';
import aboutShapeTwo from '../../../../public/assets/images/shape/four-line-shape-2.png';
import AboutStyleFive from '@/elements/about/AboutStyleFive';
import ServiceStyleFive from '@/elements/services/ServiceStyleFive';
import PortfolioStyleFive from '@/elements/portfolio/PortfolioStyleFive';
import DigitalCounterArea from './DigitalCounterArea';
import TeamStyleThree from '@/elements/team/TeamStyleThree';
import DigitalAgencyTestimonialArea from './DigitalAgencyTestimonialArea';
import LatestBLogFive from '@/elements/blogs/LatestBLogFive';
import CtaStyleThree from '@/elements/cta/CtaStyleThree';

const DigitalAgencyPortfolioMain = () => {
    return (
        <>
            {/* Banner Component */}
            <DigitalAgencyBannerArea />
            {/* Banner Component end*/}
            {/* About area start */}
            <section id="homeabout" className="bd-about__area section-space p-relative">
                <div className="about__shape">
                    <Image className="about__shape-three" src={aboutShapeOne} width={84} height={84} alt="image not found" />
                    <Image className="about__shape-four" src={aboutShapeTwo} width={85} height={85} alt="image not found" />
                </div>
                <div className="container">
                    <AboutStyleFive />
                </div>
            </section>
            {/* About area end */}
            {/* -- service area start -- */}
            <section id="homeservices" className="bd-service__area section-space theme-bg-secondary z-index-1 p-relative">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle bg-field">MY SERVICE</span>
                                <h2 className="section__title mb-20">Professional Services</h2>
                                <p className="section__paragraph is-br-none">Begin with a brief introduction or summary that
                                    <br /> highlights who you are and what</p>
                            </div>
                        </div>
                    </div>
                    <ServiceStyleFive />
                </div>
            </section>
            {/* -- service area end -- */}
            {/* -- portfolio area start -- */}
            <section id="homeworks" className="bd-portfolio__area section-space">
                <div className="container">
                    <PortfolioStyleFive />
                </div>
            </section>
            {/* -- portfolio area end -- */}
            {/* Counter Compoent */}
            <DigitalCounterArea />
            {/* Counter Compoent end */}
            {/* -- team area start -- */}
            <section className="bd-team__area section-space">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-7 col-sm-10">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle bg-field">OUR TEAM</span>
                                <h2 className="section__title mb-20">Our Most Talented Member</h2>
                                <p className="section__paragraph is-br-none">We maintain an open, inclusive, and collaborative
                                    <br /> environment where ideas flow freely.</p>
                            </div>
                        </div>
                    </div>
                    <TeamStyleThree />
                </div>
            </section>
            {/* -- team area end -- */}
            {/* -- testimonial component start  -- */}
            <DigitalAgencyTestimonialArea />
            {/* -- testimonial component end -- */}
            {/* -- blog area start -- */}
            <div id="homeblog" className="bd-blog__area section-space">
                <div className="container">
                    <LatestBLogFive />
                </div>
            </div>
            {/* -- blog area end -- */}
            {/* -- cta component start -- */}
            <CtaStyleThree />
            {/* -- cta component end -- */}

        </>
    );
};

export default DigitalAgencyPortfolioMain;