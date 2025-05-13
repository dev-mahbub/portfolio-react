"use client"
import blog_data from '@/data/blog-data';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const BlogPostboxItem = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModal = () => setIsOpen(!isOpen)
    return (
        <>
        {
            blog_data.slice(22, 24).map((item)=>(
                <article className="postbox__item" key={item.id}>
                <div className="postbox__thumb postbox__video p-relative">
                    <Link href={`/blog/blog-details/${item.id}`}>
                        <Image src={item.image} style={{width:"100%", height:"auto"}} placeholder='blur' loader={imageLoader} loading='lazy' alt="image not found" />
                    </Link>
                    {
                        item.videoId &&  <button onClick={() => { openVideoModal() }} className="play-btn pulse-btn popup-video"><i
                        className="fas fa-play"></i></button>
                    }
                   
                </div>
                <div className="postbox__content theme-bg-secondary">
                    <div className="postbox__meta">
                        <span>
                            <i className="fa-light fa-user"></i>
                          {item.authorName}
                        </span>
                        <span>
                            <i className="fa-light fa-calendar"></i>
                            {item.date}
                        </span>
                        <span>
                            <i className="fa-light fa-comment"></i>
                            {item.comment} Comments
                        </span>
                    </div>
                    <h4 className="postbox__title">
                        <Link href={`/blog/blog-details/${item.id}`}>{item.blogTitle}</Link>
                    </h4>
                    <div className="postbox__text">
                        <p>{item.desc}</p>
                    </div>
                    <div className="postbox__btn">
                        <Link className="bd-btn is-btn-anim" href={`/blog/blog-details/${item.id}`}>
                            <span className="bd-btn-inner">
                                <span className="bd-btn-normal">Know more</span>
                                <span className="bd-btn-hover">Know more</span>
                                <i className="contentHidden"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </article>
            ))
        }
             <ModalVideo channel="youtube" isOpen={isOpen} videoId="vWLcyFtni6U" onClose={() => setIsOpen(false)} />
        </>
    );
};

export default BlogPostboxItem;