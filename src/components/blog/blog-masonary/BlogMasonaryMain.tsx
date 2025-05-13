"use client"
import blog_data from '@/data/blog-data';
import ShapeLineImg from '../../../../public/assets/images/shape/four-line-shape-2.png';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { imageLoader } from '@/hooks/ImageLoader';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const BlogMasonaryMain = () => {
    return (
        <>
            {/* breadcrumb area */}
            <section className="breadcrumb__area section-space theme-bg-secondary p-relative">
                <div className="breadcrumb__shape-wrapper">
                    <div className="breadcrumb__shape-two">
                        <Image src={ShapeLineImg} width={84} height={84} alt="image not found" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-8 col-lg-8 col-md-10">
                            <div className="breadcrumb__content-wrapper">
                                <div className="breadcrumb__title-wrapper">
                                    <h1 className="breadcrumb__title mb-25">Improving Digital Agency & Portfolio</h1>
                                </div>
                                <div className="breadcrumb__menu">
                                    <nav>
                                        <ul>
                                            <li><span><Link href="/">Home</Link></span></li>
                                            <li><span><Link href="/blog">Blog</Link></span></li>
                                            <li><span>Blog Masonary</span></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb area end */}
            {/* -- blog area start -- */}
            <div className="bd-blog__area section-space">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle bg-field">OUR BLOG</span>
                                <h2 className="section__title">Read My Latest Article</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 grid wow fadeInUp" data-wow-delay=".3s">
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                            <Masonry gutter='30px'>
                        {
                            blog_data.slice(44, 53).map((item) => (
                                <div key={item.id}>
                                    <div className="blog__wrap blog__item style-five">
                                        <div className="blog__thumb is-hover">
                                            <Link href={`/blog/blog-details/${item.id}`}>
                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} placeholder='blur' loader={imageLoader} loading='lazy' alt="image not found" />
                                            </Link>
                                            <div className="blog__tag">
                                                <Link href="#">{item.blogTag}</Link>
                                            </div>
                                        </div>
                                        <div className="blog__content bg-solid">
                                            <div className="blog__meta">
                                                <span>
                                                    <i className="fa-light fa-calendar"></i>
                                                    {item.date}
                                                </span>
                                                <span>
                                                    <i className="fa-light fa-comment"></i>
                                                    {item.comment} Comments
                                                </span>
                                            </div>
                                            <h5 className="blog__title"><Link href={`/blog/blog-details/${item.id}`}>{item.blogTitle}</Link></h5>
                                            <div className="blog__btn">
                                                <Link className="bd-btn bordered-light is-btn-anim" href={`/blog/blog-details/${item.id}`}>
                                                    <span className="bd-btn-inner">
                                                        <span className="bd-btn-normal">Read More</span>
                                                        <span className="bd-btn-hover">Read More</span>
                                                        <i className="contentHidden"></i>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                             </Masonry>
                        </ResponsiveMasonry>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xxl-6">
                            <div className="load__more-wrapper">
                                <div className="load__more-btn text-center">
                                    <Link className="bd-btn bordered-blue" href="/blog">
                                        <span>Load More<span className="load__more-icon"></span></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -- blog area end -- */}
        </>
    );
};

export default BlogMasonaryMain;