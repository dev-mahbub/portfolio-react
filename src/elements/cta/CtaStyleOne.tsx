import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ctaShapeImgOne from '../../../public/assets/images/shape/circle-shape-02.png';
import ctaShapeImgTwo from '../../../public/assets/images/shape/circle-shape-03.png';

const CtaStyleOne = ({ borderClassWrapper }: { borderClassWrapper?: string }) => {
    return (
        <>
            <div className="cta__wrapper cta__item is-sec-space">
                <div className="cta__bg"></div>
                <div className="cta__shape-wrap d-none d-md-block ">
                    <div className="cta__shape-one scene">
                        <Image className="layer" data-depth="5" style={{ width: "100%", height: "auto" }} src={ctaShapeImgOne}
                            alt="image not found" />
                    </div>
                    <div className="cta__shape-two scene">
                        <Image className="layer" data-depth="6" style={{ width: "100%", height: "auto" }} src={ctaShapeImgTwo}
                            alt="image not found" />
                    </div>
                    <div className="cta__shape-three scene">
                        <Image className="layer" data-depth="7" style={{ width: "100%", height: "auto" }} src={ctaShapeImgTwo}
                            alt="image not found" />
                    </div>
                    <div className="cta__shape-four scene">
                        <Image className="layer" data-depth="8" style={{ width: "100%", height: "auto" }} src={ctaShapeImgTwo}
                            alt="image not found" />
                    </div>
                    <div className="cta__shape-five scene">
                        <Image className="layer" data-depth="9" style={{ width: "100%", height: "auto" }} src={ctaShapeImgTwo}
                            alt="image not found" />
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="cta__content-wrap">
                            <div className="cta__content">
                                <div className="section__title-wrapper text-center ">
                                    <div className="section__title-wrapper text-center">
                                        <span className={`section__subtitle ${borderClassWrapper ? borderClassWrapper : "sec-border"}`}>SUBSCRIBE</span>
                                        <h2 className="section__title mb-30">Stay Informed with the Latest News</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="cta__form">
                                <form action="#">
                                    <div className="cta__input">
                                        <input type="text" placeholder="Enter email" />
                                        <Link href="/contact" className="bd-btn is-bg-gradient">Submit Now</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CtaStyleOne;