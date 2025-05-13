import BreadcrumbOne from '@/elements/breadcrumb/BreadcrumbOne';
import breadcrumbImg from '../../../../public/assets/images/breadcrumb/breadcrumb-bg-03.png';
import React from 'react';
import dynamic from 'next/dynamic';
const PortfolioGridTab = dynamic(() => import('./PortfolioGridTab'), {
    ssr: false
  })
  
const PortfolioGridMain = () => {
    return (
        <>
            {/* breadcrumb component */}
            <BreadcrumbOne title='Portfolio Grid' subTitle='Portfolio Grid' rowWrapperClass='col-xxl-7 col-xl-7 col-lg-8' breadcrumbImg={breadcrumbImg} spacingStyle="style-one" menuItem='PORTFOLIO' menuItemUrl='/portfolio' />
            {/* breadcrumb component end*/}
            {/* portfolio grid area start */}
            <PortfolioGridTab/>
            {/* portfolio grid area end */}
        </>
    );
};

export default PortfolioGridMain;