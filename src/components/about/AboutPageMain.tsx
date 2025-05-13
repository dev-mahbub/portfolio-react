import BreadcrumbOne from '@/elements/breadcrumb/BreadcrumbOne';
import breadcrumbBg from '../../../public/assets/images/breadcrumb/breadcrumb-bg-01.png';
import React from 'react';
import AboutOurVisionArea from './AboutOurVisionArea';
import AboutPortfolioSlider from './AboutPortfolioSlider';
import AboutStyleSeven from '@/elements/about/AboutStyleSeven';
import AboutServiceArea from './AboutServiceArea';
import TeamStyleFive from '@/elements/team/TeamStyleFive';
import BrandSliderThree from '@/elements/brands/BrandSliderThree';
import AwardStyleTwo from '@/elements/award/AwardStyleTwo';

const AboutPageMain = () => {
    return (
        <>
            {/* bradcrumb area start */}
            <BreadcrumbOne title="We Create Top-Class Digital Product" subTitle='About Us' breadcrumbImg={breadcrumbBg} rowWrapperClass='col-xxl-6 col-xl-8 col-lg-8' />
            {/* bradcrumb area start */}
            {/*--Our vision area start--*/}
            <AboutOurVisionArea />
            {/*--Our vision area end--*/}
            {/* portfolio area start */}
            <AboutPortfolioSlider />
            {/* portfolio area end */}
            {/* about area start */}
            <section id="homeabout" className="bd-about__area section-space theme-bg-secondary">
                <div className="container">
                    <AboutStyleSeven />
                </div>
            </section>
            {/* about area end */}
            {/* service area start */}
            <AboutServiceArea />
            {/* service area end */}
            {/* award area start */}
            <section className="bd-award__area section-space-bottom">
                <div className="container">
                    <AwardStyleTwo />
                </div>
            </section>
            {/* award area end */}
            {/* -- team area start -- */}
            <section className="bd-team__area section-space-bottom">
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

export default AboutPageMain;