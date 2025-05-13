import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import React from 'react';
import CounterStyleThree from './CounterStyleThree';
import CounterStyleOne from './CounterStyleOne';
import CounterStyleTwo from './CounterStyleTwo';
import CounterStyleFour from './CounterStyleFour';

const CounterElementMain = () => {
    return (
        <>
            <ElementsBreadcrumb elementTitle='Counter Style' />
            {/* -- counter style 01 start -- */}
            <section className="bd-counter__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Counter Style 01</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CounterStyleOne />
                </div>
            </section>
            {/* -- counter style 01 end -- */}
            {/* -- counter style 02 start -- */}
            <CounterStyleTwo />
            {/* -- counter style 02 end -- */}
            {/* -- counter style 03 start -- */}
            <section className="bd-counter__area section-space">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Counter Style 03</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CounterStyleThree />
                </div>
            </section>
            {/* -- counter style 03 start -- */}
            {/* -- counter style 04 start -- */}
            <section className="bd-counter__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Counter Style 04</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CounterStyleFour />
                </div>
            </section>
            {/* -- counter style 04 end -- */}
        </>
    );
};

export default CounterElementMain;