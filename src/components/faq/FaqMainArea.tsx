import React from 'react';
import FaqContact from './FaqContact';
import CtaStyleOne from '@/elements/cta/CtaStyleOne';

const FaqMainArea = () => {
    return (
        <>
            {/* -- faq style start -- */}
            <section className="faq__area section-space faq__style-6 p-relative z-index-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="section__title-wrapper">
                                    <span className="section__subtitle bg-field">{`FAQ's`}</span>
                                    <h2 className="section__title">Frequently Asked Questions</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-xxl-5 col-xl-5 col-lg-5">
                            <div className="faq__wrapper wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                                <div className="faq__tab faq__style-2">
                                    <nav>
                                        <div className="nav nav-tabs flex-column" id="nav-tab-2" role="tablist">
                                            <button className="nav-link" id="nav-general-2-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-general-2" type="button" role="tab"
                                                aria-controls="nav-general-2" aria-selected="false">
                                                <span>
                                                    <i className="fa-sharp fa-light fa-square-question"></i>
                                                </span>
                                                General Questions
                                            </button>
                                            <button className="nav-link active" id="nav-community-2-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-community-2" type="button" role="tab"
                                                aria-controls="nav-community-2" aria-selected="false">
                                                <span>
                                                    <i className="fa-thin fa-grid-2-plus"></i>
                                                </span>
                                                Community
                                            </button>
                                            <button className="nav-link" id="nav-support-2-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-support-2" type="button" role="tab"
                                                aria-controls="nav-support-2" aria-selected="true">
                                                <span>
                                                    <i className="fa-thin fa-user-headset"></i>
                                                </span>
                                                Support
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-7">
                            <div className="faq__tab-content wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
                                <div className="tab-content" id="nav-tabContent_2">
                                    <div className="tab-pane fade" id="nav-general-2" role="tabpanel"
                                        aria-labelledby="nav-general-2-tab">
                                        <div className="bd__faq">
                                            <div className="accordion" id="accordionExampleEight">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwentyFour">
                                                        <button className="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwentyFour"
                                                            aria-expanded="true" aria-controls="collapseTwentyFour">
                                                            <span>Q.</span> What is the purpose of website?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwentyFour" className="accordion-collapse collapse show"
                                                        aria-labelledby="headingTwentyFour"
                                                        data-bs-parent="#accordionExampleEight">
                                                        <div className="accordion-body">
                                                            A website showcases your work, skills, and accomplishments. It
                                                            serves as a digital resume and a way for potential employers or
                                                            clients to see what you can do.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwentyFive">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwentyFive"
                                                            aria-expanded="false" aria-controls="collapseTwentyFive">
                                                            <span>Q.</span> What should be included in my website?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwentyFive" className="accordion-collapse collapse"
                                                        aria-labelledby="headingTwentyFive"
                                                        data-bs-parent="#accordionExampleEight">
                                                        <div className="accordion-body">
                                                            Include a biography, your resume, examples of your work, and
                                                            information on how to contact you. Tailor it to showcase your
                                                            skills and experiences relevant to your field.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwentySix">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwentySix"
                                                            aria-expanded="false" aria-controls="collapseTwentySix">
                                                            <span>Q.</span> How often should I update my website?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwentySix" className="accordion-collapse collapse"
                                                        aria-labelledby="headingTwentySix"
                                                        data-bs-parent="#accordionExampleEight">
                                                        <div className="accordion-body">
                                                            Regularly update your website to reflect your latest work and
                                                            skills. Aim for updates at least once every few months to keep
                                                            it current.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade active show" id="nav-community-2" role="tabpanel"
                                        aria-labelledby="nav-community-2-tab">
                                        <div className="bd__faq">
                                            <div className="accordion" id="accordionExampleNine">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwentySeven">
                                                        <button className="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwentySeven"
                                                            aria-expanded="true" aria-controls="collapseTwentySeven">
                                                            <span>Q.</span> What is the purpose of building community?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwentySeven" className="accordion-collapse collapse show"
                                                        aria-labelledby="headingTwentySeven"
                                                        data-bs-parent="#accordionExampleNine">
                                                        <div className="accordion-body">
                                                            A website community fosters engagement and interaction among
                                                            your audience. It can enhance user experience, build a sense of
                                                            belonging.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwentyEight">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwentyEight"
                                                            aria-expanded="false" aria-controls="collapseTwentyEight">
                                                            <span>Q.</span>Should I integrate social media community?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwentyEight" className="accordion-collapse collapse"
                                                        aria-labelledby="headingTwentyEight"
                                                        data-bs-parent="#accordionExampleNine">
                                                        <div className="accordion-body">
                                                            Integrating social media can extend the reach of your community.
                                                            You can share community content on social platforms and allow
                                                            users to sign in using their social media accounts.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwentyNine">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwentyNine"
                                                            aria-expanded="false" aria-controls="collapseTwentyNine">
                                                            <span>Q.</span> How can we grow and promote community?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwentyNine" className="accordion-collapse collapse"
                                                        aria-labelledby="headingTwentyNine"
                                                        data-bs-parent="#accordionExampleNine">
                                                        <div className="accordion-body">
                                                            Promote your community through various channels, including
                                                            social media, email newsletters, and collaboration with
                                                            influencers.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-support-2" role="tabpanel"
                                        aria-labelledby="nav-support-2-tab">
                                        <div className="bd__faq">
                                            <div className="accordion" id="accordionExampleTen">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThirty">
                                                        <button className="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThirty"
                                                            aria-expanded="true" aria-controls="collapseThirty">
                                                            <span>Q.</span>How to improve my {`website's`} loading speed?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThirty" className="accordion-collapse collapse show"
                                                        aria-labelledby="headingThirty"
                                                        data-bs-parent="#accordionExampleTen">
                                                        <div className="accordion-body">
                                                            Optimize images, use browser caching, minimize HTTP requests,
                                                            and consider a content delivery network.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThirtyOne">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThirtyOne"
                                                            aria-expanded="false" aria-controls="collapseThirtyOne">
                                                            <span>Q.</span> How can I ensure my website is secure?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThirtyOne" className="accordion-collapse collapse"
                                                        aria-labelledby="headingThirtyOne"
                                                        data-bs-parent="#accordionExampleTen">
                                                        <div className="accordion-body">
                                                            Keep software, plugins, and themes updated, use strong
                                                            passwords, implement SSL encryption, and regularly back up your
                                                            website.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThirtyTwo">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThirtyTwo"
                                                            aria-expanded="false" aria-controls="collapseThirtyTwo">
                                                            <span>Q.</span> How can I provide excellent customer support?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThirtyTwo" className="accordion-collapse collapse"
                                                        aria-labelledby="headingThirtyTwo"
                                                        data-bs-parent="#accordionExampleTen">
                                                        <div className="accordion-body">
                                                            Offer multiple channels for support (email, chat, forums),
                                                            respond promptly to user inquiries, create a comprehensive FAQ
                                                            section.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -- faq style end -- */}
            {/* contact area component */}
            <FaqContact />
            {/* cta area start */}
            <div className="cta__area section-space fix">
                <div className="container">
                    <CtaStyleOne />
                </div>
            </div>
        </>
    );
};

export default FaqMainArea;