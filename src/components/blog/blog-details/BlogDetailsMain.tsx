"use client"
import React from 'react';
import PostboxItemsRelated from './PostboxItemsRelated';
import BlogCommentArea from './BlogCommentArea';
import BlogSidebar from '../blog/BlogSidebar';
import SocialIcon from '@/components/common/social-icon/SocialIcon';
import Link from 'next/link';
import userImg from '../../../../public/assets/images/user/user-03.png';
import userImg2 from '../../../../public/assets/images/user/user-07.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import PostboxContent from './PostboxContent';
import PostboxNavigation from './PostboxNavigation';
import PostboxShereTag from './PostboxShereTag';
import LeaveReplyForm from '@/elements/form/LeaveReplyForm';
import { TBlog } from '@/interFace/type';
import blog_data from '@/data/blog-data';

const BlogDetailsMain = ({id}:{id:number}) => {
    const blog: TBlog | undefined = blog_data.find((item) => item.id == id);
    return (
        <>
                <section className="postbox__area section-space">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-10 col-md-10">
                        <div className="section__title-wrapper section__title-space">
                            <h2 className="section__title">{blog?.blogTitle}</h2>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-xxl-12">
                        <div className="postbox__wrapper style-two">
                            <div className="row g-5">
                                <div className="col-lg-8">
                                    <div className="postbox__top">
                                        <div className="postbox__thumb">
                                           {blog?.image &&
                                            <Image src={blog?.image} style={{width:"100%", height:"auto"}} placeholder='blur' loader={imageLoader} loading='lazy' alt="image not found" />
                                           }
                                        </div>
                                    </div>
                                    <div className="postbox__main-wrapper">
                                        <div className="postbox__meta-wrapper">
                                            <div className="postbox__meta-item">
                                                <div className="postbox__meta-author">
                                                    <div className="postbox__meta-author-thumb">
                                                        <Link href="#">
                                                            <Image src={userImg} style={{width:"100%", height:"auto"}}
                                                                alt="image not found"/>
                                                        </Link>
                                                    </div>
                                                    <div className="postbox__meta-content">
                                                        <span className="postbox__meta-type">Author</span>
                                                        <p className="postbox__meta-name">Alex Wick</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="postbox__meta-item">
                                                <div className="postbox__meta-content">
                                                    <span className="postbox__meta-type">Published</span>
                                                    <p className="postbox__meta-name">March 24, 2023</p>
                                                </div>
                                            </div>
                                            <div className="postbox__meta-item">
                                                <div className="postbox__meta-content">
                                                    <span className="postbox__meta-type">3 Comments</span>
                                                    <p className="postbox__meta-name"><Link href="#">Join the Conversation</Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="postbox__meta-item">
                                                <div className="postbox__meta-content">
                                                    <span className="postbox__meta-type">View</span>
                                                    <p className="postbox__meta-name">10,236 views</p>
                                                </div>
                                            </div>
                                        </div>
                                     <PostboxContent/>
                                        <PostboxNavigation/>
                                    <PostboxShereTag/>
                                        <div className="postbox__author">
                                            <div className="postbox__author-thumb">
                                                <Link href="#">
                                                <Image src={userImg2} width={150} height={150}
                                                                alt="image not found"/>
                                                </Link>
                                            </div>
                                            <div className="postbox__author-content">
                                                <h6 className="postbox__author-title">
                                                    <Link href="#">Colene Landin</Link>
                                                </h6>
                                                <p>Digital content wrangler | UX enthusiast | Recovering educator & GIF
                                                    hockey fan Oxford comma or death.!</p>

                                                <div className="postbox__author-social">
                                                    <div className="theme__social">
                                                      <SocialIcon/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       <PostboxItemsRelated/>
                                        <div className="postbox__comment-wrapper">
                                          <BlogCommentArea/>

                                            <div className="postbox__comment-form">
                                                <h4 className="postbox__comment-form-title">Leave A Reply</h4>
                                                <p>Your email address will not be published. Required fields are marked
                                                    *</p>
                                        <LeaveReplyForm/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4">
                                    <BlogSidebar/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default BlogDetailsMain;