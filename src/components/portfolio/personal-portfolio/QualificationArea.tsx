import React from 'react';
import QualificationTabContentOne from './Partial/QualificationArea/QualificationTabContentOne';
import QualificationTabContentTwo from './Partial/QualificationArea/QualificationTabContentTwo';

const QualificationArea = () => {
    return (
        <>
            {/* -- Section divider -- */}
            <div className="section__divider">
                <hr />
            </div>

            {/* -- qualification start -- */}
            <section className="bd-qulafication__area section-space">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="section__title-wrapper text-center">
                                <span className="section__subtitle">Education & SKILL</span>
                                <h2 className="section__title mb-25">My Curriculum Vitae</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-30">
                        <div className="col-lg-6 col-md-6">
                            <div className="faq__tab-wrapper bd-tab">
                                <nav>
                                    <div className="nav nav-tabs faq-tab-slide justify-content-center" id="nav-tab"
                                        role="tablist">
                                        <label htmlFor="faq-tab-check" className="nav faq-separate">
                                            <span className="nav-link" id="nav-experience-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-experience" role="tab" aria-controls="nav-experience"
                                                aria-selected="true">Experience</span>
                                            <input type="checkbox" id="faq-tab-check" />
                                            <i></i>
                                            <span className="nav-link active" id="nav-education-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-education" role="tab" aria-controls="nav-education"
                                                aria-selected="false">Education</span>
                                        </label>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="tab-content wow fadeInUp" id="nav-tabContent" data-wow-delay=".3s"
                            data-wow-duration="1s">
                            <div className="tab-pane fade show  active" id="nav-experience" role="tabpanel"
                                aria-labelledby="nav-experience-tab">
                                <QualificationTabContentOne />
                            </div>
                            <div className="tab-pane fade " id="nav-education" role="tabpanel"
                                aria-labelledby="nav-education-tab">
                                <QualificationTabContentTwo />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -- qualification end -- */}
        </>
    );
};

export default QualificationArea;