
import Link from 'next/link';
import React, { useState } from 'react';
import navMenuData from '@/data/menu/menu-data';
import Image, { StaticImageData } from 'next/image';

const MobileMenu = () => {
    const [openSubMenu, setopenSubMenu] = useState(false)
    const [subMenuNum, setsubMenuNum] = useState(0)
    const [openMegaMenu, setopenMegaMenu] = useState(false)
    const [megaMenuNum, setmegaMenuNum] = useState(0)
    const [opensubMegaMenu, setopensubMegaMenu] = useState(false)
    const [megasubMenuNum, setmegasubMenuNum] = useState(0)

    const handleActiveSubMenu = (index: number) => {
        setopenSubMenu(!openSubMenu)
        setsubMenuNum(index)
    }
    const handleActiveMegaMenu = (index: number) => {
        setopenMegaMenu(!openMegaMenu)
        setmegaMenuNum(index)
    }
    const handleActivesubMegaMenu = (index: number) => {
        setopensubMegaMenu(!opensubMegaMenu)
        setmegasubMenuNum(index)
    }
    return (
        <>
            <div className='mean-bar'>
                <Link className='meanmenu-reveal' href="#"></Link>
                <nav className='mean-nav'>
                    <ul>
                        {
                            navMenuData?.map((item, index) => (
                                <li key={index} className={`${item.hasDropdown === true ? "has-dropdown" : ""} ${openSubMenu && subMenuNum === item.id? "has-mega-menu dropdown-opened":""} ${item.megaMenu === true ? "has-mega-menu" : ""} ${openMegaMenu && megaMenuNum === item.id ? "dropdown-opened" : ""}`}>
                                    <Link href={item?.link as string}>{item?.label}</Link>

                                    {
                                        item?.hasDropdown === true && <>
                                            <ul key={index} className="mega-menu is-full-width" style={{
                                                display: openSubMenu && subMenuNum === item.id ? "block" : "none",
                                            }}>
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
                                            <Link onClick={() => handleActivesubMegaMenu(index)} className={`mean-expand ${opensubMegaMenu && megasubMenuNum === index ? "mean-clicked" : ""}`} href="#"><i className="fa-regular fa-arrow-right"></i></Link>
                                            {
                                                item?.hasDropdown === true && <Link onClick={() => handleActiveSubMenu(item.id)} className={`mean-expand ${openSubMenu && subMenuNum === item.id ? "mean-clicked" : ""}`} href="#"><i className="fa-regular fa-arrow-right"></i></Link>
                                            }
                                            {
                                                item?.megaMenu === true && <Link onClick={() => handleActiveMegaMenu(item.id)} className={`mean-expand ${openMegaMenu && megaMenuNum === item.id ? "mean-clicked" : ""}`} href="#"><i className="fa-regular fa-arrow-right"></i></Link>
                                            }
                                        </>
                                    }

                                    {/* mega menus  */}
                                    {
                                        item?.megaMenu === true && <>
                                            <ul className="mega-menu" style={{
                                                display: openMegaMenu && megaMenuNum === item.id ? "block" : "none",
                                            }}>
                                                {
                                                    item?.mega_menus?.map((megaItem, mIndex) => (
                                                        <li key={mIndex} className={`${opensubMegaMenu && megasubMenuNum === mIndex? "dropdown-opened":""}`}>
                                                            <Link href="#" className="mega-menu-title"> {megaItem.title} </Link>
                                                            <ul style={{
                                                                display: opensubMegaMenu && megasubMenuNum === mIndex ? "block" : "none",
                                                            }}>

                                                                {
                                                                    megaItem?.submenus?.length && megaItem?.submenus?.map((subMegaItem, subMegaIndex) => (
                                                                        <li key={subMegaIndex}><Link href={subMegaItem.link}> {subMegaItem.title} </Link></li>
                                                                    ))
                                                                }
                                                            </ul>
                                                            <Link onClick={() => handleActivesubMegaMenu(mIndex)} className={`mean-expand ${opensubMegaMenu && megasubMenuNum === mIndex ? "mean-clicked" : ""}`} href="#" style={{ fontSize: '18px' }}><i className="fa-regular fa-arrow-right"></i></Link>
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
                    {/* <Menus/> */}
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;