import React from 'react';
import BreadcrumbOne from './BreadcrumbOne';
import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import breadcrumbImg from '../../../public/assets/images/breadcrumb/breadcrumb-bg-01.png';
import BreadcrumbTwo from './BreadcrumbTwo';

const BreadcrumbElementMain = () => {
    return (
        <>
            {/* -- breadcrumb area 01  start -- */}
            <ElementsBreadcrumb elementTitle='Breadcrumb Style' />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Breadcrumb Style 01</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BreadcrumbOne breadcrumbImg={breadcrumbImg} title='We Create Top-Class Digital Product' subTitle='About Us' rowWrapperClass='col-xxl-6 col-xl-8 col-lg-8' />
            <div className="section-space-bottom"></div>
            {/* -- breadcrumb area 01  end -- */}
            {/* -- breadcrumb area 02  start -- */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section__title-wrapper section__title-space text-center">
                                <div className="elements-section__wrapper elements-line">
                                    <div className="separator__line line-left"></div>
                                    <div className="elements-title__wrapper">
                                        <h4 className="section__title elements__title">Breadcrumb Style 02</h4>
                                    </div>
                                    <div className="separator__line line-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BreadcrumbTwo title='Our Best Talented Team Members' subTitle='TEAM' rowWrapperClass='col-xxl-5 col-xl-6 col-lg-8 col-md-8' />
            {/* -- breadcrumb area 02  end -- */}
            <div className="section-space-bottom"></div>

        </>
    );
};

export default BreadcrumbElementMain;