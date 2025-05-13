import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import React from 'react';
import FooterStyleOne from './FooterStyleOne';
import FooterStyleTwo from './FooterStyleTwo';
import FooterStyleThree from './FooterStyleThree';
import FooterStyleFour from './FooterStyleFour';
import FooterStyleFive from './FooterStyleFive';

const FooterElementMain = () => {
    return (
        <>
            <ElementsBreadcrumb elementTitle='Footer Style' />
            <div className="element__footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Footer Style 01</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -- Footer area 01 start -- */}
            <FooterStyleOne />
            {/* -- Footer area 01 end -- */}
            <FooterStyleThree />
            {/* -- Footer area 02 end -- */}
            {/* -- Footer area 03 start -- */}
            <div className="element__footer-area section-space-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Footer Style 03</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterStyleTwo />
            {/* -- Footer area 03 end -- */}
            {/* -- Footer area 04 start -- */}
            <div className="element__footer-area section-space-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Footer Style 04</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterStyleFour />
            {/* -- Footer area 04 end -- */}
            {/* -- Footer area 05 start -- */}
            <div className="element__footer-area section-space-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Footer Style 05</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterStyleFive />
            {/* -- Footer area 05 end -- */}

        </>
    );
};

export default FooterElementMain;