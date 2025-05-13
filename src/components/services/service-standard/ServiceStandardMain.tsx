import BreadcrumbOne from '@/elements/breadcrumb/BreadcrumbOne';
import React from 'react';
import breadcrumbBg from '../../../../public/assets/images/breadcrumb/breadcrumb-bg-02.png';
import ServiceStyleFive from '@/elements/services/ServiceStyleFive';
import StandardSkillArea from './StandardSkillArea';
import PortfolioStyleFive from '@/elements/portfolio/PortfolioStyleFive';
import CtaStyleOne from '@/elements/cta/CtaStyleOne';

const ServiceStandardMain = () => {
    return (
        <>
            {/* bradcrumb area start */}
            <BreadcrumbOne title="Easy Solutions for Your Business" subTitle='SERVICE STANDARD' breadcrumbImg={breadcrumbBg}
                rowWrapperClass='col-xxl-5 col-xl-6 col-lg-8 col-md-8' menuItem='Service' menuItemUrl='/service' justifyNotCenter='justify-start' textNotCenter='text-start' />
            {/* bradcrumb area start */}
            {/* -- service area start -- */}
            <section className="bd-service__area section-space p-relative">
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
            {/* skill area start */}
            <StandardSkillArea />
            {/* skill area end */}
            {/* -- portfolio area start -- */}
            <section className="bd-portfolio__area section-space">
                <div className="container">
                    <PortfolioStyleFive />
                </div>
            </section>
            {/* -- portfolio area end -- */}
            {/* -- cta area start -- */}
            <div className="cta__area is-cta-margin fix">
                <div className="container">
                    <CtaStyleOne />
                </div>
            </div>
            {/* -- cta area end -- */}
        </>
    );
};

export default ServiceStandardMain;