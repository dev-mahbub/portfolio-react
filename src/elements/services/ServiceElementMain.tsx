import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import React from 'react';
import ServiceStyleOne from './ServiceStyleOne';
import ServiceStyleTwo from './ServiceStyleTwo';
import Link from 'next/link';
import ServiceStyleThree from './ServiceStyleThree';
import ServiceStyleFour from './ServiceStyleFour';
import ServiceStyleFive from './ServiceStyleFive';
import ServiceStyleSix from './ServiceStyleSix';
import ServiceStyleSeven from './ServiceStyleSeven';
import ServiceElementEight from './ServiceElementEight';

const ServiceElementMain = () => {
    return (
        <>
            <ElementsBreadcrumb elementTitle='Service Style' />
            {/* -- service style 01 start -- */}
            <section className="bd-service__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Services Style 01</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ServiceStyleOne />
                </div>
            </section>
            {/* -- service style 01 end -- */}
            {/* -- service style 02 start -- */}
            <section className="bd-service__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Service Style 02</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ServiceStyleTwo />
                </div>
            </section>
            {/* -- service style 02 end -- */}
            {/* -- service style 03 start -- */}
            <section className="bd-service__area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Service Style 03</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ServiceStyleThree />
                </div>
            </section>
            {/* -- service style 03 end -- */}
            {/* -- service style 04 start -- */}
            <section className="bd-service__area section-space">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Service Style 04</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ServiceStyleFour />
                </div>
            </section>
            {/* -- service style 04 end -- */}
            {/* -- service style 05 start -- */}
            <section className="bd-service__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Service Style 05</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ServiceStyleFive />
                </div>
            </section>
            {/* -- service style 05 end -- */}
            {/* -- service style 06 start -- */}
            <section className="bd-service__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Service Style 06</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ServiceStyleSix />
                </div>
            </section>
            {/* -- service style 06 end -- */}
            {/* -- service style 07 start -- */}
            <section className="bd-service__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Service Style 07</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ServiceStyleSeven />
                </div>
            </section>
            {/* -- service style 07 end -- */}
            {/* -- service style 08 start -- */}
            <section className="bd-service__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Service Style 08</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ServiceElementEight />
                </div>
            </section>
            {/* -- service style 08 end -- */}
        </>
    );
};

export default ServiceElementMain;