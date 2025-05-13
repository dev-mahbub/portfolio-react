import BreadcrumbOne from '@/elements/breadcrumb/BreadcrumbOne';
import breadcrumbBg from '../../../../public/assets/images/breadcrumb/breadcrumb-bg-02.png';
import shapeOne from '../../../../public/assets/images/shape/four-line-shape-1.png';
import shapeTwo from '../../../../public/assets/images/shape/four-line-shape-2.png';
import React from 'react';
import ServiceDetailsArea from './ServiceDetailsArea';
import Image from 'next/image';
import TestimonialStyleFive from '@/elements/testimonial/TestimonialStyleFive';

const ServiceDetailsMain = ({ id }: { id: number }) => {
    return (
        <>
            {/* bradcrumb area start */}
            <BreadcrumbOne title="Services Details" subTitle='SERVICE DETAILS' breadcrumbImg={breadcrumbBg}
                rowWrapperClass='col-xxl-7 col-xl-7 col-lg-8' menuItem='menu-item' />
            {/* bradcrumb area start */}
            {/* service area start */}
            <ServiceDetailsArea id={id} />
            {/* service area end */}
            {/* -- testimonial area start -- */}
            <section className="bd-testimonial__area section-space theme-bg-secondary p-relative">
                <div className="testimonial__shape">
                    <Image className="testimonial__shape-three"
                        src={shapeOne} width={85} height={85} alt="image not found" />
                    <Image className="testimonial__shape-four"
                        src={shapeTwo} width={85} height={85} alt="image not found" />
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
            {/* -- testimonial area end -- */}
        </>
    );
};

export default ServiceDetailsMain;