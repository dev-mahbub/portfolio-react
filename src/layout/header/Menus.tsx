import navMenuData from '@/data/menu/menu-data';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

const Menus = () => {
    return (
        <>
            <ul>
                {
                    navMenuData?.map((item, index) => (

                        <li key={index} className={item?.hasDropdown === true ? 'has-dropdown has-mega-menu' : ''}>
                            <Link href={item?.link as string}>{item?.label}</Link>
                            {/* demo items */}
                            {
                                item?.subMenu?.length && <>
                                    <ul className="mega-menu is-full-width">
                                        <li>
                                            <div className="home__menu-grid">
                                                {
                                                    item?.subMenu?.map((subItm, subindex) => (
                                                        <div key={subindex} className="home__menu-item">
                                                            <div className="home__menu-thumb">
                                                                <Image src={subItm?.image as StaticImageData} style={{ width: "100%", height: "auto" }} alt="thumb not found" />
                                                                <div className="home__menu__buttons">
                                                                    <Link className="bd-btn is-btn-anim"
                                                                        href={subItm?.multiPageLink as string}>
                                                                        <span className="bd-btn-inner">
                                                                            <span className="bd-btn-normal">Multi
                                                                                page</span>
                                                                            <span className="bd-btn-hover">Multi
                                                                                page</span>
                                                                        </span>
                                                                    </Link>
                                                                    <Link className="bd-btn is-btn-anim"
                                                                        href={subItm?.onePageLink as string}>
                                                                        <span className="bd-btn-inner">
                                                                            <span className="bd-btn-normal">One
                                                                                page</span>
                                                                            <span className="bd-btn-hover">One
                                                                                page</span>
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <h4 className="home__menu-title">{subItm?.label as string}</h4>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </li>
                                    </ul>
                                </>
                            }
                            {/* mega menus */}
                            {
                                item?.hasDropdown === true && item?.megaMenu === true &&
                                <>
                                    <ul className={item?.wrapperClass ? "mega-menu mega-menu-grid-3" : "mega-menu mega-menu-grid-4"}>
                                        {
                                            item?.mega_menus?.length && item?.mega_menus?.map((megaItm, magaIndex) => (
                                                <li key={magaIndex}>
                                                    <Link href={megaItm?.link} className="mega-menu-title"> {megaItm?.title as string} </Link>
                                                    <ul>

                                                        {
                                                            megaItm?.submenus?.length && megaItm?.submenus?.map((megaSubItm, megasubIndex) => (
                                                                <li key={megasubIndex}><Link href={megaSubItm?.link as string}>

                                                                    {megaSubItm?.title}

                                                                    {megaSubItm?.badgeColor && <span
                                                                        className={megaSubItm?.badgeColor}>New</span>}
                                                                </Link></li>
                                                            ))
                                                        }

                                                    </ul>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </>
                            }
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default Menus;