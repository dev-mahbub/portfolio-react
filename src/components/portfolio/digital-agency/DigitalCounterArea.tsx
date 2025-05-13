"use client"
import React, { useRef } from 'react';
import CounterBg from '../../../../public/assets/images/counter/bg/counter-bg.png';
import { CircularProgressbar } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";

const DigitalCounterArea = () => {
    const percentage1Ref = useRef(null);
    const percentage2Ref = useRef(null);
    const percentage3Ref = useRef(null);
    const percentage4Ref = useRef(null);

    return (
        <>
            <div className="bd-counter__area p-relative pt-80 pb-80">
                <div className="counter__bg include-bg" style={{ backgroundImage: `url(${CounterBg.src})` }}></div>
                <div className="container">
                    <div className="counter__wrapper style-five">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter__wrapper">
                                    <div className="counter__item wow fadeIn" data-wow-delay=".3s" data-wow-duration="1s">
                                        <div className="counter__canvas d-flex justify-content-center">
                                            <VisibilitySensor>
                                                {({ isVisible }:any) => {
                                                    const percentage = isVisible ? 65 : 0;
                                                    return (
                                                        <div ref={percentage1Ref}>
                                                            <CircularProgressbar
                                                                value={percentage}
                                                                text={`${percentage}%`}
                                                                strokeWidth={5}
                                                            />
                                                        </div>
                                                    );
                                                }}
                                            </VisibilitySensor>
                                        </div>
                                        <p className="counter__title mt-5">Photoshop</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter__wrapper" id="percentage2">
                                    <div className="counter__item wow fadeIn" data-wow-delay=".5s" data-wow-duration="1s">
                                        <div className="counter__canvas d-flex justify-content-center">
                                            <VisibilitySensor>
                                                {({ isVisible }:any) => {
                                                    const percentage = isVisible ? 85 : 0;
                                                    return (
                                                        <div ref={percentage2Ref}>
                                                            <CircularProgressbar
                                                                value={percentage}
                                                                text={`${percentage}%`}
                                                                strokeWidth={5}
                                                            />
                                                        </div>
                                                    );
                                                }}
                                            </VisibilitySensor>
                                        </div>
                                        <p className="counter__title mt-5">Figma</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter__wrapper wow" id="percentage3">
                                    <div className="counter__item wow fadeIn" data-wow-delay=".7s" data-wow-duration="1s">
                                        <div className="counter__canvas d-flex justify-content-center">
                                            <VisibilitySensor>
                                                {({ isVisible }:any) => {
                                                    const percentage = isVisible ? 75 : 0;
                                                    return (
                                                        <div ref={percentage3Ref}>
                                                            <CircularProgressbar
                                                                value={percentage}
                                                                text={`${percentage}%`}
                                                                strokeWidth={5}
                                                            />
                                                        </div>
                                                    );
                                                }}
                                            </VisibilitySensor>
                                        </div>
                                        <p className="counter__title mt-5">Design plans</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter__wrapper" id="percentage4">
                                    <div className="counter__item wow fadeIn" data-wow-delay=".9s" data-wow-duration="1s">
                                        <div className="counter__canvas d-flex justify-content-center">
                                            <VisibilitySensor>
                                                {({ isVisible }:any) => {
                                                    const percentage = isVisible ? 70 : 0;
                                                    return (
                                                        <div ref={percentage4Ref}>
                                                            <CircularProgressbar
                                                                value={percentage}
                                                                text={`${percentage}%`}
                                                                strokeWidth={5}
                                                            />
                                                        </div>
                                                    );
                                                }}
                                            </VisibilitySensor>
                                        </div>
                                        <p className="counter__title mt-5">Project complete</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DigitalCounterArea;




