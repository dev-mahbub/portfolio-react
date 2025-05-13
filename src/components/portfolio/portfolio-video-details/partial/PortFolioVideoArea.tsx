"use client"
import React, { useState } from 'react';
import VideoImg from '../../../../../public/assets/images/portfolio/portfolio-details-video.png';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';

const PortFolioVideoArea = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModal = () => setIsOpen(!isOpen)
    return (
        <>
            <div className="bd-portfolio-video__area section-space-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="portfolio__details-video-wrapper">
                                <div className="portfolio__details-video-thumb">
                                    <Image
                                        src={VideoImg}
                                        loader={imageLoader}
                                        placeholder="blur"
                                        loading="lazy"
                                        style={{ width: "100%", height: "auto" }}
                                        alt="image not found"
                                    />
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
            </div>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="QT5vlkGM810" onClose={() => setIsOpen(false)} />
        </>
    );
};

export default PortFolioVideoArea;