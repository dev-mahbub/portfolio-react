"use client"
import React from 'react';
import aboutImg from '../../../public/assets/images/about/about-07.png';
import aboutShape from '../../../public/assets/images/shape/dot-small.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';

const AboutStyleSeven = () => {
    return (
        <>
            <div className="row g-5">
                <div className="col-xl-7 col-lg-7 col-md-6">
                    <div className="about__content style-seven  wow fadeInLeft" data-wow-delay=".3s">
                        <div className="section__title-wrapper mb-25">
                            <div className="section__title-wrapper">
                                <span className="section__subtitle bg-field">Who I Am</span>
                                <h2 className="section__title">Share The History And Evolution Of Your Company</h2>
                            </div>
                        </div>
                        <p>Our journey continues as we set our sights on the future. We are excited to explore new
                            horizons, innovate, and expand our offerings in upcoming initiatives. We are confident
                            that with
                            the same passion and dedication that guided us from the beginning</p>
                        <div className="faq__style-five">
                            <div className="bd__faq">
                                <div className="accordion" id="accordionExampleTwo">
                                    <div className="accordion-item">
                                        <h5 className="accordion-header" id="headingFive">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive" aria-expanded="true"
                                                aria-controls="collapseFive">
                                                Achievements and Results
                                            </button>
                                        </h5>
                                        <div id="collapseFive" className="accordion-collapse collapse show"
                                            aria-labelledby="headingFive" data-bs-parent="#accordionExampleTwo">
                                            <div className="accordion-body">

                                                <p>Highlight achievements that demonstrate your impact on the
                                                    organization,
                                                    such as revenue growth, cost savings, or process improvements
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h5 className="accordion-header" id="headingSix">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                aria-expanded="false" aria-controls="collapseSix">
                                                Work Experience
                                            </button>
                                        </h5>
                                        <div id="collapseSix" className="accordion-collapse collapse"
                                            aria-labelledby="headingSix" data-bs-parent="#accordionExampleTwo">
                                            <div className="accordion-body">

                                                <p>If you participated in a study abroad program or international
                                                    exchange,
                                                    mention the location and duration of your overseas experience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h5 className="accordion-header" id="headingSeven">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                aria-expanded="false" aria-controls="collapseSeven">
                                                Leadership Experience
                                            </button>
                                        </h5>
                                        <div id="collapseSeven" className="accordion-collapse collapse"
                                            aria-labelledby="headingSeven" data-bs-parent="#accordionExampleTwo">
                                            <div className="accordion-body">

                                                <p>If you participated in a study abroad program or international
                                                    exchange,
                                                    mention the location and duration of your overseas experience.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-6">
                    <div className="about__thumb-wrapper style-seven wow fadeInRight" data-wow-delay=".3s">
                        <div className="about__thumb tilt">
                            <Image loader={imageLoader} placeholder='blur' loading='lazy' src={aboutImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                            <div className="about__shape-five">
                                <Image src={aboutShape} width={127} height={130}
                                    alt="image not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyleSeven;