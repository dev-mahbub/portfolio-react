import pricing_data from '@/data/pricing-data';
import Link from 'next/link';
import React from 'react';

const PricingStyleThree = () => {
    return (
        <>
            <div className="row g-5  wow fadeInUp" data-wow-delay=".3s">
                {
                    pricing_data.slice(6, 9).map((item) => (
                        <div className="col-xl-4 col-lg-6 col-md-6" key={item.id}>
                            <div className={`pricing__wrapper pricing__item style-two ${item.activeClass}`}>
                                <div className="pricing__content">
                                    <h5 className="large pricing__title">{item.pricingTitle}</h5>
                                    <p className="pricing__description">{item.desc}</p>
                                    <h2 className="pricing__amount">
                                        <span className="dollar-sign color-primary">$</span>{" "}
                                        {item.price}{" "}
                                        <span className="duration">/monthly</span>
                                    </h2>
                                </div>
                                <div className="pricing__btn">
                                    <Link className={` ${item.btnColor ? `${item.btnColor} bd-btn` : "bd-btn"}`} href="/contact">Choose this Package</Link>
                                </div>
                                <div className="pricing__feature">
                                    <ul className="pricing__list">
                                        {
                                            item.pricingList.map((list) => (
                                                <li key={list.id}>
                                                    <i className="fa-regular fa-check"></i>
                                                    <p>{list.listName}</p>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default PricingStyleThree;