import blog_data from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LatestBlogOne = () => {
    return (
        <>
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6">
                    <div className="section__title-wrapper text-center section__title-space">
                        <span className="section__subtitle">MY BLOG</span>
                        <h2 className="section__title mb-20">Read My Latest Blog </h2>
                    </div>
                </div>
            </div>
            <div className="row g-30 wow fadeInUp" data-wow-delay=".3s">
                {
                    blog_data.slice(0, 2).map((item) => (
                        <div className="col-xl-6 col-lg-6 col-md-6" key={item.id}>
                            <section className="blog__wrap blog__item bg-solid">
                                <div className="blog__thumb is-hover">
                                    <Link href={`/blog/blog-details/${item.id}`}>
                                        <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                    </Link>
                                    <div className="blog__meta style-one">
                                        <h2 className="date">{item.date} <span className="month">{item.month}</span></h2>
                                    </div>
                                </div>
                                <div className="blog__content">
                                    <h4 className="blog__title small"><Link href={`/blog/blog-details/${item.id}`}>{item.blogTitle}</Link></h4>
                                    <p>{item.desc}</p>
                                    <div className="blog__btn-text">
                                        <Link href={`/blog/blog-details/${item.id}`} className="underline-btn">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default LatestBlogOne;