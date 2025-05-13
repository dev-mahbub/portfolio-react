import counter_data from '@/data/counter_data';
import CountUpContent from '@/elements/counter/CountUpContent';
import React from 'react';

const PortfolioDetailsCounter = () => {
    return (
        <>
                <section className="bd-counter__area section-space theme-bg-secondary">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="counter__info-title text-center mb-30">
                                <p>We completed <span>1000+</span> projects yearly successfully & counting</p>
                            </div>
                        </div>
                    </div>
                    <section className="bd-counter__area theme-bg-secondary">
                <div className="container">
                    <div className="counter__wrapper style-three">
                        <div className="row g-5">
                            {
                                counter_data.slice(4, 8).map((item) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={item.id}>
                                        <div className="counter__item bordered-style wow fadeIn" data-wow-delay={item.wowDelay}
                                            data-wow-duration="1s">
                                            <div className="counter__icon bg-primary-opacity">
                                                <i className={item.icon}></i>
                                            </div>
                                            <div className="counter__content">
                                                <h2 className="counter__title"><span className="counter"><CountUpContent number={item.cunterNum} text={item.text} /></span></h2>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
                </div>
            </section>
        </>
    );
};

export default PortfolioDetailsCounter;