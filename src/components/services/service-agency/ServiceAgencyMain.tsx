import BreadcrumbOne from '@/elements/breadcrumb/BreadcrumbOne';
import breadcrumbBg from '../../../../public/assets/images/breadcrumb/breadcrumb-bg-02.png';
import React from 'react';
import ServiceElementEight from '@/elements/services/ServiceElementEight';
import AboutStyleSix from '@/elements/about/AboutStyleSix';
import TestimonialStyleFour from '@/elements/testimonial/TestimonialStyleFour';
import BrandSliderThree from '@/elements/brands/BrandSliderThree';
import CtaStyleOne from '@/elements/cta/CtaStyleOne';

const ServiceAgencyMain = () => {
    return (
        <>
            {/* bradcrumb area start */}
            <BreadcrumbOne title="The Service We Provide is Only For Your Needs" subTitle='SERVICE AGENCY' breadcrumbImg={breadcrumbBg}
                rowWrapperClass='col-xxl-7 col-xl-8 col-lg-8' menuItem='menu-item' />
            {/* bradcrumb area start */}
            {/* -- Service area start -- */}
            <section className="bd-service__area section-space theme-bg-secondary">
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
            {/* -- about area start -- */}
            <section className="bd-about__area section-space">
                <div className="container">
                    <AboutStyleSix />
                </div>
            </section>
            {/* -- about area end -- */}
            {/* -- testimonial area start -- */}
            <section className="bd-testimonial__area section-space theme-bg-secondary p-relative">
                <div className="container">
                    <TestimonialStyleFour />
                </div>
            </section>
            {/* -- testimonial area end -- */}
            {/* -- brand area start -- */}
            <div className="brand__area section-space">
                <div className="brand__wrapper style-two wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                    <div className="container">
                        <BrandSliderThree />
                    </div>
                </div>
            </div>
            {/* -- brand area end -- */}
            {/* cta area start */}
            <div className="cta__area is-cta-margin fix">
                <div className="container">
                    <CtaStyleOne borderClassWrapper="bg-field" />
                </div>
            </div>
            {/* cta area end */}
        </>
    );
};

export default ServiceAgencyMain;