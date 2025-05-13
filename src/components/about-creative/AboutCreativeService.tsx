import services_data from '@/data/services-data';
import Link from 'next/link';
import React from 'react';

const AboutCreativeService = () => {
    return (
        <>
            <section className="bd-service__area section-space">
                <div className="container">
                    <div className="row g-5">

                        {
                            services_data.slice(44, 48).map((item) => (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={item.id}>
                                    <div className="service__wrapper service__item style-seven bg-solid text-center is-padding-reduce is-transition wow fadeIn"
                                        data-wow-delay={item.wowDelay}>
                                        <span className="service__icon-wrap">
                                            <i className="icon-animation"></i>
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
                </div>
            </section>
        </>
    );
};

export default AboutCreativeService;