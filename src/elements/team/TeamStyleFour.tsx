"use client"
import React from 'react';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css/bundle"
import Link from 'next/link';
import team_data from '@/data/team-data';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';

const TeamStyleFour = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="swiper team__active-two">
                        <div className="wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 4500,
                                }}
                                navigation={{
                                    nextEl: ".team__button-next",
                                    prevEl: ".team__button-prev",
                                }}
                                pagination={{
                                    el: ".bd-swiper-dot",
                                    clickable: true,
                                }}
                                breakpoints={{
                                    1400: {
                                        slidesPerView: 3,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    576: {
                                        slidesPerView: 1,
                                    },
                                    0: {
                                        slidesPerView: 1,
                                    },
                                }}
                            >
                                {
                                    team_data.slice(18, 24).map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="team__wrap team__item text-center style-four">
                                                <div className="team__thumb bg-solid">
                                                    <Link href={`/team/team-details/${item.id}`}>
                                                        <Image src={item.image} loader={imageLoader} width={300} height={372} alt="image not found" />
                                                    </Link>
                                                </div>
                                                <div className="team__content">
                                                    <h6 className="team__title"><Link href={`/team/team-details/${item.id}`}>{item.authorName}</Link></h6>
                                                    <span className="team__designation">{item.desination}</span>
                                                    <div className="team__social">
                                                        <ul>
                                                            {
                                                                item.socialIcon.map((social) => (
                                                                    <li key={social.id}><Link href={social.url}><i
                                                                        className={social.icon}></i></Link></li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamStyleFour;