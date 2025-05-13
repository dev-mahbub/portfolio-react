"use client"
import Image from "next/image";
import Link from "next/link";
import aboutImg from "../../../public/assets/images/about/about-01.png";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { imageLoader } from "@/hooks/ImageLoader";
import { useVanillaTilt } from "@/hooks/useVanillaTilt";
import CountUpContent from "../counter/CountUpContent";

type TAboutProps = {
    wrapperClass?: string;
}
const AboutStyleOne = ({ wrapperClass }: TAboutProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModal = () => setIsOpen(!isOpen)
    useVanillaTilt();
    return (
        <>
            <section id="homeabout" className={`bd-about__area ${wrapperClass}`}>
                <div className="container">
                    <div className="row g-5 align-items-lg-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="about__thumb-wrapper wow fadeInLeft tilt" data-wow-delay=".3s">
                                <div className="about__thumb">
                                    <Image loader={imageLoader} placeholder='blur' loading='lazy' src={aboutImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="about__content wow fadeInRight" data-wow-delay=".3s">
                                <div className="section__title-wrapper mb-25">
                                    <div className="section__title-wrapper">
                                        <span className="section__subtitle">ABOUT ME</span>
                                        <h2 className="section__title">Young Man Student With Notebooks</h2>
                                    </div>
                                </div>
                                <p className="about__text">Our journey began with a simple belief that every idea, no matter how
                                    small, has the power to make a significant impact.passion meets progress and company to
                                    grow </p>
                                <p className="about__text-two">In a world saturated with noise, we stand out by embracing a
                                    commitment to authenticity and originality. </p>

                                <div className="about__counter-wrapper">
                                    <div className="about__counter-info">
                                        <div className="about__counter-count">
                                            <h3><span className="counter"><CountUpContent number={20} text="th" /></span></h3>
                                        </div>
                                        <p>Years of Experience</p>
                                    </div>
                                    <div className="about__counter-info">
                                        <div className="about__counter-count">
                                            <h3><span className="counter"><CountUpContent number={150} text="+" /></span></h3>
                                        </div>
                                        <p>Project Completed</p>
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
                </div>
            </section>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="vWLcyFtni6U" onClose={() => setIsOpen(false)} />
        </>
    )
};

export default AboutStyleOne;