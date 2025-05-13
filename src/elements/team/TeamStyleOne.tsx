"use client"
import team_data from '@/data/team-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import "swiper/css/bundle"
import { imageLoader } from '@/hooks/ImageLoader';

const TeamStyleOne = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="swiper team__active">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            slidesPerView={1}
                            spaceBetween={30}
                            autoplay={{
                                delay: 4500,
                            }}
                            pagination={{
                                el: ".bd-swiper-dot-1",
                                clickable: true,
                            }}

                            breakpoints={{
                                1400: {
                                    slidesPerView: 4,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                576: {
                                    slidesPerView: 2,
                                },
                                500: {
                                    slidesPerView: 2,
                                }
                            }
                            }
                        >
                            {
                                team_data.slice(0, 6).map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="wow fadeInUp" data-wow-delay={item.wowDelay} data-wow-duration="1s">
                                            <div className="team__wrap team__item text-center">
                                                <div className="team__thumb bg-solid">
                                                    <Link href={`/team/team-details/${item.id}`}>
                                                        <Image src={item.image} loader={imageLoader} width={230} height={286} alt="image not found" />
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
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    {/* -- If we need pagination -- */}
                    <div className="pagination__wrapper">
                        <div className="bd-swiper-dot-1 text-center"></div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default TeamStyleOne;