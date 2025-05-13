import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import React from 'react';
import AboutStyleOne from './AboutStyleOne';
import AboutStyleTwo from './AboutStyleTwo';
import AboutStyleThree from './AboutStyleThree';
import AboutStyleFour from './AboutStyleFour';
import LampShape from '../../../public/assets/images/shape/lamp-shape.png';
import Image from 'next/image';
import AboutStyleFive from './AboutStyleFive';
import Link from 'next/link';
import AboutStyleSix from './AboutStyleSix';
import AboutStyleSeven from './AboutStyleSeven';
import AboutStyleEight from './AboutStyleEight';

const AboutElementMain = () => {
    return (
        <>
            <ElementsBreadcrumb elementTitle='About Style' />
            {/* -- about style 01 start -- */}
            <section className="bd-about__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">About Style 01</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AboutStyleOne />
                </div>
            </section>
            {/* -- about style 01 end -- */}
            {/* -- about style 02 start -- */}
            <section className="bd-about__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">About Style 02</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AboutStyleTwo />
                </div>
            </section>
            {/* -- about style 02 end -- */}
            {/* -- about style 03 start -- */}
            <section className="bd-about__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">About Style 03</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AboutStyleThree />
                </div>
            </section>
            {/* -- about style 03 end -- */}
            {/* -- about style 04 start -- */}
            <section className="bd-about__area section-space p-relative theme-bg-secondary">
                <div className="about__shape">
                    <Image className="about__shape-two" src={LampShape} width={253} height={491}
                        alt="image not found" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">About Style 04</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AboutStyleFour />
                </div>
            </section>
            {/* -- about style 04 end -- */}
            {/* -- about style 05 start -- */}
            <section className="bd-about__area section-space">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">About Style 05</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AboutStyleFive />
                </div>
            </section>
            {/* -- about style 05 end -- */}
            {/* -- about style 06 start -- */}
            <section className="bd-about__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">About Style 06</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AboutStyleSix />
                </div>
            </section>
            {/* -- about style 06 end -- */}
            {/* -- about style 07 start -- */}
            <section className="bd-about__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">About Style 07</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AboutStyleSeven />
                </div>
            </section>
            {/* -- about style 07 end -- */}
            {/* -- about style 08 start -- */}
            <section className="bd-about__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">About Style 08</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AboutStyleEight />
                </div>
            </section>
            {/* -- about style 08 end -- */}
        </>
    );
};

export default AboutElementMain;