import Link from 'next/link';
import React from 'react';
import SidebarRecentPost from './SidebarRecentPost';
import Image from 'next/image';
import userImg from '../../../../public/assets/images/user/user-07.png';
import SocialIcon from '@/components/common/social-icon/SocialIcon';

const BlogSidebar = () => {
    return (
        <>
            <div className="sidebar__wrapper">
                <div className="sidebar__widget">
                    <h5 className=" sidebar__widget-title">Search Here</h5>
                    <div className="sidebar__widget-content">
                        <div className="sidebar__search">
                            <form action="#">
                                <div className="sidebar__search-input">
                                    <input type="text" placeholder="Enter your keywords..." />
                                    <button type="submit">
                                        <i className="fa-sharp fa-light fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="sidebar__widget is-padding-none">
                    <div className="sidebar__widget-content">
                        <div className="sidebar__author">
                            <div className="sidebar__author-thumb">
                                <Image src={userImg} style={{width:"100%", height:"auto"}} alt="image not found" />
                            </div>
                            <div className="sidebar__author-content">
                                <h6 className=" sidebar__author-title">Colene Landin</h6>
                                <p>Lorem ipsum dolor ametare elit consectetur adipiscing Aenean
                                    pellentesque.</p>
                                <div className="sidebar__author-social">
                                    <div className="theme__social">
                                        <SocialIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar__widget">
                    <h5 className=" sidebar__widget-title">Categories</h5>
                    <div className="sidebar__widget-content">
                        <ul>
                            <li><Link href="/blog">Web Design<span>26</span></Link></li>
                            <li><Link href="/blog">Devlopment <span>30</span></Link></li>
                            <li><Link href="/blog">Branding <span>71</span></Link></li>
                            <li><Link href="/blog">Motion Design <span>56</span></Link></li>
                            <li><Link href="/blog">UI/UX Deisgn <span>60</span></Link></li>
                            <li><Link href="/blog">Graphic Design <span>99</span></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar__widget">
                    <h5 className="sidebar__widget-title">Pages</h5>
                    <div className="sidebar__widget-content">
                        <ul>
                            <li><Link href="/blog">Web Design <span><i
                                className="fa-regular fa-angle-right"></i></span></Link>{" "}</li>
                            <li><Link href="/blog">Devlopment <span><i
                                className="fa-regular fa-angle-right"></i></span></Link>{" "}</li>
                            <li><Link href="/blog">Branding <span><i
                                className="fa-regular fa-angle-right"></i></span></Link>{" "}</li>
                            <li><Link href="/blog">Motion Design<span><i
                                className="fa-regular fa-angle-right"></i></span></Link>{" "}</li>
                            <li><Link href="/blog">UI/UX Deisgn <span><i
                                className="fa-regular fa-angle-right"></i></span></Link>{" "}</li>
                            <li><Link href="/blog">Graphic Design <span><i
                                className="fa-regular fa-angle-right"></i></span></Link>{" "}</li>
                        </ul>
                    </div>
                </div>
              <SidebarRecentPost/>
                <div className="sidebar__widget">
                    <h5 className=" sidebar__widget-title">Tags</h5>
                    <div className="sidebar__widget-content">
                        <div className="sidebar__widget-tag">
                            <div className="tagcloud">
                                <Link href="#">Techology</Link>{" "}
                                <Link href="#">Food</Link>{" "}
                                <Link href="#">Personality</Link>{" "}
                                <Link href="#">Agency</Link>{" "}
                                <Link href="#">Life Style</Link>{" "}
                                <Link href="#">Travel</Link>{" "}
                                <Link href="#">Nature</Link>{" "}
                                <Link href="#">Development</Link>{" "}
                            </div>
                        </div>
                    </div>
                SidebarRecentPost</div>
            </div>
        </>
    );
};

export default BlogSidebar;