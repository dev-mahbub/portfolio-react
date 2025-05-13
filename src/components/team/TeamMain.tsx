import BreadcrumbTwo from '@/elements/breadcrumb/BreadcrumbTwo';
import TeamStyleOne from '@/elements/team/TeamStyleOne';
import React from 'react';
import JobPlacementSection from './JobPlacementSection';
import testimonialBg from '../../../public/assets/images/bg/testimonial-bg-01.png';
import TestimonialStyleSeven from '@/elements/testimonial/TestimonialStyleSeven';

const TeamMain = () => {
    return (
        <>
            {/* bradcrumb component */}
            <BreadcrumbTwo title='Our Best Talented Team Members' subTitle='TEAM' rowWrapperClass='col-xxl-5 col-xl-6 col-lg-8 col-md-8' />
            {/* bradcrumb component */}
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
            {/* -- team area start -- */}
            {/* job placement area start */}
            <JobPlacementSection />
            {/* job placement area end */}
            {/* -- testimonial area start -- */}
            <section className="bd-testimonial__area section-space p-relative style-seven">
                <div className="bg__thumb-position include-bg is-overlay"
                    style={{ backgroundImage: `url(${testimonialBg.src})` }}></div>
                <div className="container">
                    <TestimonialStyleSeven />
                </div>
            </section>
            {/* -- testimonial area end -- */}
        </>
    );
};

export default TeamMain;