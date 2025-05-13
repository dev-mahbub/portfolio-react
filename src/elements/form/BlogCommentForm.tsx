import Link from 'next/link';
import React from 'react';

const BlogCommentForm = () => {
    return (
        <>
            <form action="#">
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="postbox__comment-input">
                            <input type="text" placeholder="Name*" />
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="postbox__comment-input">
                            <input type="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-12">
                        <div className="postbox__comment-input">
                            <input type="text" placeholder="Website" />
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="postbox__comment-input">
                            <textarea placeholder="Your Comment Here..."></textarea>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div
                            className="postbox__comment-agree d-flex align-items-start mb-25">
                            <input className="e-check-input" type="checkbox"
                                id="e-agree" />
                            <label className="e-check-label" htmlFor="e-agree">Save my name,
                                email, and website in this browser for the next time
                                I comment.</label>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="postbox__comment-btn">
                            <Link className="bd-btn is-btn-anim" href="/contact">
                                <span className="bd-btn-inner">
                                    <span className="bd-btn-normal">Submit now</span>
                                    <span className="bd-btn-hover">Submit now</span>
                                    <i className="contentHidden"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default BlogCommentForm;