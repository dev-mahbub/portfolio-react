import blog_data from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LatestBLogFive = () => {

    return (
        <>
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                    <div className="section__title-wrapper text-center section__title-space">
                        <span className="section__subtitle bg-field">OUR BLOG</span>
                        <h2 className="section__title mb-20">Read My Latest Article</h2>
                        <p className="section__paragraph">Storytelling has long been a powerful tool in design, and {`it's`}
                            taken to the next level in 2023. Designers are</p>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                {
                    blog_data.slice(11, 14).map((item) => (
                        <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={item.wowDelay} data-wow-duration="1s">
                            <div className="blog__wrap blog__item style-five">
                                <div className="blog__thumb is-hover">
                                    <Link href={`/blog/blog-details/${item.id}`}>
                                        <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
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
                                    <h5 className="blog__title"><Link href={`/blog/blog-details/${item.id}`}>{item.blogTitle}</Link>
                                    </h5>
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
        </>
    );
};

export default LatestBLogFive;