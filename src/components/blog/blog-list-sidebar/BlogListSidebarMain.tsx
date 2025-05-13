"use client"
import BreadcrumbOne from '@/elements/breadcrumb/BreadcrumbOne';
import breadcrumbBg from '../../../../public/assets/images/breadcrumb/breadcrumb-bg-05.png';
import React from 'react';
import PaginationItems from '@/components/common/pagination/Pagination';
import blog_data from '@/data/blog-data';
import Link from 'next/link';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import BlogListSidebar from './BlogListSidebar';
const BlogListSidebarMain = () => {
    return (
        <>
              {/* bradcrumb area start */}
              <BreadcrumbOne title="Blog List" subTitle='Blog List' menuItem='Blog' menuItemUrl='/blog' breadcrumbImg={breadcrumbBg} spacingStyle='style-one' rowWrapperClass='col-xxl-7 col-xl-7 col-lg-8' />
            {/* bradcrumb area start */}
            {/* blog list area start */}
            <section className="postbox__area section-space">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                        <div className="section__title-wrapper section__title-space">
                            <h2 className="section__title">Read My Latest Article</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-xxl-8 col-lg-8">
                        <div className="blog__list-wrapper">
                            <div className="row g-5">
                                {
                                    blog_data.slice(53, 59).map((item)=>(
                                        <div className="col-xl-12 col-lg-12 col-md-6" key={item.id}>
                                        <div className="blog__wrap blog__item style-seven bg-solid wow fadeInUp"
                                            data-wow-delay=".3s">
                                            <div className="blog__thumb is-hover">
                                                <Link href={`/blog/blog-details/${item.id}`}>
                                                <Image src={item.image} style={{width:"100%", height:"100%"}} placeholder='blur' loader={imageLoader} loading='lazy' alt="image not found" />
                                                </Link>
                                                <div className="blog__tag">
                                                    <Link href="#">{item.blogTag}</Link>
                                                </div>
                                            </div>
                                            <div className="blog__content ">
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
                                                <p>{item.desc}</p>
                                                <div className="blog-btn-text">
                                                    <Link href={`/blog/blog-details/${item.id}`} className="underline-btn">
                                                        Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl4 col-lg-4">
                     <BlogListSidebar/>
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

export default BlogListSidebarMain;