import Link from 'next/link';
import React from 'react';
import ServiceSidebarWiget from './ServiceSidebarWiget';
import Image from 'next/image';
import serviceDetailsImg from '../../../../public/assets/images/service/services-details-01.png';
import ServiceProgressList from './ServiceProgressList';
import services_data from '@/data/services-data';
import { TService } from '@/interFace/type';

const ServiceDetailsArea = ({ id }: { id: number }) => {
    const service: TService | undefined = services_data.find((item) => item.id == id);

    return (
        <>
            <section className="bd__service-area section-space">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-4 col-lg-5">
                            <ServiceSidebarWiget />
                        </div>
                        <div className="col-xl-8 col-lg-7 order-first order-lg-last">
                            <div className="service__details-wrapper">
                                <h2 className="service__details-title mb-25">{service?.title} <br /> The Service We Provide.
                                </h2>
                                <p>We embrace holistic development and support for employees with the aim of being a
                                    first-choice
                                    employer within our sectors. Through a unique combination of engineering, construction
                                    and
                                    design disciplines and expertise.</p>
                                <div className="service__details-thumb">
                                    <Image src={serviceDetailsImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                </div>
                                <div className="service__details-text">
                                    <h5 className=" mb-15">We Unlock Potential</h5>
                                    <p>Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst car boot
                                        a load of old tosh is cracking goal blow off telling brown. </p>
                                    <p>Brolly show off show off pick your nose and blow off well A bit of how’s your father
                                        tomfoolery blimey, me old mucker starkers Queen’s English dropped a clanger bite
                                        your arm spiffing good time burke Why chancer. Hotpot bum bag cracking goal young
                                        delinquent naff bugger cup of chars bender loo it’s all gone to pot the nancy
                                        cheeky. </p>
                                    <p>At public school cras bog some dodgy chav Richard Why argy bargy vagabon William
                                        bender matie boy, off his nut chancer Jeffrey up the kyver say mufty you mug ummm
                                        telling pear shaped Oxford owt to do with me do one so said are you taking his. </p>
                                </div>
                                <div className="service__details-progress">
                                    <h5 className=" mb-15">Services Process</h5>
                                    <p>Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst car boot
                                        a load of old tosh is cracking goal blow off telling brown. </p>
                                    <div className="service__details-progress-list">
                                        <ServiceProgressList />
                                    </div>
                                </div>
                            </div>
                            <div className="service__details-sec text-center mt-50">
                                <h2 className="service__details-title mb-25">Our Featured Service</h2>
                            </div>
                            <div className="service__details-item">
                                {
                                    services_data.slice(48, 52).map((item) => (
                                        <div className="service__wrapper service__item style-seven bg-solid" key={item.id}>
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
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsArea;