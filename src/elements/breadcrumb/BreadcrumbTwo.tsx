import Link from 'next/link';
import React from 'react';
import ShapeOne from '../../../public/assets/images/shape/four-line-shape-1.png';
import ShapeTwo from '../../../public/assets/images/shape/four-line-shape-2.png';
import Image from 'next/image';

type TBreadcrumb = {
    title: string;
    subTitle: string;
    rowWrapperClass?: string;
}

const BreadcrumbTwo = ({ title, subTitle, rowWrapperClass }: TBreadcrumb) => {
    return (
        <>
            <section className="breadcrumb__area section-space theme-bg-secondary p-relative">
                <div className="breadcrumb__shape-one">
                    <Image src={ShapeOne} width={84} height={84} alt="image not found" />
                </div>
                <div className="breadcrumb__shape-two">
                    <Image src={ShapeTwo} width={84} height={84} alt="image not found" />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className={rowWrapperClass}>
                            <div className="breadcrumb__content-wrapper">
                                <div className="breadcrumb__title-wrapper text-center">
                                    <h1 className="breadcrumb__title mb-25">{title}</h1>
                                </div>
                                <div className="breadcrumb__menu text-center">
                                    <nav>
                                        <ul>
                                            <li><span><Link href="/">Home</Link></span></li>
                                            <li><span><Link href="/team">Team</Link></span></li>
                                            <li><span>{subTitle}</span></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BreadcrumbTwo;