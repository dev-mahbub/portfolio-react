import React from 'react';
import TestimonialLineShape from '../../../public/assets/images/shape/four-line-shape-1.png';
import TestimonialLineShapeTwo from '../../../public/assets/images/shape/four-line-shape-2.png';
import Image from 'next/image';
import TestimonialStyleFive from '@/elements/testimonial/TestimonialStyleFive';
import BrandSliderThree from '@/elements/brands/BrandSliderThree';

const TestimonialMain = () => {
    return (
        <>
               {/* testimonial area start */}
               <section className="bd-testimonial__area section-space theme-bg-secondary p-relative">
                <div className="testimonial__shape">
                    <Image className="testimonial__shape-three" src={TestimonialLineShape} width={84} height={84}
                        alt="image not found" />
                    <Image className="testimonial__shape-four" src={TestimonialLineShapeTwo} width={85} height={85}
                        alt="image not found" />
                </div>
                <div className="container">
                    <div className="row g-5">
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
            {/* testimonial area end */}
            {/* -- brand area start -- */}
            <div className="brand__area section-space">
                <div className="brand__wrapper style-two wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                    <div className="container">
                        <BrandSliderThree />
                    </div>
                </div>
            </div>
            {/* -- brand area end -- */}
        </>
    );
};

export default TestimonialMain;