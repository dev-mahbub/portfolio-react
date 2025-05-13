"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import aboutThumbOne from '../../../public/assets/images/about/about-02.png';
import aboutThumbTwo from '../../../public/assets/images/about/about-small.png';
import { imageLoader } from '@/hooks/ImageLoader';
import CountUpContent from '../counter/CountUpContent';
import { CircularProgressbar } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";

const AboutStyleTwo = () => {
    const [isVisible1, setIsVisible1] = useState<boolean>(false);
    const [isVisible2, setIsVisible2] = useState<boolean>(false);

    const circularRef1 = useRef(null);
    const circularRef2 = useRef(null);

    return (
        <>
            <div className="row g-5">
                <div className="col-xl-6 col-lg-6">
                    <div className="about__thumb-wrapper style-two  wow fadeInLeft" data-wow-delay=".3s">
                        <div className="about__thumb">
                            <Image loader={imageLoader} placeholder='blur' loading='lazy' src={aboutThumbOne} style={{ width: "100%", height: "auto" }} alt="image not found" />
                        </div>
                        <div className="about__thumb is-small">
                            <Image loader={imageLoader} placeholder='blur' loading='lazy' src={aboutThumbTwo} style={{ width: "100%", height: "auto" }} alt="image not found" />
                        </div>
                        <div className="about__experience">
                            <div className="about__experience-bg"></div>
                            <div className="about__experience-content">
                                <div className="about__experience-content-inner">
                                    <h2 className="about__experience-title"><span className="counter"><CountUpContent number={20} text='+' /></span></h2>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="about__content style-two  wow fadeInRight" data-wow-delay=".3s">
                        <div className="section__title-wrapper mb-25">
                            <div className="section__title-wrapper">
                                <span className="section__subtitle bg-field">Who I Am</span>
                                <h2 className="section__title">Meet the Creative Mind Unleash Brilliance</h2>
                            </div>
                        </div>
                        <p>The minimal agency looking to outsource design work. a company in search of a designer or
                            product work. a digital agency that needs a landing page a startup that wants to launch
                            an app or an enterprise that plans to rebrand.</p>

                        <div className="counter__wrapper" >
                            <div className="counter__item">
                                <div className='circle-item'>
                                    <VisibilitySensor onChange={(isVisible: boolean) => setIsVisible1(isVisible)}>
                                        <CircularProgressbar
                                            value={isVisible1 ? 85 : 0}
                                            text={`${isVisible1 ? 85 : 0}%`}
                                            strokeWidth={5}
                                            ref={circularRef1}
                                        />
                                    </VisibilitySensor>
                                </div>
                                <p className="counter__title mt-5">Photoshop</p>
                            </div>
                            <div className="counter__item">
                                <div className='circle-item'>
                                    <VisibilitySensor onChange={(isVisible: boolean) => setIsVisible2(isVisible)}>
                                        <CircularProgressbar
                                            value={isVisible2 ? 95 : 0}
                                            text={`${isVisible2 ? 95 : 0}%`}
                                            strokeWidth={5}
                                            ref={circularRef2}
                                        />
                                    </VisibilitySensor>
                                </div>
                                <p className="counter__title mt-5">Figma</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyleTwo;
