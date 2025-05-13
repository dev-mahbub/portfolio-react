import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import React from 'react';
import BrandSliderOne from './BrandSliderOne';
import BrandSliderTwo from './BrandSliderTwo';
import BrandSliderThree from './BrandSliderThree';

const BrandElementMain = () => {
    return (
        <>
            <ElementsBreadcrumb elementTitle='Brand Style' />
            {/* -- brand style 01 start -- */}
            <div className="brand__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Brand Style 01</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BrandSliderOne />
                </div>
            </div>
            {/* -- brand style 01 end -- */}
            {/* -- brand style 02 start -- */}
            <section className="bd-brand__area section-space x-clip theme-bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Brand Style 02</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BrandSliderTwo />
            </section>
            {/* -- brand style 02 end -- */}
            {/* -- brand style 03 start -- */}
            <div className="brand__area section-space">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Brand Style 03</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brand__wrapper style-two wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                    <div className="container">
                        <BrandSliderThree />
                    </div>
                </div>
            </div>
            {/* -- brand style 03 end -- */}
        </>
    );
};

export default BrandElementMain;