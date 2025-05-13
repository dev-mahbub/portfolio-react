import Link from 'next/link';
import React from 'react';

const PostboxNavigation = () => {
    return (
        <>
            <div className="postbox__more-navigation grid-reduce theme-bg-secondary">
                <div className="postbox__more-left">
                    <div className="postbox__more-icon">
                        <Link className="circle-btn" href="blog-details.html">
                            <i className="fa-regular fa-arrow-left-long"></i>
                        </Link>
                    </div>
                    <div className="postbox__more-content">
                        <p>Previous Article</p>
                        <h6>
                            <Link href="/blog-details">Creative Agency Idea</Link>
                        </h6>
                    </div>
                </div>
                <div className="postbox__more-right">
                    <div className="postbox__more-content">
                        <p>Next Article</p>
                        <h6>
                            <Link href="/blog-details">Digital Agency Work</Link>
                        </h6>
                    </div>
                    <div className="postbox__more-icon">
                        <Link className="circle-btn" href="blog-details.html">
                            <i className="fa-regular fa-arrow-right-long"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostboxNavigation;