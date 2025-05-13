"use client"
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const ButtonCircle = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModal = () => setIsOpen(!isOpen)
    return (
        <>
            <section className="element-button section-space-bottom">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-12">
                                <div className="section__title-wrapper section__title-space text-center">
                                    <div className="elements-section__wrapper elements-line">
                                        <div className="separator__line line-left"></div>
                                        <div className="elements-title__wrapper">
                                            <h4 className="section__title elements__title">Buttons Circle</h4>
                                        </div>
                                        <div className="separator__line line-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5 align-items-center justify-content-center">
                            <div className="col-lg-3 text-center">
                                <button onClick={() => { openVideoModal() }} className="play__btn popup-video animate-play"><span><i
                                    className="icon-play"></i></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="vWLcyFtni6U" onClose={() => setIsOpen(false)} />
        </>
    );
};

export default ButtonCircle;