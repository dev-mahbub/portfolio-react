import blog_data from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SidebarRecentPost = () => {
    return (
        <>
            <div className="sidebar__widget">
                <h5 className=" sidebar__widget-title">Recent Post</h5>
                <div className="sidebar__widget-content">
                    <div className="sidebar__post">

                        {
                            blog_data.slice(24, 27).map((item) => (
                                <div className="rc__post" key={item.id}>
                                    <div className="rc__post-thumb">
                                        <Link href={`/blog/blog-details/${item.id}`}><Image src={item.image} width={90} height={90} alt="image not found" /></Link>
                                    </div>
                                    <div className="rc__post-content">
                                        <h6 className="rc__post-title">
                                            <Link href={`/blog/blog-details/${item.id}`}>{item.blogTitle}</Link>
                                        </h6>
                                        <div className="rc__meta">
                                            <span>
                                                <i className="fa-sharp fa-light fa-clock"></i>{" "}
                                              {item.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarRecentPost;