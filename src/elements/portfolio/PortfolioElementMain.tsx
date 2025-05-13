import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import React from 'react';
import PortfolioStyleOne from './PortfolioStyleOne';
import PortfolioStyleTwo from './PortfolioStyleTwo';
import PorttfolioStyleThree from './PorttfolioStyleThree';
import PortfolioStyleFour from './PortfolioStyleFour';
import PortfolioStyleFive from './PortfolioStyleFive';
import PortfolioStyleSix from './PortfolioStyleSix';
import dynamic from 'next/dynamic';
const PortfolioStyleSeven = dynamic(() => import('./PortfolioStyleSeven'), {
    ssr: false
})
const PortfolioElementMain = () => {
    return (
        <>
            <ElementsBreadcrumb elementTitle='Portfolio Style' />
            {/* -- portfolio style 01 start -- */}
            <section className="bd-portfolio__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Portfolio Style 01</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PortfolioStyleOne />
                </div>
            </section>
            {/* -- portfolio style 01 end -- */}

            {/* -- portfolio style 02 start -- */}
            <section className="bd-portfolio__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Portfolio Style 02</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PortfolioStyleTwo />
                </div>
            </section>
            {/* -- portfolio style 02 end -- */}
            {/* -- portfolio style 03 start -- */}
            <section className="bd-portfolio__area section-space fix theme-bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Portfolio Style 03</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PorttfolioStyleThree />
                </div>
            </section>
            {/* -- portfolio style 03 end -- */}
            {/* -- portfolio style 04 start -- */}
            <section className="bd-portfolio__area section-space fix portfolio-four-style">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Portfolio Style 04</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PortfolioStyleFour />
                </div>
            </section>
            {/* -- portfolio style 04 end -- */}
            {/* -- portfolio style 05 start -- */}
            <section className="bd-portfolio__area section-space">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Portfolio Style 05</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PortfolioStyleFive />
                </div>
            </section>
            {/* -- portfolio style 05 start -- */}
            {/* -- portfolio style 06 start -- */}
            <section className="bd-portfolio__area section-space fix portfolio-four-style">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Portfolio Style 06</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PortfolioStyleSix />
                </div>
            </section>
            {/* -- portfolio style 06 start -- */}
            {/* -- portfolio style 07 start -- */}
            <section className="bd__portfolio-area section-space">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Portfolio Style 07</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PortfolioStyleSeven />
                </div>
            </section>
            {/* -- portfolio style 07 start -- */}
        </>
    );
};

export default PortfolioElementMain;