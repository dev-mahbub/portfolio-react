import TeamStyleFour from '@/elements/team/TeamStyleFour';
import React from 'react';

const TeamAreaDigitalAgency = () => {
    return (
        <>
            {/* -- team area start -- */}
            <section className="bd-team__area section-space-bottom">
                <div className="container">
                    <div className="row align-items-end section__title-space">
                        <div className="col-xl-5 col-lg-7 col-md-7 col-sm-10">
                            <div className="section__title-wrapper">
                                <span className="section__subtitle bg-field">OUR TEAM</span>
                                <h2 className="section__title mb-20">Our Most Successful Team Member</h2>
                                <p className="section__paragraph">We maintain an open, inclusive, and collaborative environment
                                    where ideas flow freely.</p>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            {/* -- If we need navigation buttons -- */}
                            <div className="team__navigation">
                                <button className="team__button-prev circle-btn is-hover slider__nav-btn"><i
                                    className="fa-regular fa-arrow-left-long"></i></button>
                                <button className="team__button-next circle-btn is-hover ml-10 slider__nav-btn"><i
                                    className="fa-regular fa-arrow-right-long"></i></button>
                            </div>
                        </div>
                    </div>
                    <TeamStyleFour />
                </div>
            </section>
        </>
    );
};

export default TeamAreaDigitalAgency;