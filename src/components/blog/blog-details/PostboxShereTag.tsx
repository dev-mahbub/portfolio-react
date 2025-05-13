import Link from 'next/link';
import React from 'react';

const PostboxShereTag = () => {
    return (
        <>
            <div className="postbox__share-wrapper">
                <div className="row align-items-center">
                    <div className="col-xl-7">
                        <div className="postbox__share-tag">
                            <span>Tags:</span>
                            <Link href="#">Blog</Link>
                            <Link href="#">Creative</Link>
                            <Link href="#">Portfoilo</Link>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="postbox__share-social">
                            <span>Share On:</span>
                            <div className="theme__social">
                                <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i>
                                </Link>
                                <Link href="https://twitter.com/"><i className="icon-twiter"></i>
                                </Link>
                                <Link href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostboxShereTag;