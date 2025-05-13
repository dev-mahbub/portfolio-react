import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import React from 'react';
import FormStyleOne from './FormStyleOne';
import FormStyleTwo from './FormStyleTwo';
import FormStyleThree from './FormStyleThree';
import FormStyleFour from './FormStyleFour';
import FormStyleFive from './FormStyleFive';
import FormStyleSix from './FormStyleSix';

const ElementFormMain = () => {
    return (
        <>
            <ElementsBreadcrumb elementTitle='Form Style' />
            {/* -- Elements form style 01 start -- */}
            <section className="bd-element-button section-space-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Form Style 01</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <FormStyleOne />
                        </div>
                    </div>
                </div>
            </section>
            {/* -- Elements form style 01 end -- */}
            {/* -- Elements form style 02 start -- */}
            <section className="bd-element-button section-space-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="col-12">
                                <div className="section__title-wrapper section__title-space text-center">
                                    <div className="elements-section__wrapper elements-line">
                                        <div className="separator__line line-left"></div>
                                        <div className="elements-title__wrapper">
                                            <h4 className="section__title elements__title">Form Style 02</h4>
                                        </div>
                                        <div className="separator__line line-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FormStyleTwo />
                </div>
            </section>
            {/* -- Elements form style 02 end -- */}
            {/* -- Elements form style 03 start -- */}
            <section className="bd-element-button section-space-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="col-12">
                                <div className="section__title-wrapper section__title-space text-center">
                                    <div className="elements-section__wrapper elements-line">
                                        <div className="separator__line line-left"></div>
                                        <div className="elements-title__wrapper">
                                            <h4 className="section__title elements__title">Form Style 03</h4>
                                        </div>
                                        <div className="separator__line line-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FormStyleThree />
                </div>
            </section>
            {/* -- Elements form style 03 end -- */}
            {/* -- Elements form style 04 start -- */}
            <section className="bd-element-button section-space-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Form Style 04</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FormStyleFour />
                </div>
            </section>
            {/* -- Elements form style 04 end -- */}
            {/* -- Elements form style 05 start -- */}
            <section className="bd-element-button section-space-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Form Style 05</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FormStyleFive />
                </div>
            </section>
            {/* -- Elements form style 05 end -- */}
            {/* -- Elements form style 06 start -- */}
            <section className="bd-element-button section-space-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Form Style 06</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FormStyleSix />
                </div>
            </section>
            {/* -- Elements form style 06 end -- */}
        </>
    );
};

export default ElementFormMain;