import services_data from '@/data/services-data';
import Link from 'next/link';
import React from 'react';

const ServiceStyleFour = () => {
    return (
        <>
            <div className="row g-5">
                {
                    services_data.slice(15, 19).map((item) => (
                        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={item.wowDelay}
                            data-wow-duration="1s" key={item.id}>
                            <div className="service__wrapper service__item style-four text-center">
                                <div className="contentHidden"></div>
                                <div className="contentHidden"></div>
                                <span className="service__icon-wrap">
                                    <i className={item.icon}></i>
                                </span>
                                <div className="service__content">
                                    <h5 className="service__title"><Link href={`/service/service-details/${item.id}`}>{item.title}</Link></h5>
                                    <p>{item.desc}</p>
                                    <div className="service__more">
                                        <Link className="circle-btn" href={`/service/service-details/${item.id}`}> <span className="icon__box"><i
                                            className="fa-regular fa-arrow-right-long"> </i></span></Link>
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

export default ServiceStyleFour;