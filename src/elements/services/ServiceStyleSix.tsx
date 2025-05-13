import services_data from '@/data/services-data';
import Link from 'next/link';
import React from 'react';

const ServiceStyleSix = () => {
    return (
        <>
            <div className="row g-5">
                {
                    services_data.slice(25, 29).map((item) => (
                        <div key={item.id} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6  wow fadeInUp" data-wow-delay={item.wowDelay}
                            data-wow-duration="1s">
                            <div className="service__wrapper service__item style-six text-center">
                                <div className="contentHidden"></div>
                                <div className="contentHidden"></div>
                                <span className="service__icon-wrap is-icon-border">
                                    <i className={item.icon}></i>
                                </span>
                                <div className="service__content">
                                    <h5 className="service__title underline"><Link href={`/service/service-details/${item.id}`}>{item.title}</Link></h5>
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

export default ServiceStyleSix;