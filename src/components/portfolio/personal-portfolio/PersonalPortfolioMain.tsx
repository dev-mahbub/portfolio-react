import React from 'react';
import ContactAreaOne from './ContactAreaOne';
import AboutStyleOne from '@/elements/about/AboutStyleOne';
import PortfolioStyleOne from '@/elements/portfolio/PortfolioStyleOne';
import PerSonalPortFolioBanner from './PersonalBannerArea';
import ServiceStyleOne from '@/elements/services/ServiceStyleOne';
import ServiceShape from '../../../../public/assets/images/service/shape/service-shape-01.png';
import Image from 'next/image';
import PricingStyleOne from '@/elements/pricing/PricingStyleOne';
import TestimonialStyleOne from '@/elements/testimonial/TestimonialStyleOne';
import LatestBlogOne from '@/elements/blogs/LatestBlogOne';
import CounterStyleOne from '@/elements/counter/CounterStyleOne';
import dynamic from 'next/dynamic';
const QualificationArea = dynamic(() => import('./QualificationArea'), {
    ssr: false
})

const PersonalPortfolioMain = () => {
    return (
        <>
            {/* Banner Component */}
            <PerSonalPortFolioBanner />
            {/* Banner Component end*/}
            {/* Breadcrumb component */}
            <AboutStyleOne wrapperClass="section-space theme-bg-secondary" />
            {/* Breadcrumb component end*/}
            {/* Service Area start */}
            <section id="homeservices" className="bd-service__area section-space p-relative fix">
                <div className="service__shape-wrapper">
                    <Image className="service__shape" src={ServiceShape} width={343} height={343} alt="image not found" />
                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle">MY SERVICE</span>
                                <h2 className="section__title mb-20">Professional Services</h2>
                                <p className="section__paragraph is-br-none">Begin with a brief introduction or summary that
                                    <br /> highlights who you are and what</p>
                            </div>
                        </div>
                    </div>
                    <ServiceStyleOne />
                </div>
            </section>
            {/* Service Area end */}
            {/* -- Section divider -- */}
            <div className="section__divider">
                <hr />
            </div>
            {/* Portfolio Component */}
            <section id="homeworks" className="bd-portfolio__area section-space">
                <div className="container">
                    <PortfolioStyleOne />
                </div>
            </section>
            {/* Portfolio Component end */}
            {/* Qualification Component */}
            <QualificationArea />
            {/* Qualification Component end*/}
            {/* Counter Area start */}
            <section className="bd-counter__area section-space theme-bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section__title-wrapper section__title-space">
                                <span className="section__subtitle">Design experience</span>
                                <h2 className="section__title">Design Skills</h2>
                            </div>
                        </div>
                    </div>
                    <CounterStyleOne />
                </div>
            </section>
            {/* Counter Area end */}
            {/* Pricing Area start */}
            <div className="bd-pricing__area section-space">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle">Costing</span>
                                <h2 className="section__title mb-20">Make a Best Plan</h2>
                            </div>
                        </div>
                    </div>
                    <PricingStyleOne />
                </div>
            </div>
            {/* Pricing Area end */}
            {/* -- testimonial area start -- */}
            <section className="bd-testimonial__area section-space theme-bg-secondary p-relative z-index-1">
                <div className="container">
                    <div className="row align-items-center g-5 wow fadeInUp" data-wow-delay=".3s">
                        <TestimonialStyleOne />
                    </div>
                </div>
            </section>
            {/* -- testimonial area end -- */}
            {/* -- testimonial area start -- */}
            <div id="homeblog" className="bd-blog__area section-space">
                <div className="container">
                    <LatestBlogOne />
                </div>
            </div>
            {/* -- testimonial area end -- */}
            {/* Contact Component */}
            <ContactAreaOne />
            {/* Contact Component */}
        </>
    );
};

export default PersonalPortfolioMain;