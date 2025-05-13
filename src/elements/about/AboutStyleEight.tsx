"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import aboutImg from '../../../public/assets/images/about/about-08.png';
import aboutShape from '../../../public/assets/images/shape/dot-small-02.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import ModalVideo from 'react-modal-video';
import CountUpContent from '../counter/CountUpContent';

const AboutStyleEight = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModal = () => setIsOpen(!isOpen)
    return (
        <>
            <div className="row g-5 align-items-lg-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="about__thumb-wrapper style-eight wow fadeInLeft" data-wow-delay=".3s">
                        <div className="about__thumb">
                            <Image loader={imageLoader} placeholder='blur' loading='lazy' src={aboutImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                        </div>
                        <div className="about__shape-six">
                            <Image src={aboutShape} width={127} height={130}
                                alt="image not found" />
                        </div>
                        <div className="counter__wrap is-radius-none is-bg-solid">
                            <h2 className="counter__title"><span className="counter"><CountUpContent number={10} text='+' /></span></h2>
                            <div className="counter__details">
                                <p>Year <br /> Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="about__content style-eight  wow fadeInRight" data-wow-delay=".3s">
                        <div className="section__title-wrapper mb-25">
                            <div className="section__title-wrapper">
                                <span className="section__subtitle bg-field">Who I Am</span>
                                <h2 className="section__title">Our Commitment Building Trust and Long Term</h2>
                                <p className="contentHidden">contentHiddenText</p>
                            </div>
                        </div>
                        <p>Discuss your commitment to building trust with customers and how you faster long-term
                            relations based on trust and reliability. We are confident that with the same passion.
                        </p>
                        <div className="about__feature-list">
                            <div className="feature__list">
                                <ul>
                                    <li>
                                        <i className="icon-trophy"></i>
                                        <h6 className="featured__title">Award Winning</h6>
                                        <p>We are passionate about harnessing power</p>
                                    </li>
                                    <li>
                                        <i className="icon-creative"></i>
                                        <h6 className="featured__title">Modern Technology</h6>
                                        <p>We are passionate about harnessing power</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="about__btn">
                            <Link className="bd-btn is-btn-anim" href="/about">
                                <span className="bd-btn-inner">
                                    <span className="bd-btn-normal">Know more</span>
                                    <span className="bd-btn-hover">Know more</span>
                                    <i className="contentHidden"></i>
                                </span>
                            </Link>
                            <button onClick={() => { openVideoModal() }} className="play__btn popup-video animate-play"><span><i
                                className="icon-play"></i></span></button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="vWLcyFtni6U" onClose={() => setIsOpen(false)} />
        </>
    );
};

export default AboutStyleEight;