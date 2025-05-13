import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import React from 'react';
import ProgressbarStyleOne from './ProgressbarStyleOne';
import ProgressbarStyleTwo from './ProgressbarStyleTwo';

const ProgressbarElementMain = () => {
    return (
        <>
            <ElementsBreadcrumb elementTitle='Progressbar Style' />
            {/* -- progress style 01 start -- */}
            <section className="bd-counter__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Progressbar Style 01</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProgressbarStyleOne />
                </div>
            </section>
            {/* -- progress style 01 end -- */}
            {/* -- progress style 02 start -- */}
            <section className="bd-counter__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Progressbar Style 02</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProgressbarStyleTwo />
                </div>
            </section>
            {/* -- progress style 02 end -- */}
        </>
    );
};

export default ProgressbarElementMain;