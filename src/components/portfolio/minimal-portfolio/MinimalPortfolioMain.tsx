import React from 'react';
import MinimalPortfolioBanner from './MinimalPortfolioBanner';
import ServiceStyleTwo from '@/elements/services/ServiceStyleTwo';
import AboutStyleTwo from '@/elements/about/AboutStyleTwo';
import BrandSliderTwo from '@/elements/brands/BrandSliderTwo';
import PortfolioStyleTwo from '@/elements/portfolio/PortfolioStyleTwo';
import TestimonialStyleTwo from '@/elements/testimonial/TestimonialStyleTwo';
import LatestBlogTwo from '@/elements/blogs/LatestBlogTwo';
import MinimalContactForm from './MinimalContactForm';

const MinimalPortfolioMain = () => {
    return (
        <>
            <MinimalPortfolioBanner />
                 {/* -- About area start -- */}
                 <section id="homeabout" className="bd-about__area section-space">
                <div className="container">
                    <AboutStyleTwo />
                </div>
            </section>
            {/* About area end */}
            {/* -- Service area start -- */}
            <section id="homeservices" className="bd-service__area theme-bg-secondary section-space">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle bg-field">MY SERVICE</span>
                                <h2 className="section__title mb-20">Professional Services</h2>
                                <p className="section__paragraph is-br-none">Begin with a brief introduction or summary that
                                    <br /> highlights who you are and what</p>
                            </div>
                        </div>
                    </div>
                    <ServiceStyleTwo />
                </div>
            </section>
            {/* -- Service area end -- */}
            {/* -- Brand area start -- */}
            <div className="bd-brand__area section-space x-clip theme-bg-secondary">
                <BrandSliderTwo />
            </div>
            {/* -- Brand area end -- */}
            {/* -- Portfolio area start -- */}
            <section id="homeworks" className="bd-portfolio__area section-space">
                <div className="container">
                    <PortfolioStyleTwo />
                </div>
            </section>
            {/* -- Portfolio area start -- */}
            {/* -- Section divider -- */}
            <div className="section__divider">
                <hr />
            </div>
            {/* -- Testimonial area start -- */}
            <section className="bd-testimonial__area section-space">
                <div className="container">
                    <TestimonialStyleTwo />
                </div>
            </section>
            {/* -- Testimonial area end -- */}
            {/* -- Section divider -- */}
            <div className="section__divider">
                <hr />
            </div>
            {/* -- Blog area start -- */}
            <div id="homeblog" className="bd-blog__area section-space">
                <div className="container">
                    <LatestBlogTwo />
                </div>
            </div>
            {/* -- Blog area end -- */}
            {/* -- Contact area start -- */}
            <MinimalContactForm />
            {/* -- Contact area end -- */}
        </>
    );
};

export default MinimalPortfolioMain;