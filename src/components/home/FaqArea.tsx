import React from 'react';
import LandingDocImg from '../../../public/assets/images/landing/services/landing-doc.png';
import LandingDocImgTwo from '../../../public/assets/images/landing/services/landing-support.png';
import Image from 'next/image';
import Link from 'next/link';

const FaqArea = () => {
    return (
        <>
            <div className="faq-area section-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="section-head text-center section__title-space">
                                <div className="section__subtitle bg-field">ANY QUESTION</div>
                                <h2 className="section-title mb-10">Do you have any Question</h2>
                                <p className="description">Check out our FAQ section to see if we can help</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-7 col-sm-12 col-12">
                            <div className="bd-accordion-style bd-accordion-01 accordion">

                                <div className="accordion" id="accordionExampleb2">
                                    <div className="accordion-item card p-30">
                                        <h2 className="accordion-header card-header" id="headingTwo1">
                                            <button className="accordion-button bd-border-bottom" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo1"
                                                aria-expanded="true" aria-controls="collapseTwo1">
                                                Q1. What is Portlu? how does it work?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo1" className="accordion-collapse collapse show"
                                            aria-labelledby="headingTwo1" data-bs-parent="#accordionExampleb2">
                                            <div className="accordion-body card-body has-border-top">
                                                <div className="inner">
                                                    <p className="description">
                                                        Welcome to Portlu HTML, it is a personal portfolio and creative
                                                        agency template
                                                        is a pre-designed layout
                                                        that provides a structure for creating and organizing online
                                                        portfolio content
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item card p-30">
                                        <h2 className="accordion-header card-header" id="headingTwo2">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo2"
                                                aria-expanded="false" aria-controls="collapseTwo2">
                                                Q2. Can I get free support ?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo2" className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo2" data-bs-parent="#accordionExampleb2">
                                            <div className="accordion-body card-body has-border-top">
                                                <div className="inner">
                                                    <p className="description">
                                                        We aim to build trust and strong relationships with our customers.
                                                        Offering free
                                                        support is a way to show that we stand by our products and are here
                                                        to support
                                                        you throughout your journey with us
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item card p-30">
                                        <h2 className="accordion-header card-header" id="headingTwo3">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo3"
                                                aria-expanded="false" aria-controls="collapseTwo3">
                                                Q3. Can I change any Elements as I like?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo3" className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo3" data-bs-parent="#accordionExampleb2">
                                            <div className="accordion-body card-body has-border-top">
                                                <div className="inner">
                                                    <p className="description">
                                                        {`it's`} important to note that while all elements are customizable,
                                                        there may be
                                                        certain limitations or dependencies in place to maintain the
                                                        functionality and
                                                        integrity of the product or service. However, our aim is to give you
                                                        the freedom
                                                        to adapt it to your needs as much as possible
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item card p-30">
                                        <h2 className="accordion-header card-header" id="headingTwo4">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo4"
                                                aria-expanded="false" aria-controls="collapseTwo4">
                                                Q4. Do you have an online documentation?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo4" className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo4" data-bs-parent="#accordionExampleb2">
                                            <div className="accordion-body card-body has-border-top">
                                                <div className="inner">
                                                    <p className="description">
                                                        You can access our online documentation by visiting our website and
                                                        navigating to
                                                        the {`"Documentation"`} or {`"Help Center"`} section. {`It's`} designed to be
                                                        user-friendly
                                                        and organized, making it easy for you to find the information you
                                                        need. Whether
                                                        {`you're`} looking for setup profile, agency, troubleshooting guides, or
                                                        any
                                                        other type of information, our online documentation is a great place
                                                        to start.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item card p-30">
                                        <h2 className="accordion-header card-header" id="headingTwo5">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo5"
                                                aria-expanded="false" aria-controls="collapseTwo5">
                                                Q5. Can I build a complete project with this template?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo5" className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo5" data-bs-parent="#accordionExampleb2">
                                            <div className="accordion-body card-body has-border-top">
                                                <div className="inner">
                                                    <p className="description">
                                                        Yes, You can change any Elements as you like. And By the way you can
                                                        build your
                                                        website which you are choose
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12 col-12">
                            <div className="row g-5">
                                <div className="col-lg-12 col-md-6">
                                    <div className="bd-landing-service">
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <Image src={LandingDocImg} width={51} height={63} alt="services" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title mb-20">Online Documentation</h4>
                                                <Link className="bd-btn is-btn-anim bordered-light" href="/source/portlu-doc"
                                                    target="_blank">
                                                    <span className="bd-btn-inner">
                                                        <span className="bd-btn-normal">Documentation</span>
                                                        <span className="bd-btn-hover">Documentation</span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="bd-landing-service">
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <Image src={LandingDocImgTwo} width={60} height={60} alt="services" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title mb-20">Dedicated Support</h4>
                                                <Link className="bd-btn is-btn-anim bordered-light"
                                                    href="mailto:wellconcept@hotmail.com">
                                                    <span className="bd-btn-inner">
                                                        <span className="bd-btn-normal">Get support</span>
                                                        <span className="bd-btn-hover">Get support</span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqArea;