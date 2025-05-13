import ContactServiceForm from '@/elements/form/ContactServiceForm';
import Link from 'next/link';
import React from 'react';
type TCategories = {
    id: number;
    icon: string;
    name: string;
    status?: string
}
const ServiceSidebarWiget = () => {
    const categories: TCategories[] = [
        { id: 1, icon: "icon-application", name: "Mobile App", status: "active" },
        { id: 2, icon: "icon-rocket", name: "Speed Optimized" },
        { id: 3, icon: "icon-design", name: "Web Development" },
        { id: 4, icon: "icon-analysis", name: "Google Analytics" },
        { id: 5, icon: "icon-strategy", name: "strategy" },
    ]
    return (
        <>
            <div className="service__widget">
                <div className="service__widget-item mb-30">
                    <div className="service__widget-tab underline-full">
                        <h5>Categories </h5>
                        <ul>
                            {
                                categories.map((item) => (
                                    <li key={item.id}>
                                        <Link href="/service/service-details" className={item.status ? item.status : ""}>
                                            <span>
                                                <i className={item.icon}></i>
                                            </span>
                                            {item.name}
                                            <i className="icon-arrow-small"></i>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="service__widget-item mb-30">
                    <div className="service__contact underline-full">
                        <h5>Get in Touch </h5>
                        <ContactServiceForm />
                    </div>
                </div>
                <div className="service__widget-item mb-30">
                    <div className="service__contact-info-item underline-full">
                        <h5>Contact Info</h5>
                        <div className="contact__info-item">
                            <ul>
                                <li>
                                    <div className="contact__info">
                                        <div className="contact__info-icon">
                                            <span>
                                                <i className="icon-location"></i>
                                            </span>
                                        </div>
                                        <div className="contact__info-content">
                                            <h6><Link target="_blank" href="https://www.google.com/maps">672
                                                Tallahassee Florida</Link></h6>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact__info">
                                        <div className="contact__info-icon">
                                            <span>
                                                <i className="icon-phone"></i>
                                            </span>
                                        </div>
                                        <div className="contact__info-content">
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
                                            <h6><Link href="mailto:me@portlu.com">me@portlu.com</Link></h6>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceSidebarWiget;