"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import SkillImg from '../../../../public/assets/images/skill/skill-01.png';
import ModalVideo from 'react-modal-video';

const StandardSkillArea = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModal = () => setIsOpen(!isOpen)
    return (
        <>
            <section className="bd-skill__area section-space theme-bg-secondary">
                <div className="container">
                    <div className="row align-items-lg-center g-5">
                        <div className="col-xl-5 col-lg-5 col-md-6">
                            <div className="skill__thumb-wrapper wow fadeInLeft" data-wow-delay=".3s">
                                <div className="skill__thumb">
                                    <Image src={SkillImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                </div>
                                <div className="video__content text-center">
                                    <div className="video__play">
                                        <button onClick={() => { openVideoModal() }}
                                            className="play-btn popup-video"><i className="fa-sharp icon-play"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-6">
                            <div className="skill__content-wrapper style-two wow fadeInRight" data-wow-delay=".3s">
                                <div className="section__title-wrapper mb-40">
                                    <div className="section__title-wrapper">
                                        <span className="section__subtitle bg-field">OUR SKILLS</span>
                                        <h2 className="section__title mb-20">Display Your Skills For The World To know</h2>
                                        <p>Multiple variations of passages resembling Lorem Ipsum are accessible, yet the
                                            majority have been modified.</p>
                                    </div>
                                </div>
                                <div className="skill__list-wrapper">
                                    <div className="info__list">
                                        <ul>
                                            <li>
                                                <i className="fa-regular fa-check"></i>
                                                Reinvent Your Business to Better Support Our Needs
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-check"></i>
                                                Pioneering the {`Internet's`} First Authentic Generator
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-check"></i>
                                                Pioneering the Design {`World's`} First Authentic Generator
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="skill__btn">
                                    <Link className="bd-btn is-btn-anim bordered-blue" href="/about">
                                        <span className="bd-btn-inner">
                                            <span className="bd-btn-normal">Know more</span>
                                            <span className="bd-btn-hover">Know more</span>
                                            <i className="contentHidden"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo isOpen={isOpen} videoId="9-T_zwmnZSc" onClose={() => setIsOpen(false)} />
        </>
    );
};

export default StandardSkillArea;