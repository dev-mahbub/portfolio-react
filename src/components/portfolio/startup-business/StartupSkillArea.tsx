"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import skillImg from '../../../../public/assets/images/skill/skill-01.png';
import ModalVideo from 'react-modal-video';

const StartupSkillArea = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModal = () => setIsOpen(!isOpen)
    return (
        <>
            <section className="bd-skill__area section-space">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="skill__content-wrapper  wow fadeInLeft" data-wow-delay=".3s">
                                <div className="section__title-wrapper mb-40">
                                    <div className="section__title-wrapper">
                                        <span className="section__subtitle bg-field">OUR SKILLS</span>
                                        <h2 className="section__title mb-20">Display Your Skills For The World To Acknowledge
                                        </h2>
                                        <p>Multiple variations of passages resembling Lorem Ipsum are accessible, yet the
                                            majority have been modified.</p>
                                    </div>
                                </div>
                                <div className="bd-progress__wrap">
                                    <div className="bd__progress-bar style-three">
                                        <div className="bd__progress">
                                            <div className="bd__progress-wrapper">
                                                <div className="bd__progress-head">
                                                    <h6 className="bd__progress-title">UX/UI Design</h6>
                                                    <p className="bd__progress-percentage">80%</p>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar wow slideInLeft" role="progressbar"
                                                        style={{ width: "80%" }} aria-valuenow={25} aria-valuemin={0}
                                                        aria-valuemax={100}>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bd__progress-wrapper">
                                                <div className="bd__progress-head">
                                                    <h6 className="bd__progress-title">Development</h6>
                                                    <p className="bd__progress-percentage">70%</p>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar wow slideInLeft" role="progressbar"
                                                        style={{ width: "70%" }} aria-valuenow={25} aria-valuemin={0}
                                                        aria-valuemax={100}></div>
                                                </div>
                                            </div>
                                            <div className="bd__progress-wrapper">
                                                <div className="bd__progress-head">
                                                    <h6 className="bd__progress-title">Coding</h6>
                                                    <p className="bd__progress-percentage">85%</p>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar wow slideInLeft" role="progressbar"
                                                        style={{ width: "85%" }} aria-valuenow={25} aria-valuemin={0}
                                                        aria-valuemax={100}></div>
                                                </div>
                                            </div>
                                            <div className="bd__progress-wrapper">
                                                <div className="bd__progress-head">
                                                    <h6 className="bd__progress-title">Figma</h6>
                                                    <p className="bd__progress-percentage">90%</p>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar wow slideInLeft" role="progressbar"
                                                        style={{ width: "90%" }} aria-valuenow={25} aria-valuemin={0}
                                                        aria-valuemax={100}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="skill__thumb-wrapper wow fadeInRight" data-wow-delay=".3s">
                                <div className="skill__thumb">
                                    <Image src={skillImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                </div>
                                <div className="video__content text-center">
                                    <div className="video__play">
                                        <button onClick={() => { openVideoModal() }}
                                            className="play-btn popup-video"><i className="fa-sharp icon-play"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="QT5vlkGM810" onClose={() => setIsOpen(false)} />
        </>
    );
};

export default StartupSkillArea;