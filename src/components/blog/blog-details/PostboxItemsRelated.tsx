import blog_data from '@/data/blog-data';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PostboxItemsRelated = () => {
    return (
        <>
            <div className="postbox__related">
                <h4 className="postbox__related-title mb-35">You May Also Like</h4>
                <div className="row g-5">
                    {
                        blog_data.slice(59, 61).map((item)=>(
                            <div className="col-xl-6 col-lg-12 col-md-6 wow fadeInUp"
                            data-wow-delay={item.wowDelay} key={item.id}>
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
                                        <Link className="bd-btn bordered-light is-btn-anim"
                                            href={`/blog/blog-details/${item.id}`}>
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
        </>
    );
};

export default PostboxItemsRelated;