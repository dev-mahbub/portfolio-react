import BreadcrumbOne from '@/elements/breadcrumb/BreadcrumbOne';
import React from 'react';
import breadcrumbBg from '../../../../public/assets/images/breadcrumb/breadcrumb-bg-02.png';
import aboutImg from '../../../../public/assets/images/shape/lamp-shape.png';
import ServiceStyleThree from '@/elements/services/ServiceStyleThree';
import Image from 'next/image';
import AboutStyleFour from '@/elements/about/AboutStyleFour';
import PortfolioStyleFour from '@/elements/portfolio/PortfolioStyleFour';
import TestimonialArea from './TestimonialArea';

const ServicePageMain = () => {
    return (
        <>
            {/* bradcrumb area start */}
            <BreadcrumbOne title="We Provide a Long Range of Services" subTitle='SERVICE CREATIVE' breadcrumbImg={breadcrumbBg} rowWrapperClass='col-xl-6 col-lg-8 col-md-9' menuItem='Service' menuItemUrl='/service' />
            {/* bradcrumb area start */}
            {/* -- service area start -- */}
            <section className="bd-service__area section-space">
                <div className="container">
                    <ServiceStyleThree />
                </div>
            </section>
            {/* -- service area end -- */}
            {/* -- about area start -- */}
            <section className="bd-about__area section-space theme-bg-secondary p-relative">
                <div className="about__shape">
                    <Image className="about__shape-two" src={aboutImg} style={{ width: "auto", height: "auto" }} alt="image not found" />
                </div>
                <div className="container">
                    <AboutStyleFour />
                </div>
            </section>
            {/* -- about area end -- */}
            {/* -- portfolio area start -- */}
            <section className="bd-portfolio__area section-space fix">
                <div className="container">
                    <PortfolioStyleFour />
                </div>
            </section>
            {/* -- portfolio area end -- */}
            {/* testimonial component */}
            <TestimonialArea />
            {/* testimonial component end*/}
        </>
    );
};

export default ServicePageMain;