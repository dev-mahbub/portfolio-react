import React from 'react';

const PortfolioVideoFutureArea = () => {
    return (
        <>
             <section className="bd-feature__area section-space theme-bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="feature__sec-wrapper mb-20">
                        <div className="section__title-wrapper">
                            <div className="section__title-wrapper mb-15">
                                <span className="section__subtitle bg-field">OUR PROCESS</span>
                                <h3 className="feature__title">Working Steps</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="feature__item  wow fadeIn" data-wow-delay=".3s" data-wow-duration="1s">
                            <span>STEP 1</span>
                            <h5 className="feature__title">Design Ideas</h5>
                            <p>Clearly outline the purpose of your project or product,set specific goals and idea</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="feature__item  wow fadeIn" data-wow-delay=".5s" data-wow-duration="1s">
                            <span>STEP 2</span>
                            <h5 className="feature__title">Development</h5>
                            <p>Begin by implementing the core features of your project and development</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="feature__item  wow fadeIn" data-wow-delay=".7s" data-wow-duration="1s">
                            <span>STEP 3</span>
                            <h5 className="feature__title">Maintenance</h5>
                            <p>Implement login to capture and analyze errors or unexpected behavior</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default PortfolioVideoFutureArea;