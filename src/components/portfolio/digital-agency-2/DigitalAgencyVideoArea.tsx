"use client"
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import videoBg from '../../../../public/assets/images/video/video-bg-02.png';
import { useJarallax } from '@/hooks/use-jarallax';

const DigitalAgencyVideoArea = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModal = () => setIsOpen(!isOpen)
    //use jarallax
    useJarallax()
    return (
        <>
            {/* -- video area start -- */}
            <section className="video__area style-two position-relative jarallax">
                <div className="video__bg-thumb include-bg jarallax-img"
                    style={{ backgroundImage: `url(${videoBg.src})` }}>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-8 col-xl-10 col-lg-10 col-sm-10">
                            <div className="video__content text-center">
                                <h2 className="video__title">We Assist Clients Of All Dimensions In Building Attractive
                                    Websites.</h2>
                                <div className="video__play">
                                    <button onClick={() => { openVideoModal() }}
                                        className="play-btn popup-video animate-play is-bg-gradient"><i
                                            className="fa-sharp icon-play"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="vWLcyFtni6U" onClose={() => setIsOpen(false)} />
            {/* -- video area end -- */}
        </>
    );
};

export default DigitalAgencyVideoArea;