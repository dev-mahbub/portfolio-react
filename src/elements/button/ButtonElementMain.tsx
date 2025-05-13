import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import React from 'react';
import ButtonElementOne from './ButtonElementOne';
import ButtonElementTwo from './ButtonElementTwo';
import ButtonCircle from './ButtonCircle';

const ButtonElementMain = () => {
    return (
        <>
            <ElementsBreadcrumb elementTitle='Button Style' />
            {/* -- Elements button style 01 start -- */}
            <section className="element-button section-space-bottom">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-12">
                                <div className="section__title-wrapper section__title-space text-center">
                                    <div className="elements-section__wrapper elements-line">
                                        <div className="separator__line line-left"></div>
                                        <div className="elements-title__wrapper">
                                            <h4 className="section__title elements__title">Buttons Variation</h4>
                                        </div>
                                        <div className="separator__line line-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ButtonElementOne />
                    </div>
                </div>
            </section>
            {/* -- Elements button style 01 end -- */}
            {/* -- Elements button style 02 start -- */}
            <section className="element-button section-space-bottom">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-12">
                                <div className="section__title-wrapper section__title-space text-center">
                                    <div className="elements-section__wrapper elements-line">
                                        <div className="separator__line line-left"></div>
                                        <div className="elements-title__wrapper">
                                            <h4 className="section__title elements__title">Buttons Size</h4>
                                        </div>
                                        <div className="separator__line line-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ButtonElementTwo />
                    </div>
                </div>
            </section>
            {/* -- Elements button style 02 end -- */}
            {/* -- Elements button style 03 start -- */}
            <ButtonCircle />
            {/* -- Elements button style 03 end -- */}
        </>
    );
};

export default ButtonElementMain;