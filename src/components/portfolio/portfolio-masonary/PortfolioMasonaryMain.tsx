import breadcrumbImg from '../../../../public/assets/images/breadcrumb/breadcrumb-bg-03.png';
import BreadcrumbOne from '@/elements/breadcrumb/BreadcrumbOne';
import React from 'react';
import PortfolioMasonaryItems from './PortfolioMasonaryItems';

const PortfolioMasonaryMain = () => {
    return (
        <>
            {/* breadcrumb component */}
            <BreadcrumbOne title='Portfolio Masonry' subTitle='Portfolio Masonry' rowWrapperClass='col-xxl-7 col-xl-7 col-lg-8' breadcrumbImg={breadcrumbImg} spacingStyle="style-one" menuItem='PORTFOLIO' menuItemUrl='/portfolio' />
            {/* breadcrumb component end*/}
            {/* portfolio masonary area start */}
            <PortfolioMasonaryItems />
            {/* portfolio masonary area end */}
        </>
    );
};

export default PortfolioMasonaryMain;