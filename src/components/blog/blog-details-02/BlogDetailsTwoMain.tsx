"use client"
import breadcrumbBg from '../../../../public/assets/images/breadcrumb/breadcrumb-bg-05.png';
import BreadcrumbOne from '@/elements/breadcrumb/BreadcrumbOne';
import React from 'react';
import BlogDetailsTwoSidebar from './BlogDetailsTwoSidebar';
import SocialIcon from '@/components/common/social-icon/SocialIcon';
import BlogDetailsPostRelated from './BlogDetailsPostRelated';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import blogImg from '../../../../public/assets/images/blog/post/blog-post-04.png';
import quoteImg from '../../../../public/assets/images/shape/testimonial-quote-02.png'
import userImg2 from '../../../../public/assets/images/user/user-07.png';
import PostboxNavigation from '../blog-details/PostboxNavigation';
import PostboxShereTag from '../blog-details/PostboxShereTag';
import Link from 'next/link';
import BlogCommentArea from '../blog-details/BlogCommentArea';
import LeaveReplyForm from '@/elements/form/LeaveReplyForm';

const BlogDetailsTwoMain = () => {
    return (
        <>
            {/* bradcrumb area start */}
            <BreadcrumbOne title="Blog Details 02" subTitle='Blog Details 02' menuItem='Blog' menuItemUrl='/blog' breadcrumbImg={breadcrumbBg} spacingStyle='style-one' rowWrapperClass='col-xxl-7 col-xl-7 col-lg-8' />
            {/* bradcrumb area start */}
            <section className="postbox__area section-space">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="postbox__wrapper style-three">
                                <div className="row g-5">
                                    <div className="col-lg-8">
                                        <div className="postbox__main-wrapper">
                                            <div className="postbox__details-content-wrapper">
                                                <h4 className="postbox__details-title">We are a creative studio specializing in
                                                    design, development and strategy many different skills and disciplines
                                                    in the production of all web.</h4>
                                                <p className="mb-20">One morning, when Gregor Samsa woke from troubled dreams,
                                                    he found himself transformed in his bed into a horrible vermin. He lay
                                                    on his armour-like back, and if he lifted his head a little he could see
                                                    his brown belly, slightly domed and divided by arches into stiff
                                                    sections. The bedding was hardly able to cover it and seemed ready to
                                                    slide off any moment.</p>
                                                <p className="mb-45">I should be incapable of drawing a single stroke at the
                                                    present moment; and yet I feel that never was a greater artist than now.
                                                </p>
                                                <div className="postbox__thumb-wrapper">
                                                    <div className="postbox__thumb">
                                                        <Image src={blogImg} style={{ width: "100%", height: "auto" }} placeholder='blur' loader={imageLoader} loading='lazy' alt="image not found" />
                                                    </div>
                                                </div>
                                                <p>His many legs, pitifully thin compared with the size of the rest of him,
                                                    waved about helplessly as he looked. {`"What's`} happened to {`me?"`} he
                                                    thought. It {`wasn't`} a dream. His room, a proper human room although a
                                                    little too small, lay peacefully between its four familiar walls. A
                                                    collection of textile samples lay spread out on the table - Samsa was a
                                                    travelling salesman - and above it there hung a picture that he had
                                                    recently cut out of an illustrated magazine.</p>
                                                <div className="postbox__quote is-bg-none">
                                                    <blockquote>
                                                        <div className="postbox__quote-icon">
                                                            <Image src={quoteImg} style={{ width: "100%", height: "auto" }}
                                                                alt="image not found" />
                                                        </div>
                                                        <p>““Believe in the magic within you. Your potential is limitless,
                                                            and every small step forward brings you closer to the
                                                            extraordinary””</p>
                                                    </blockquote>
                                                </div>
                                                <div className="postbox__features">
                                                    <h5 className="postbox__features-title">Learning from failure</h5>
                                                    <p>The European languages are members of the same family. Their separate
                                                        existence is a myth. For science europe uses the same vocabulary.
                                                    </p>

                                                    <ul>
                                                        <li>Get yourself comfortable.</li>
                                                        <li>Manage your workspace and organize your desk.</li>
                                                        <li>Keep In touch with your co-workers.</li>
                                                    </ul>
                                                </div>
                                                <p>The new common language will be more simple and regular than the existing
                                                    European languages. It will be as simple as Occidental; in fact, it will
                                                    be Occidental. To an English person, it will seem like simplified
                                                    English, as a skeptical Cambridge friend of mine told me what Occidental
                                                    is. The European languages are members of the same family.</p>

                                            </div>
                                            <PostboxNavigation />
                                            <PostboxShereTag />
                                            <div className="postbox__author is-bg-none">
                                                <div className="postbox__author-thumb">
                                                    <Link href="#">
                                                        <Image src={userImg2} width={150} height={150}
                                                            alt="image not found" />
                                                    </Link>
                                                </div>
                                                <div className="postbox__author-content">
                                                    <h6 className="postbox__author-title">
                                                        <a href="#">Colene Landin</a>
                                                    </h6>
                                                    <p>Digital content wrangler | UX enthusiast | Recovering educator & GIF
                                                        hockey fan Oxford comma or death.!</p>

                                                    <div className="postbox__author-social">
                                                        <div className="theme__social">
                                                            <SocialIcon />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <BlogDetailsPostRelated />
                                            <div className="postbox__comment-wrapper">
                                                <BlogCommentArea />
                                                <div className="postbox__comment-form">
                                                    <h4 className="postbox__comment-form-title">Leave A Reply</h4>
                                                    <p>Your email address will not be published. Required fields are marked
                                                        *</p>
                                                    <LeaveReplyForm />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <BlogDetailsTwoSidebar />
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

export default BlogDetailsTwoMain;