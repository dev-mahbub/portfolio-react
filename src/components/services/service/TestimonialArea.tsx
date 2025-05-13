import Image from 'next/image';
import React from 'react';
import shapeOne from '../../../../public/assets/images/shape/four-line-shape-1.png';
import shapeTwo from '../../../../public/assets/images/shape/four-line-shape-2.png';
import TestimonialStyleFive from '@/elements/testimonial/TestimonialStyleFive';

const TestimonialArea = () => {
    return (
        <>
            {/* -- testimonial area start -- */}
            <section className="bd-testimonial__area section-space theme-bg-secondary p-relative">
                <div className="testimonial__shape">
                    <Image className="testimonial__shape-three"
                        src={shapeOne} width={85} height={85} alt="image not found" />
                    <Image className="testimonial__shape-four"
                        src={shapeTwo} width={85} height={85} alt="image not found" />
                </div>
                <div className="container">
                    <div className="row g-5 justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="section__title-wrapper section__title-space text-center">
                                <span className="section__subtitle bg-field">TESTIMONIALS </span>
                                <h2 className="section__title">What Our Client Say About Us</h2>
                            </div>
                        </div>
                    </div>
                    <TestimonialStyleFive />
                </div>
            </section>
        </>
    );
};

export default TestimonialArea;