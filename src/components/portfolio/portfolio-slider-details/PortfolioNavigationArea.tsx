import Link from 'next/link';
import React from 'react';

const PortfolioNavigationArea = () => {
    return (
        <>
             {/* -- portfolio navigation area start -- */}
        <section className="portfolio-navigation__area ">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="postbox__more-navigation is-margin-none">
                            <div className="postbox__more-left">
                                <div className="postbox__more-icon">
                                    <Link className="circle-btn" href="/blog-details">
                                        <i className="fa-regular fa-arrow-left-long"></i>
                                    </Link>
                                </div>
                                <div className="postbox__more-content">
                                    <p>Previous Article</p>
                                    <h6>
                                        <Link href="/blog-details">Agency With Creative Idea</Link>
                                    </h6>
                                </div>
                            </div>
                            <div className="postbox__more-menu">
                                <Link href="/portfolio-masonary">
                                    <span>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.6673 4.66662C12.9559 4.66662 14.0006 3.62196 14.0006 2.33331C14.0006 1.04466 12.9559 0 11.6673 0C10.3786 0 9.33398 1.04466 9.33398 2.33331C9.33398 3.62196 10.3786 4.66662 11.6673 4.66662Z"
                                                fill="currentColor" />
                                            <path
                                                d="M2.33331 4.66662C3.62196 4.66662 4.66662 3.62196 4.66662 2.33331C4.66662 1.04466 3.62196 0 2.33331 0C1.04466 0 0 1.04466 0 2.33331C0 3.62196 1.04466 4.66662 2.33331 4.66662Z"
                                                fill="currentColor" />
                                            <path
                                                d="M11.6673 13.9996C12.9559 13.9996 14.0006 12.955 14.0006 11.6663C14.0006 10.3777 12.9559 9.33301 11.6673 9.33301C10.3786 9.33301 9.33398 10.3777 9.33398 11.6663C9.33398 12.955 10.3786 13.9996 11.6673 13.9996Z"
                                                fill="currentColor" />
                                            <path
                                                d="M2.33331 13.9996C3.62196 13.9996 4.66662 12.955 4.66662 11.6663C4.66662 10.3777 3.62196 9.33301 2.33331 9.33301C1.04466 9.33301 0 10.3777 0 11.6663C0 12.955 1.04466 13.9996 2.33331 13.9996Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                            <div className="postbox__more-right">
                                <div className="postbox__more-content">
                                    <p>Next Article</p>
                                    <h6>
                                        <Link href="/blog-details">Digital Agency With Creative</Link>
                                    </h6>
                                </div>
                                <div className="postbox__more-icon">
                                    <Link className="circle-btn" href="/blog-details">
                                        <i className="fa-regular fa-arrow-right-long"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* -- portfolio navigation area end -- */}
        </>
    );
};

export default PortfolioNavigationArea;