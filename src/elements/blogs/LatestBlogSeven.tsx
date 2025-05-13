import blog_data from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LatestBlogSeven = () => {
    return (
        <>
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-5 col-lg-7 col-md-8 col-sm-10">
                    <div className="section__title-wrapper text-center section__title-space">
                        <span className="section__subtitle bg-field">MY BLOG</span>
                        <h2 className="section__title mb-20">Read My Latest Blog</h2>
                        <p className="section__paragraph">Storytelling has long been a powerful tool in design, and {`it's`}
                            taken to the next level in 2023. Designers are</p>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                {
                    blog_data.slice(17, 19).map((item) => (
                        <div key={item.id} className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={item.wowDelay} data-wow-duration="1s">
                            <div className="blog__wrap blog__item style-seven bg-solid">
                                <div className="blog__thumb is-hover">
                                    <Link href={`/blog/blog-details/${item.id}`}>
                                        <Image src={item.image} style={{ width: "100%", height: "100%" }} alt="image not found" />
                                    </Link>
                                    <div className="blog__tag">
                                        <Link href={`/blog/blog-details/${item.id}`}>{item.blogTag}</Link>
                                    </div>
                                </div>
                                <div className="blog__content">
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
                                    <h5 className="blog__title large"><Link href={`/blog/blog-details/${item.id}`}>{item.blogTitle}</Link></h5>
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
        </>
    );
};

export default LatestBlogSeven;