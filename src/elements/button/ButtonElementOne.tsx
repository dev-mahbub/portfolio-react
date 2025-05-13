import Link from 'next/link';
import React from 'react';

const ButtonElementOne = () => {
    return (
        <>
            <div className="row g-5 align-items-center justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <Link className="bd-btn is-btn-anim" href="/portfolio">
                        <span className="bd-btn-inner">
                            <span className="bd-btn-normal">Get my work</span>
                            <span className="bd-btn-hover">Get my work</span>
                            <i className="contentHidden"></i>
                        </span>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <Link className="bd-btn is-btn-anim bordered-blue" href="/contact">
                        <span className="bd-btn-inner">
                            <span className="bd-btn-normal">Contact me</span>
                            <span className="bd-btn-hover">Contact me</span>
                            <i className="contentHidden"></i>
                        </span>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <Link className="bd-btn is-bg-gradient" href="/portfolio"><span className="">Get my works<i
                        className="contentHidden"></i></span></Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <Link className="bd-btn is-btn-anim is-transparent-btn" href="/contact">
                        <span className="bd-btn-inner">
                            <span className="bd-btn-normal">Contact me</span>
                            <span className="bd-btn-hover">Contact me</span>
                            <i className="contentHidden"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ButtonElementOne;