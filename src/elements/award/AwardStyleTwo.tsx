"use client"
import React from 'react';
import services_data from '@/data/services-data';
import Link from 'next/link';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Image from 'next/image';

const AwardStyleTwo = () => {
    const renderTooltipContent = (tooltipData: any) => {
        if (tooltipData?.desc?.includes("use client")) {
            return "";
        } else if (tooltipData.bgImage) {
            return <Image src={tooltipData.bgImage} alt={tooltipData.title} width={250} height={270} />;
        }
        return "";
    };
    return (
        <>

            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section__title-wrapper text-center section__title-space">
                        <div className="section__title-wrapper">
                            <span className="section__subtitle bg-field">Achievement</span>
                            <h2 className="section__title">Our Awards</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="award__item-wrapper">
                    {services_data.slice(40, 44).map((item) => (
                        <div key={item.id} className="award__single-item wow fadeInUp" data-wow-delay={item.wowDelay} data-wow-duration="1s">
                            <div className="award__content">
                                <h5 className="award__title"><Link href={`/service/service-details/${item.id}`}>{item.title}</Link></h5>
                                <span className="award__meta">{item.year}</span>
                            </div>
                            <div className="award__text">
                                <p data-tooltip-id={item.tooltipId} className="award__text bd-img-reveal bd-img-reveal-item">
                                    {item.desc}
                                </p>
                                <ReactTooltip
                                    id={item.tooltipId}
                                    place="bottom"
                                    render={() => renderTooltipContent(item)}
                                />
                            </div>
                            <div className="award__btn">
                                <Link className="circle-btn is-large" href={`/service/service-details/${item.id}`}>
                                    <span className="icon__box">
                                        <i className="fa-regular fa-arrow-right-long"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AwardStyleTwo;
