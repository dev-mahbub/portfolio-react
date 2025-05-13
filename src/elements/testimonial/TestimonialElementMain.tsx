import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import React from 'react';
import shapeOne from '../../../public/assets/images/shape/four-line-shape-1.png';
import shapeTwo from '../../../public/assets/images/shape/four-line-shape-2.png';
import testimonialBgImg from '../../../public/assets/images/bg/testimonial-bg-01.png';
import TestimonialStyleOne from './TestimonialStyleOne';
import TestimonialStyleTwo from './TestimonialStyleTwo';
import TestimonialStyleThree from './TestimonialStyleThree';
import TestimonialStyleFour from './TestimonialStyleFour';
import Image from 'next/image';
import TestimonialStyleFive from './TestimonialStyleFive';
import TestimonialStyleSix from './TestimonialStyleSix';
import TestimonialStyleSeven from './TestimonialStyleSeven';

const TestimonialElementMain = () => {
    return (
        <>
            <ElementsBreadcrumb elementTitle='Testimonial Style' />
            {/* -- testimonial style 01 start -- */}
            <section className="bd-testimonial__area section-space theme-bg-secondary p-relative z-index-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Testimonial Style 01</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TestimonialStyleOne />
                </div>
            </section>
            {/* -- testimonial style 01 end -- */}
            {/* -- testimonial style 02 start -- */}
            <section className="bd-testimonial__area section-space">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Testimonial Style 02</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TestimonialStyleTwo />
                </div>
            </section>
            {/* -- testimonial style 02 end -- */}
            {/* -- testimonial style 03 start -- */}
            <section className="bd-testimonial__area section-space theme-bg-primary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Testimonial Style 03</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TestimonialStyleThree />
                </div>
            </section>
            {/* -- testimonial style 03 end -- */}
            {/* -- testimonial style 04 start -- */}
            <section className="bd-testimonial__area section-space theme-bg-secondary p-relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Testimonial Style 04</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TestimonialStyleFour />
                </div>
            </section>
            {/* -- testimonial style 04 end -- */}
            {/* -- testimonial style 05 start -- */}
            <section className="bd-testimonial__area section-space p-relative">
                <div className="testimonial__shape">
                    <Image className="testimonial__shape-three"
                        src={shapeOne} width={85} height={85} alt="image not found" />
                    <Image className="testimonial__shape-four"
                        src={shapeTwo} width={85} height={85} alt="image not found" />
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="section__title-wrapper section__title-space text-center">
                                    <div className="elements-section__wrapper elements-line">
                                        <div className="separator__line line-left"></div>
                                        <div className="elements-title__wrapper">
                                            <h4 className="section__title elements__title">Testimonial Style 05</h4>
                                        </div>
                                        <div className="separator__line line-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="section__title-wrapper section__title-space">
                                <span className="section__subtitle bg-field">TESTIMONIALS </span>
                                <h2 className="section__title">Client Experiences and Testimonials</h2>
                            </div>
                        </div>
                    </div>
                    <TestimonialStyleFive />
                </div>
            </section>
            {/* -- testimonial style 05 end -- */}
            {/* -- testimonial style 06 start -- */}
            <section className="bd-testimonial__area section-space theme-bg-primary p-relative z-index-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Testimonial Style 06</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TestimonialStyleSix />
                </div>
            </section>
            {/* -- testimonial style 06 end -- */}
            {/* -- testimonial style 07 start -- */}
            <section className="bd-testimonial__area section-space p-relative style-seven">
                <div className="bg__thumb-position include-bg is-overlay"
                    style={{ backgroundImage: `url(${testimonialBgImg.src})` }}></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Testimonial Style 07</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TestimonialStyleSeven />
                </div>
            </section>
            {/* -- testimonial style 07 end -- */}
        </>
    );
};

export default TestimonialElementMain;