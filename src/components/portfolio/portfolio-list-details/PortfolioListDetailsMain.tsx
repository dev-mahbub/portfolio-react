import BreadcrumbOne from '@/elements/breadcrumb/BreadcrumbOne';
import breadcrumbImg from '../../../../public/assets/images/breadcrumb/breadcrumb-bg-04.png';
import React from 'react';
import PortfolioListDetails from './PortfolioListDetails';
import PortfolioNavigationArea from '../portfolio-slider-details/PortfolioNavigationArea';
import PortfolioCommentForm from '../portfolio-slider-details/PortfolioCommentForm';

const PortfolioListDetailsMain = () => {
    return (
        <>
            {/* breadcrumb component */}
            <BreadcrumbOne title='We Provide a Long Range of Services' subTitle='PORTFOLIO DETAILS LIST' rowWrapperClass='col-xxl-6 col-xl-6 col-lg-7 col-md-9 col-sm-10' breadcrumbImg={breadcrumbImg} spacingStyle="style-two" menuItem='PORTFOLIO' menuItemUrl='/portfolio' />
            {/* breadcrumb component end*/}
            {/* portfolio list component */}
            <PortfolioListDetails />
            {/* -- Section divider -- */}
            <div className="section__divider">
                <hr />
            </div>
            {/* -- portfolio navigation area start -- */}
            <PortfolioNavigationArea />
            {/* -- portfolio comment form area start -- */}
            <PortfolioCommentForm />
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

export default PortfolioListDetailsMain;