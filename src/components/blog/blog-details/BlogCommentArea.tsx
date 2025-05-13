import Image from 'next/image';
import React from 'react';
import userImg1 from '../../../../public/assets/images/user/user-08.png';
import userImg2 from '../../../../public/assets/images/user/user-09.png';
import userImg3 from '../../../../public/assets/images/user/user-10.png';
import Link from 'next/link';

const BlogCommentArea = () => {
    return (
        <>
            <div className="postbox__comment">
                <h5 className="postbox__comment-title mb-35">Comments (3)</h5>
                <ul>
                    <li>
                        <div className="postbox__comment-box">
                            <div className="postbox__comment-info">
                                <div className="postbox__comment-avater">
                                    <Image src={userImg1} style={{ width: "100%", height: "auto" }} alt="image" />
                                </div>
                            </div>
                            <div className="postbox__comment-text ">
                                <div className="postbox__comment-name">
                                    <span className="post-meta mb-5"> July 14, 2022</span>
                                    <h6><Link href="#">Eleanor Fant</Link></h6>
                                </div>
                                <p>One’s of the best template out of there. design, code
                                    quality, updates etc everything you needs guys, buy
                                    it you won’t regret it!</p>
                                <div className="postbox__comment-btn">
                                    <Link className="bd-btn is-btn-anim bordered-light"
                                        href="/contact">
                                        <span className="bd-btn-inner">
                                            <span className="bd-btn-normal">Reply</span>
                                            <span className="bd-btn-hover">Reply</span>
                                            <i className="contentHidden"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <ul className="children">
                            <li>
                                <div className="postbox__comment-box">
                                    <div className="postbox__comment-info">
                                        <div className="postbox__comment-avater">

                                            <Image src={userImg2} style={{ width: "100%", height: "auto" }} alt="image" />
                                        </div>
                                    </div>
                                    <div className="postbox__comment-text ">
                                        <div className="postbox__comment-name">
                                            <span className="post-meta mb-5"> July 14,
                                                2022</span>
                                            <h6><Link href="#">Alexander</Link></h6>
                                        </div>
                                        <p>This theme is super awesome! But I had one
                                            small issue with link option in parallax
                                            portfolio. The other day! </p>
                                        <div className="postbox__comment-btn">
                                            <Link className="bd-btn is-btn-anim bordered-light"
                                                href="/contact">
                                                <span className="bd-btn-inner">
                                                    <span
                                                        className="bd-btn-normal">Reply</span>
                                                    <span
                                                        className="bd-btn-hover">Reply</span>
                                                    <i className="contentHidden"></i>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className="postbox__comment-box">
                            <div className="postbox__comment-info">
                                <div className="postbox__comment-avater">
                                    <Image src={userImg3} style={{ width: "100%", height: "auto" }} alt="image" />
                                </div>
                            </div>
                            <div className="postbox__comment-text ">
                                <div className="postbox__comment-name">
                                    <span className="post-meta mb-5"> July 14, 2022</span>
                                    <h6><Link href="#">Alex Wick</Link></h6>
                                </div>
                                <p>His many legs, pitifully thin compared with the size
                                    of the rest of him, waved about helplessly as he
                                    looked</p>
                                <div className="postbox__comment-btn">
                                    <Link className="bd-btn is-btn-anim bordered-light"
                                        href="/contact">
                                        <span className="bd-btn-inner">
                                            <span className="bd-btn-normal">Reply</span>
                                            <span className="bd-btn-hover">Reply</span>
                                            <i className="contentHidden"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default BlogCommentArea;