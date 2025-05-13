"use client"
import Link from 'next/link';
import React from 'react';
import SliderImg1 from '../../../../public/assets/images/blog/post/slider/postblog-slider-01.png';
import SliderImg2 from '../../../../public/assets/images/blog/post/slider/postblog-slider-02.png';
import SliderImg3 from '../../../../public/assets/images/blog/post/slider/postblog-slider-03.png';
import Image, { StaticImageData } from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import "swiper/css/bundle"

type TItem = {
    id: number,
    image: StaticImageData
}

const BlogItemSlider = () => {
    const itemData: TItem[] = [
        { id: 1, image: SliderImg1 },
        { id: 2, image: SliderImg2 },
        { id: 3, image: SliderImg3 },
    ]
    return (
        <>
            <article className="postbox__item">
                <div className="postbox__slider swiper p-relative">
                    <Swiper
                    modules={[Autoplay, Navigation]}
                    autoplay={{
                        delay:3000
                    }}
                    navigation={{
                        prevEl:".postbox__button-prev",
                        nextEl:".postbox__button-next"
                    }}
                    >
                    {
                        itemData.map((item) => (
                           <SwiperSlide key={item.id}>
                             <div className="postbox__slider-item">
                                <Image src={item.image} style={{width:"100%", height:"auto"}} loader={imageLoader} loading='lazy' placeholder='blur'
                                    alt="image not found" />
                            </div>
                           </SwiperSlide>
                        ))
                    }
                    </Swiper>

                    {/* -- If we need navigation buttons -- */}
                    <div className="postbox__navigation">
                        <button className="postbox__button-prev circle-btn slider__nav-btn"><i
                            className="fa-regular fa-arrow-left-long"></i></button>
                        <button className="postbox__button-next circle-btn ml-5 slider__nav-btn"><i
                            className="fa-regular fa-arrow-right-long"></i></button>
                    </div>
                </div>
                <div className="postbox__content theme-bg-secondary">
                    <div className="postbox__meta">
                        <span>
                            <i className="fa-light fa-user"></i>
                            Allex Berly
                        </span>
                        <span>
                            <i className="fa-light fa-calendar"></i>
                            Nov 12, 2023
                        </span>
                        <span>
                            <i className="fa-light fa-comment"></i>
                            10 Comments
                        </span>
                    </div>
                    <h4 className="postbox__title">
                        <Link href="/blog-details">How to Design Your Project Faster and More
                            Efficiently</Link>
                    </h4>
                    <div className="postbox__text">
                        <p>Some of the employees in your workforce are already digitally-savvy and
                            actively pursue new training and in-demand skills on their own. These
                            employees are valuable, but research demonstrates that you may lose them if
                            you don’t allow them the opportunity to improve their skills further. Should
                            be possible as long as the training is available to upskill employees in the
                            required skills. </p>
                    </div>
                    <div className="postbox__btn">
                        <Link className="bd-btn is-btn-anim" href="/blog-details">
                            <span className="bd-btn-inner">
                                <span className="bd-btn-normal">Know more</span>
                                <span className="bd-btn-hover">Know more</span>
                                <i className="contentHidden"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogItemSlider;