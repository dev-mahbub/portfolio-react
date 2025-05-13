"use client"
import React, { useState } from 'react';
import videoBgImg from '../../../../public/assets/images/video/video-bg-01.png';
import ModalVideo from 'react-modal-video';
import { useJarallax } from '@/hooks/use-jarallax';

const CreativeVideoArea = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModal = () => setIsOpen(!isOpen)
    //use jarallax
    useJarallax()

    return (
        <>
            {/* -- video area start -- */}
            <section className="video__area position-relative jarallax">
                <div className="video__bg-thumb include-bg jarallax-img" style={{ backgroundImage: `url(${videoBgImg.src})` }}>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8 col-md-10">
                            <div className="video__content text-center">
                                <div className="video__play">
                                    <button onClick={() => { openVideoModal() }} className="play-btn popup-video" ><i
                                        className="fa-sharp icon-play"></i></button>
                                </div>
                                <h2 className="video__title">Create videos that explain your products.</h2>
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

export default CreativeVideoArea;