import BreadcrumbOne from '@/elements/breadcrumb/BreadcrumbOne';
import breadcrumbImg from '../../../../public/assets/images/breadcrumb/breadcrumb-bg-03.png';
import React from 'react';
import dynamic from 'next/dynamic';
const PortfolioTab = dynamic(() => import('./PortfolioTab'), {
    ssr: false
  })
const PortfolioMain = () => {
    return (
        <>
            {/* breadcrumb component */}
            <BreadcrumbOne title='Portfolio Classic' subTitle='Portfolio Classic' rowWrapperClass='col-xxl-7 col-xl-7 col-lg-8' breadcrumbImg={breadcrumbImg} spacingStyle="style-one" menuItem='PORTFOLIO' menuItemUrl='/portfolio' />
            {/* breadcrumb component end*/}
            {/* portfolio area start */}
            <PortfolioTab/>
            {/* portfolio area end */}

        </>
    );
};

export default PortfolioMain;