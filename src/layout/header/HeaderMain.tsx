"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import headerLogo from '../../../public/assets/images/logo/logo.svg';
import useScrollDirection from '@/hooks/sticky-header';
import Link from 'next/link';
import OffcanvasArea from '@/components/common/OffcanvasArea';
import Menus from './Menus';

type THeaderProps = {
    headerWrapperClass?: string;
    headerBtnClass?: string;
    menuColorClass?: string;
    megaMenu?: string;
    headerShape?: string;
    ZIndexMegaMenu?: string;
}

const HeaderMain = ({ headerWrapperClass, headerBtnClass, menuColorClass, megaMenu, headerShape, ZIndexMegaMenu }: THeaderProps) => {
    const isSticky = useScrollDirection(null);
    const [isOpenInfoSidebar, setIsOpenInfoSidebar] = useState(false)
    const [isOpenInfoSidebarTwo, setIsOpenInfoSidebarTwo] = useState(false)
    const handleInfoToggle = () => {
        setIsOpenInfoSidebar(!isOpenInfoSidebar)

    }
    const handleSidebarOnePageToggle = () => {
        setIsOpenInfoSidebarTwo(!isOpenInfoSidebarTwo)

    }
    return (
        <>
            <header>
                <div className={`header__area ${headerWrapperClass ? headerWrapperClass : ""} 
                 ${isSticky ? "bd-sticky" : ""}`}>
                    {headerShape && <>  <div className="header__shape"></div>
                        <div className="header__shape-two"></div></>}
                    <div className="container">
                        <div className={`mega__menu-wrapper p-relative ${ZIndexMegaMenu ? ZIndexMegaMenu : ""}`}>
                            <div className="header__main">
                                <div className="header__left">
                                    <div className="header__logo">
                                        <Link href="/">
                                            <Image className="logo__white" priority src={headerLogo} style={{ width: "100%", height: "auto" }} alt="logo not found" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="header__middle">
                                    <div className="mean__menu-wrapper d-none d-lg-block">
                                        <div className={`main-menu ${menuColorClass ? menuColorClass : ""}`}>
                                            <nav>
                                                {
                                                    megaMenu ?
                                                        <>
                                                          <Menus/>
                                                        </>
                                                        :
                                                        <>
                                                            <ul className={`onepage-menu ${menuColorClass ? menuColorClass : ""}`}>
                                                                <li>
                                                                    <Link href="#">Home</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#homeabout">About</Link>
                                                                </li>
                                                                <li><Link href="#homeservices">Services</Link>
                                                                </li>
                                                                <li><Link href="#homeworks">Works</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#homeblog">Blog</Link>
                                                                </li>
                                                                <li><Link href="#homecontact">Contact</Link>
                                                                </li>
                                                            </ul>
                                                        </>
                                                }
                                            </nav>
                                            <div className="header__hamburger ml-20 d-none">
                                                <button type="button" className="hamburger-btn offcanvas-open-btn">
                                                    <span>01</span>
                                                    <span>01</span>
                                                    <span>01</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header__right">
                                    <div className="header__action d-flex align-items-center">
                                        <div
                                            className="header__btn-wrap d-none d-sm-inline-flex d-inline-flex align-items-center gap-5">
                                            <Link className={`bd-btn ${headerBtnClass ? headerBtnClass : "is-btn-anim bordered-blue"} `} href="/contact">
                                                <span className="bd-btn-inner">
                                                    <span className="bd-btn-normal">Contact me</span>
                                                    <span className="bd-btn-hover">Contact me</span>
                                                    <i className="contentHidden"></i>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="header__hamburger ml-20 d-lg-none">
                                            <div className="sidebar__toggle">
                                                {
                                                    megaMenu ?
                                                        <>
                                                            <button onClick={handleSidebarOnePageToggle} className="bar-icon">
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                            </button>
                                                        </>
                                                        :
                                                        <>
                                                            <button onClick={handleInfoToggle} className="bar-icon">
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                            </button>
                                                        </>
                                                }
                                            </div>
                                        </div>
                                        <div className="header__hamburger ml-20 d-none">
                                            <button type="button" className="hamburger-btn offcanvas-open-btn">
                                                <span>01</span>
                                                <span>01</span>
                                                <span>01</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffcanvasArea isOpenInfoSidebar={isOpenInfoSidebar} setIsOpenInfoSidebar={setIsOpenInfoSidebar} />
            <div onClick={() => setIsOpenInfoSidebar(false)}
                className={isOpenInfoSidebar ? "offcanvas__overlay overlay-open" : "offcanvas__overlay"}></div>
            <div className="offcanvas__overlay-white"></div>
            <OffcanvasArea isOpenInfoSidebar={isOpenInfoSidebarTwo} megaMenu={megaMenu} setIsOpenInfoSidebar={setIsOpenInfoSidebarTwo} />
            <div onClick={() => setIsOpenInfoSidebarTwo(false)}
                className={isOpenInfoSidebarTwo ? "offcanvas__overlay overlay-open" : "offcanvas__overlay"}></div>
            <div className="offcanvas__overlay-white"></div>
        </>
    );
};

export default HeaderMain;