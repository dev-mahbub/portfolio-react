import services_data from '@/data/services-data';
import Link from 'next/link';
import React from 'react';

const ServiceStyleSeven = () => {
    return (
        <>
            <div className="row g-5 wow fadeInUp" data-wow-delay=".3s">
                {
                    services_data.slice(29, 32).map((item) => (
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={item.icon} data-wow-duration="1s" key={item.id}>
                            <div className="service__wrapper service__item style-seven bg-solid">
                                <div className="contentHidden"></div>
                                <div className="contentHidden"></div>
                                <span className="service__icon-wrap">
                                    <i className={item.icon}></i>
                                </span>
                                <div className="service__content">
                                    <h5 className="service__title"><Link href={`/service/service-details/${item.id}`}>{item.title}</Link></h5>
                                    <p>{item.desc}</p>
                                    <div className="service__more">
                                        <Link className="bd-text-btn style-two" href={`/service/service-details/${item.id}`}>Read More <span
                                            className="icon__box">
                                            <i className="fa-regular fa-arrow-right-long icon__first"></i>
                                            <i className="fa-regular fa-arrow-right-long icon__second"></i>
                                        </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default ServiceStyleSeven;