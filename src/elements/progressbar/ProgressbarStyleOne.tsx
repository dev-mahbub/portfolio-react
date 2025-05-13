import React from 'react';

const ProgressbarStyleOne = () => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10">
                    <div className="bd-progress__wrap">
                        <div className="bd__progress-bar ">
                            <div className="bd__progress">
                                <div className="bd__progress-wrapper">
                                    <div className="bd__progress-head">
                                        <h5 className="bd__progress-title">UX/UI Design</h5>
                                        <span className="bd__progress-percentage">90%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" role="progressbar"
                                            style={{ width: "90%" }} aria-valuenow={25} aria-valuemin={0}
                                            aria-valuemax={100}>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bd__progress-wrapper">
                                    <div className="bd__progress-head">
                                        <h5 className="bd__progress-title">Development</h5>
                                        <span className="bd__progress-percentage">80%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" role="progressbar"
                                            style={{ width: "80%" }} aria-valuenow={25} aria-valuemin={0}
                                            aria-valuemax={100}></div>
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

export default ProgressbarStyleOne;