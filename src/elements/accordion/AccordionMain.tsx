import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import React from 'react';
import AcoordionStyleOne from './FaqAreaOne';
import FaqAreaTwo from './FaqAreaTwo';
import FaqAreaThree from './FaqAreaThree';
import FaqAreaFour from './FaqAreaFour';

const AccordionMain = () => {
    return (
        <>
            <ElementsBreadcrumb elementTitle='Accordion Style' />
            {/* -- faq style start -- */}
            <section className="faq__area">
                <div className="container">
                    <div className="row align-items-center justify-content-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Accordion Style 01</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AcoordionStyleOne />
                </div>
            </section>
            {/* -- faq style end -- */}
            {/* -- faq style 2 -- */}
            <section className="faq__area section-space">
                <div className="container">
                    <div className="row justify-content-center justify-content-center wow fadeInUp" data-wow-delay=".5s">
                        <div className="col-lg-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Accordion Style 02</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FaqAreaTwo />
                </div>
            </section>
            {/* -- faq style 2 end-- */}

            {/* -- faq style 3 -- */}
            <section className="faq__area section-space-bottom">
                <div className="container">
                    <div className="row justify-content-center justify-content-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Accordion Style 03</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FaqAreaThree />
                </div>
            </section>
            {/* <!-- faq style 3 end--> */}
            {/* -- faq style 4 -- */}
            <section className="faq__area section-space-bottom faq__style-6 p-relative z-index-1">
                <div className="container">
                    <div className="row justify-content-center justify-content-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Accordion Style 04</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FaqAreaFour />
                </div>
            </section>
            {/* --End faq style 4 -- */}
        </>
    );
};

export default AccordionMain;