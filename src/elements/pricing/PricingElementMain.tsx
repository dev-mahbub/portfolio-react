import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import React from 'react';
import PricingStyleOne from './PricingStyleOne';
import PricingStyleTwo from './PricingStyleTwo';
import PricingStyleThree from './PricingStyleThree';

const PricingElementMain = () => {
    return (
        <>
            <ElementsBreadcrumb elementTitle='Pricing Style' />
            {/* -- pricing style 01 start -- */}
            <section className="bd-pricing__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Pricing Style 01</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PricingStyleOne />
                </div>
            </section>
            {/* -- pricing style 01 end -- */}
            {/* -- pricing style 02 start -- */}
            <section className="bd-pricing__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Pricing Style 02</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PricingStyleTwo />
                </div>
            </section>
            {/* -- pricing style 02 end --  */}

            {/* -- pricing style 03 start -- */}
            <section className="bd-pricing__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Pricing Style 03</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PricingStyleThree />
                </div>
            </section>
            {/* -- pricing style 03 end -- */}
        </>
    );
};

export default PricingElementMain;