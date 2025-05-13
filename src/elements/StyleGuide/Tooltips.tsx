import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userOne from '../../../public/assets/images/user/user-01.png';
import userTwo from '../../../public/assets/images/user/user-02.png';
import userThree from '../../../public/assets/images/user/user-03.png';
import userFour from '../../../public/assets/images/user/user-04.png';

const Tooltips = () => {
    return (
        <>
            <div id="tooltips" className="elements__area">
                <div className="wrapper">
                    <h5 className="style__guide-title mb-20">Tooltips</h5>
                </div>
                <div className="row g-5 justify-content-between">
                    <div className="col-lg-6">
                        <div className="client__meta">
                            <div className="client-thumb">
                                <Link href="#"><Image src={userOne} style={{ width: "100%", height: "auto" }} alt="image" /></Link>
                                <Link href="#"><Image src={userTwo} style={{ width: "100%", height: "auto" }} alt="image" /></Link>
                                <Link href="#"><Image src={userThree} style={{ width: "100%", height: "auto" }} alt="image" /></Link>
                                <Link href="#"><Image src={userFour} style={{ width: "100%", height: "auto" }} alt="image" /></Link>
                                <Link className="arrow" href="#">
                                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="client__meta d-flex align-items-center gap-4">
                            <div className="client-thumb">
                                <Link href="#"><Image src={userOne} style={{ width: "100%", height: "auto" }} alt="image" /></Link>
                                <Link href="#"><Image src={userTwo} style={{ width: "100%", height: "auto" }} alt="image" /></Link>
                                <Link href="#"><Image src={userThree} style={{ width: "100%", height: "auto" }} alt="image" /></Link>
                                <Link href="#"><Image src={userFour} style={{ width: "100%", height: "auto" }} alt="image" /></Link>
                            </div>
                            <div className="client__meta-text">
                                <h5>8000+ Client</h5>
                                <span>All over the world</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="client__meta d-flex align-items-center gap-3">
                            <div className="client-thumb">
                                <Link href="#"><Image src={userOne} style={{ width: "100%", height: "auto" }} alt="image" /></Link>
                                <Link href="#"><Image src={userTwo} style={{ width: "100%", height: "auto" }} alt="image" /></Link>
                                <Link href="#"><Image src={userThree} style={{ width: "100%", height: "auto" }} alt="image" /></Link>
                                <Link href="#"><Image src={userFour} style={{ width: "100%", height: "auto" }} alt="image" /></Link>
                            </div>
                            <div className="client__meta-text">
                                <p className="mb-0">Over <span className="text-color-1">5Ok+</span>Users all
                                    over the world...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tooltips;