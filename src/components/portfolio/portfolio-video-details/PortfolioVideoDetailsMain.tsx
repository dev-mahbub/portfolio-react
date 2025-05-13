"use client"
import React from 'react';
import PortFolioVideoArea from './partial/PortFolioVideoArea';
import BrandingIdas from './partial/BrandingIdas';
import portfolio1 from '../../../../public/assets/images/portfolio/portfolio-21.png';
import portfolio2 from '../../../../public/assets/images/portfolio/portfolio-22.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import PortfolioVideoFutureArea from './partial/PortfolioVideoFutureArea';
import AboutPortfolioSlider from '@/components/about/AboutPortfolioSlider';
import PortfolioNavigationArea from '../portfolio-slider-details/PortfolioNavigationArea';
import PortfolioCommentForm from '../portfolio-slider-details/PortfolioCommentForm';

const PortfolioVideoDetailsMain = () => {
    return (
        <>
            {/* video area  */}
            <PortFolioVideoArea />
            {/* branding idas area */}
            <BrandingIdas/>
            {/* image box area */}
            <div className="portfolio__details-img-area section-space-bottom">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6">
                            <div className="portfolio__details-image-item">
                                <Image
                                    src={portfolio1}
                                    loader={imageLoader}
                                    placeholder="blur"
                                    loading="lazy"
                                    style={{ width: "100%", height: "auto" }}
                                    alt="image not found"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="portfolio__details-image-item">
                                <Image
                                    src={portfolio2}
                                    loader={imageLoader}
                                    placeholder="blur"
                                    loading="lazy"
                                    style={{ width: "100%", height: "auto" }}
                                    alt="image not found"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* image box area end */}
            {/* future area */}
            <PortfolioVideoFutureArea />
            {/* portfolio details slider */}
            <AboutPortfolioSlider />
            {/* -- Section divider -- */}
            <div className="section__divider">
                <hr />
            </div>
            {/* -- portfolio navigation area start -- */}
            <PortfolioNavigationArea />
            {/* -- portfolio comment form area start -- */}
            <PortfolioCommentForm />
        </>
    );
};

export default PortfolioVideoDetailsMain;