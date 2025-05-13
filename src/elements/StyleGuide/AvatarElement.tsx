"use client"
import React, { useState } from 'react';
import userOne from '../../../public/assets/images/user/user-12.png';
import userTwo from '../../../public/assets/images/user/user-11.png';
import userThree from '../../../public/assets/images/user/user-03.png';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';

const AvatarElement = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModal = () => setIsOpen(!isOpen)
    return (
        <>
            <div id="avatar" className="elements__area">
                <div className="wrapper">
                    <h5 className="style__guide-title mb-20">Avatar</h5>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-2">
                        <div className="bd-avatars m-auto size-lg">
                            <Image src={userOne} style={{ width: "100%", height: "auto" }} alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="bd-avatars m-auto">
                            <Image src={userTwo} style={{ width: "100%", height: "auto" }} alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="bd-avatars m-auto size-sm">
                            <Image src={userThree} style={{ width: "100%", height: "auto" }} alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <button onClick={() => { openVideoModal() }} className="play__btn popup-video animate-play">
                            <span><i className="icon-play"></i></span>
                        </button>
                    </div>
                </div>
            </div>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="vWLcyFtni6U" onClose={() => setIsOpen(false)} />
        </>
    );
};

export default AvatarElement;