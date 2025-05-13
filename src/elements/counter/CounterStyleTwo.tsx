import counter_data from '@/data/counter_data';
import React from 'react';
import CountUpContent from './CountUpContent';

const CounterStyleTwo = () => {
    return (
        <>
            <section className="bd-counter__area section-space theme-bg-secondary">
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
        </>
    );
};

export default CounterStyleTwo;