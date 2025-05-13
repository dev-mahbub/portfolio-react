import React from 'react';
import CountUpContent from './CountUpContent';
import Image from 'next/image';
import counter_data from '@/data/counter_data';

const CounterStyleOne = () => {
    return (
        <>
            <div className="row g-5">
                {
                    counter_data.slice(0, 4).map((item) => (
                        <div className="col-lg-3 col-md-4 col-md-6 col-sm-6" key={item.id}>
                            <div className="skill__wrapper skill__item wow fadeIn" data-wow-delay={item.wowDelay}>
                                <div className={`skill__icon-thumb ${item.bgColor}`}>
                                    {item.image &&
                                        <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="img not found" />}
                                </div>
                                <div className="skill__content">
                                    <h3><span className="counter"><CountUpContent number={item.cunterNum} text='%' /></span></h3>
                                    <span className="skill__name">{item.skillName}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default CounterStyleOne;