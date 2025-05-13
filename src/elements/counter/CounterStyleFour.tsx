import counter_data from '@/data/counter_data';
import React from 'react';
import CountUpContent from './CountUpContent';

const CounterStyleFour = () => {
    return (
        <>
            <div className="counter__wrapper style-four">
                <div className="counter__shape">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="row g-5">
                    {
                        counter_data.slice(8, 12).map((item) => (
                            <div className="col-lg-3 col-md-4" key={item.id}>
                                <div className="counter__item">
                                    <div className="counter__content">
                                        <h2 className="counter__title"><span className="counter"><CountUpContent number={item.cunterNum} text='%' /></span></h2>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default CounterStyleFour;