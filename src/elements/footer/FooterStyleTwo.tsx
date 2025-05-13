import Link from 'next/link';
import React from 'react';
import Logo from '../../../public/assets/images/logo/logo.svg';
import Image from 'next/image';

const FooterStyleTwo = () => {
    return (
        <>
            <footer>
                <section className="footer__area pt-60 theme-bg-secondary">
                    <div className="container">
                        <div className="footer__top">
                            <div className="footer__logo">
                                <Link href="/">
                                    <Image src={Logo} priority style={{ width: "100%", height: "auto" }} alt="logo not found" />
                                </Link>
                            </div>
                            <div className="footer__content">
                                <div className="theme__social">
                                    <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
                                    <Link href="https://twitter.com/"><i className="icon-twiter"></i></Link>
                                    <Link href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin"></i></Link>
                                    <Link href="https://www.behance.net/"><i className="fa-brands fa-behance"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/* -- Section divider -- */}
                        <div className="section__divider">
                            <hr />
                        </div>
                        <div className="footer__bottom">
                            <div className="footer__widget">
                                <div className="footer__widget-title">
                                    <h5>About us</h5>
                                </div>
                                <div className="footer__widget-content">
                                    <p className="mb-30">{`I'm`} generally available during to regular business hours,</p>
                                    <div className="contact__info-item style-two">
                                        <ul>
                                            <li>
                                                <div className="contact__info">
                                                    <div className="contact__info-icon">
                                                        <span>
                                                            <i className="icon-phone"></i>
                                                        </span>
                                                    </div>
                                                    <div className="contact__info-content">
                                                        <p>Phone</p>
                                                        <h6><Link href="tel:+13322078097">+13322078097</Link></h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="contact__info">
                                                    <div className="contact__info-icon">
                                                        <span>
                                                            <i className="icon-envelope"></i>
                                                        </span>
                                                    </div>
                                                    <div className="contact__info-content">
                                                        <p>Email</p>
                                                        <h6><Link href="mailto:me@portlu.com">me@portlu.com</Link></h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer__widget">
                                <div className="footer__widget-title">
                                    <h5>Company</h5>
                                </div>
                                <div className="footer__links">
                                    <ul>
                                        <li><Link href="/about">About</Link></li>
                                        <li><Link href="/service">Services</Link></li>
                                        <li><Link href="/portfolio">Project</Link></li>
                                        <li><Link href="/testimonial">Testimonial</Link></li>
                                        <li><Link href="/blog">Blog</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer__widget">
                                <div className="footer__widget-title">
                                    <h5>Services</h5>
                                </div>
                                <div className="footer__links">
                                    <ul>
                                        <li><Link href="/personal-portfolio">Personal Portfolio</Link></li>
                                        <li><Link href="/minimal-portfolio-agency">Minimal Portfolio</Link></li>
                                        <li><Link href="/creative-agency">Creative Agency</Link></li>
                                        <li><Link href="/digital-agency">Digital Agency</Link></li>
                                        <li><Link href="/corporate-business">Corporate Business</Link></li>
                                        <li><Link href="/startup-business">Startup Business</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer__widget">
                                <div className="footer__widget-title">
                                    <h5>Subscribe Now</h5>
                                </div>
                                <div className="footer__widget-content">
                                    <p>Subscribe to get the latest news from me</p>
                                    <form action="#">
                                        <div className="footer__input">
                                            <input type="text" placeholder="Enter your mail" />
                                            <button className="footer__btn" type="submit"><i className="icon-plane"></i></button>
                                        </div>
                                    </form>
                                    <p>*I am not going to save your data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -- Section divider -- */}
                    <div className="section__divider">
                        <hr />
                    </div>
                    <div className="footer__copyright style-two">
                        <div className="container">
                            <div className="footer__copyright">
                                <p>Copyright @ 2024 <Link href="#">Portlu.</Link> All Right Reserved</p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
};

export default FooterStyleTwo;