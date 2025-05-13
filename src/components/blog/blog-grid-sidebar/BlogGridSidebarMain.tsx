"use client"
import React from 'react';
import breadcrumbBg from '../../../../public/assets/images/breadcrumb/breadcrumb-bg-05.png';
import BreadcrumbOne from '@/elements/breadcrumb/BreadcrumbOne';
import PaginationItems from '@/components/common/pagination/Pagination';
import BlogSidebar from '../blog/BlogSidebar';
import blog_data from '@/data/blog-data';
import Link from 'next/link';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
const BlogGridSidebarMain = () => {
    return (
        <>
            {/* bradcrumb area start */}
            <BreadcrumbOne title="Blog Grid" subTitle='Blog Grid' menuItem='Blog' menuItemUrl='/blog' breadcrumbImg={breadcrumbBg} spacingStyle='style-one' rowWrapperClass='col-xxl-7 col-xl-7 col-lg-8' />
            {/* bradcrumb area start */}
            <section className="postbox__area section-space">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                        <div className="section__title-wrapper section__title-space">
                            <h2 className="section__title">Read My Latest Article</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-xxl-8 col-lg-8">
                        <div className="row g-5 wow fadeInUp" data-wow-delay=".3s">
                            {
                                blog_data.slice(36, 44).map((item)=>(
                                    <div className="col-lg-6 col-md-6" key={item.id}>
                                    <div className="blog__wrap blog__item style-five">
                                        <div className="blog__thumb is-hover">
                                            <Link href={`/blog/blog-details/${item.id}`}>
                                            <Image src={item.image} style={{width:"100%", height:"auto"}} placeholder='blur' loader={imageLoader} loading='lazy' alt="image not found" />
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
                        </div>
                    </div>
                    <div className="col-xxl4 col-lg-4">
                    <BlogSidebar/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-6">
                        <div className="pagination__wrapper">
                            <div className="bd-basic__pagination style-2">
                             <PaginationItems/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default BlogGridSidebarMain;