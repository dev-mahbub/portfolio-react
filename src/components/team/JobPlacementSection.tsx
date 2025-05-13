import services_data from '@/data/services-data';
import Link from 'next/link';
import React from 'react';

const JobPlacementSection = () => {
    const jobPlacementData = [
        { id: 1, title: "UX/UI Designer", date: "12 Jun, 2023", vacancies: 3 },
        { id: 2, title: "Senior Developer", date: "15 Mar, 2022", vacancies: 2 },
        { id: 3, title: "Product Designer", date: "12 Jun, 2023", vacancies: 3 },
        { id: 4, title: "Developer", date: "19 Jun, 2022", vacancies: 5 },
    ]
    return (
        <>
            <section className="bd-job__area section-space theme-bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                            <div className="section__title-wrapper section__title-space">
                                <span className="section__subtitle sec-border">OUR JOB</span>
                                <h2 className="section__title mb-20">Open Job Placement</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        {
                            services_data.slice(52, 56).map((item) => (
                                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                    <div className="job__item-wrapper">
                                        <div className="job__content">
                                            <h5 className="job__title">
                                                <Link href={`/service-details/${item.id}`}>UX/UI Designer</Link>
                                            </h5>
                                            <div className="job__vacancies">
                                                <span>{item.date}</span>
                                                <p>No of vacancies: {item.vacancies}</p>
                                            </div>
                                            <div className="job__meta-wrapper">
                                                <div className="job__meta-item">
                                                    <span>
                                                        <i className="fa-sharp fa-regular fa-timer"></i>
                                                        {item.desc}
                                                    </span>
                                                </div>
                                                <div className="job__meta-item">
                                                    <span>
                                                        <i className="fa-sharp fa-regular fa-location-dot"></i>
                                                        Hawthorne,Uk
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job__btn">
                                            <Link className="bd-btn is-btn-anim bordered-blue" href="/contact">
                                                <span className="bd-btn-inner">
                                                    <span className="bd-btn-normal">Know more</span>
                                                    <span className="bd-btn-hover">Know more</span>
                                                    <i className="contentHidden"></i>
                                                </span>
                                            </Link>
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

export default JobPlacementSection;