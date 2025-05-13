import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import React from 'react';
import CtaStyleOne from './CtaStyleOne';
import CtaStyleTwo from './CtaStyleTwo';
import CtaStyleThree from './CtaStyleThree';

const CtaElementMain = () => {
    return (
        <>
            <ElementsBreadcrumb elementTitle='Call To Action Style' />
            {/* -- cta-style-1 -- */}
            <div className="cta__area is-cta-margin  fix">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Cta Style 01</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                        <CtaStyleOne />
                    </div>
                </div>
            </div>
            {/* -- cta-style-1 end-- */}
            {/* -- cta-style-2 -- */}
            <div className="container section-space-top">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="section__title-wrapper section__title-space text-center">
                            <div className="elements-section__wrapper elements-line">
                                <div className="separator__line line-left"></div>
                                <div className="elements-title__wrapper">
                                    <h4 className="section__title elements__title">Cta Style 02</h4>
                                </div>
                                <div className="separator__line line-right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CtaStyleTwo />
            {/* -- cta-style-2 end-- */}
            {/* -- cta-style-3 -- */}
            <div className="container section-space">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="section__title-wrapper section__title-space text-center">
                            <div className="elements-section__wrapper elements-line">
                                <div className="separator__line line-left"></div>
                                <div className="elements-title__wrapper">
                                    <h4 className="section__title elements__title">Cta Style 03</h4>
                                </div>
                                <div className="separator__line line-right"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <CtaStyleThree />
            </div>
            {/* -- cta-style-3 -- */}
        </>
    );
};

export default CtaElementMain;