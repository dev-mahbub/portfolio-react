"use client"
import React from 'react';
import BrandingIdas from '../portfolio-video-details/partial/BrandingIdas';
import AboutPortfolioSlider from '@/components/about/AboutPortfolioSlider';
import PortfolioDetailsCounter from './PortfolioDetailsCounter';
import portfolio1 from '../../../../public/assets/images/portfolio/portfolio-16.png';
import portfolio2 from '../../../../public/assets/images/portfolio/portfolio-20.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import PortfolioNavigationArea from '../portfolio-slider-details/PortfolioNavigationArea';
import PortfolioCommentForm from '../portfolio-slider-details/PortfolioCommentForm';
import { TPortfolio } from '@/interFace/type';
import portfolio_data from '@/data/portfolio-data';
import DetailsBrandingIdas from './DetailsBrandingIdas';

const PortfolioDetailsMain = ({id}:{id:number}) => {
    const portfolio:TPortfolio|undefined = portfolio_data.find((item)=>item.id == id)
    return (
        <>
            {/* branding idas area */}
            <DetailsBrandingIdas portfolio={portfolio}/>
            {/* image box area */}
            {/* portfolio details slider */}
            <AboutPortfolioSlider />
            {/* -- counter area start -- */}
            <PortfolioDetailsCounter />
            {/* -- image box area start -- */}
            <div className="portfolio__details-img-area section-space">
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
            {/* -- image box area end -- */}
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

export default PortfolioDetailsMain;