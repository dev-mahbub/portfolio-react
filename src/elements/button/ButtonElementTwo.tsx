import Link from 'next/link';
import React from 'react';

const ButtonElementTwo = () => {
    return (
        <>
            <div className="row g-5 align-items-center justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <Link className="bd-btn is-btn-anim btn-xs" href="/portfolio">
                        <span className="bd-btn-inner">
                            <span className="bd-btn-normal">Get my work</span>
                            <span className="bd-btn-hover">Get my work</span>
                            <i className="contentHidden"></i>
                        </span>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <Link className="bd-btn is-btn-anim btn-sm" href="/portfolio">
                        <span className="bd-btn-inner">
                            <span className="bd-btn-normal">Get my work</span>
                            <span className="bd-btn-hover">Get my work</span>
                            <i className="contentHidden"></i>
                        </span>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <Link className="bd-btn is-btn-anim btn-lg" href="/portfolio">
                        <span className="bd-btn-inner">
                            <span className="bd-btn-normal">Get my work</span>
                            <span className="bd-btn-hover">Get my work</span>
                            <i className="contentHidden"></i>
                        </span>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <Link className="bd-btn is-btn-anim btn-xl" href="/portfolio">
                        <span className="bd-btn-inner">
                            <span className="bd-btn-normal">Get my work</span>
                            <span className="bd-btn-hover">Get my work</span>
                            <i className="contentHidden"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ButtonElementTwo;