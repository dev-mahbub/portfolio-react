"use client"
import futureData from '@/data/future-data';
import Image from 'next/image';
import React from 'react';

const FutureArea = () => {

    return (
        <>
            <div className="bd-feature-area section-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="section-head text-center section__title-space">
                                <div className="section__subtitle bg-field">Top Feature</div>
                                <h2 className="section-title">Bundled with Popular Creative Features</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-12">
                            <div className="features-wrapper">
                                {
                                    futureData.map((item) => (
                                        <div className="features-item" key={item.id}>
                                            <div className="features-content">
                                                <div className={`features-icon ${item.color}`}>
                                                    <Image src={item.icon} width={51} height={50} alt="image not found" />
                                                </div>
                                                <h4 className="features-title">{item.title}</h4>
                                                <p>{item.desc}</p>
                                            </div>
                                            <div className={`features__tag ${item.color}`}>
                                                <span>{item.tagName}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FutureArea;