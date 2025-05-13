import SocialIcon from '@/components/common/social-icon/SocialIcon';
import BreadcrumbTwo from '@/elements/breadcrumb/BreadcrumbTwo';
import Image from 'next/image';
import React from 'react';
import CounterStyleOne from '@/elements/counter/CounterStyleOne';
import TeamDetailsPortfolio from './TeamDetailsPortfolio';
import { TTeam } from '@/interFace/type';
import team_data from '@/data/team-data';

const TeamDetailsMain = ({ id }: { id: number }) => {
    const team: TTeam | undefined = team_data.find((item) => item.id == id);
    return (
        <>
            {/* bradcrumb area */}
            <BreadcrumbTwo title='Know About Myself' subTitle='TEAM DETAILS' rowWrapperClass="col-xxl-8 col-xl-8 col-lg-8" />
            {/* bradcrumb area end */}
            <section className="bd-team-details__area section-space">
                <div className="container">
                    <div className="team__details-wrapper">
                        <div className="row g-5 align-items-center">
                            <div className="col-xl-4 col-lg-4 col-md-5">
                                <div className="team__details-thumb bg-solid">
                                    {team?.image &&
                                        <Image src={team?.image} style={{ width: "100%", height: "100%" }} alt="image not found" />
                                    }
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7">
                                <div className="team__details-content">
                                    <div className="team__details-author">
                                        <h3 className="team__details-title">{team?.authorName}</h3>
                                        <span className="team__details-designation">{team?.desination}</span>
                                    </div>
                                    <p>As a {team?.desination}, {`you're`} a master of crafting user experiences, blending creativity with functionality to create impactful designs that resonate deeply with users.</p>
                                    {/* -- social -- */}
                                    <div className="theme__social">
                                        <SocialIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -- counter area start -- */}
            <section className="bd-counter__area section-space theme-bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section__title-wrapper section__title-space">
                                <span className="section__subtitle bg-field">Design experience</span>
                                <h2 className="section__title">Design Skills</h2>
                            </div>
                        </div>
                    </div>
                    <CounterStyleOne />
                </div>
            </section>
            {/* counter area end */}
            <TeamDetailsPortfolio />
        </>
    );
};

export default TeamDetailsMain;