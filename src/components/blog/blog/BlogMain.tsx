
import BreadcrumbOne from '@/elements/breadcrumb/BreadcrumbOne';
import breadcrumbBg from '../../../../public/assets/images/breadcrumb/breadcrumb-bg-05.png';
import postboxQuote from '../../../../public/assets/images/shape/postbox-quote.png';
import React from 'react';
import BlogSidebar from './BlogSidebar';
import Image from 'next/image';
import BlogPostboxItem from './BlogPostboxItem';
import BlogItemSlider from './BlogItemSlider';
import PaginationItems from '@/components/common/pagination/Pagination';

const BlogMain = () => {
    return (
        <>
            {/* bradcrumb area start */}
            <BreadcrumbOne title="Blog Standard" subTitle='Blog Standard' menuItem='Blog' menuItemUrl='/blog' breadcrumbImg={breadcrumbBg} spacingStyle='style-one' rowWrapperClass='col-xxl-7 col-xl-7 col-lg-8' />
            {/* bradcrumb area start */}
            <section className="postbox__area section-space">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-lg-8">
                        <div className="postbox__wrapper">
                           <BlogPostboxItem/>
                            <article className="postbox__item">
                                <div className="postbox__quote theme-bg-secondary">
                                    <div className="postbox__quote-thumb">
                                        <Image src={postboxQuote} style={{width:"100%", height:"auto"}} alt="image not found"/>
                                    </div>
                                    <div className="postbox__quote-content">
                                        <span>Motivational Quote</span>
                                        <h5>“You have to be burning with an idea, or a problem, or a wrong that you want
                                            to right. If you’re not passion enough from the start,never stick it out.” .
                                        </h5>
                                        <cite>Steve Jobs</cite>
                                    </div>
                                </div>
                            </article>
                          <BlogItemSlider/>
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

export default BlogMain;