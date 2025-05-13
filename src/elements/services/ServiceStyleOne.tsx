import services_data from '@/data/services-data';
import Link from 'next/link';
import React from 'react';

const ServiceStyleOne = () => {
    return (
        <>
            <div className="row g-5">
                {
                    services_data.slice(0, 6).map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={item.wowDelay} data-wow-duration="1s">
                            <div className="service__wrapper service__item bg-solid bordered-style">
                                <div className="service__shape"></div>
                                <div className="service__shape-2"></div>
                                <span className="service__icon-wrap">
                                    <i className={item.icon}></i>
                                </span>
                                <div className="service__content">
                                    <h5 className="service__title"><Link href={`/service/service-details/${item.id}`}>{item.title}</Link></h5>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default ServiceStyleOne;