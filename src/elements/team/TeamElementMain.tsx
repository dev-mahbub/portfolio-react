import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import React from 'react';
import TeamStyleOne from './TeamStyleOne';
import TeamStyleTwo from './TeamStyleTwo';
import TeamStyleThree from './TeamStyleThree';
import TeamStyleFour from './TeamStyleFour';
import TeamStyleFive from './TeamStyleFive';

const TeamElementMain = () => {
    return (
        <>
            <ElementsBreadcrumb elementTitle='Team Style' />
            {/* -- team style 01 start -- */}
            <section className="bd-team__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Team Style 01</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TeamStyleOne />
                </div>
            </section>
            {/* -- team style 01 end -- */}

            {/* -- team style 02 start -- */}
            <section className="bd-team__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Team Style 02</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TeamStyleTwo />
                </div>
            </section>
            {/* -- team style 02 end -- */}
            {/* -- team style 03 start -- */}
            <section className="bd-team__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Team Style 03</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TeamStyleThree />
                </div>
            </section>
            {/* -- team style 03 end -- */}
            {/* -- team style 04 start -- */}
            <section className="bd-team__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Team Style 04</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TeamStyleFour />
                </div>
            </section>
            {/* -- team style 04 end -- */}
            {/* -- team style 05 start -- */}
            <section className="bd-team__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Team Style 05</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TeamStyleFive />
                </div>
            </section>
            {/* -- team style 05 end -- */}
        </>
    );
};

export default TeamElementMain;