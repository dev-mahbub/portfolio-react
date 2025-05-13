import React from 'react';
import CountUpContent from './CountUpContent';

const CounterStyleThree = () => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="counter-wapper text-center">
                        <div className="counter__wrap">
                            <h2 className="counter__title"><span className="counter"><CountUpContent number={10} /></span></h2>
                            <div className="counter__details">
                                <p>Year <br /> Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CounterStyleThree;