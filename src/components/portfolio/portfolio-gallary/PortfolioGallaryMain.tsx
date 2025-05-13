import breadcrumbImg from '../../../../public/assets/images/breadcrumb/breadcrumb-bg-03.png';
import BreadcrumbOne from '@/elements/breadcrumb/BreadcrumbOne';
import dynamic from 'next/dynamic';
import React from 'react';
const PortfolioGallaryTab = dynamic(() => import('./PortfolioGallaryTab'), {
    ssr: false
  })
  
const PortfolioGallaryMain = () => {
    return (
        <>
                {/* breadcrumb component */}
                <BreadcrumbOne title='Portfolio Gallery' subTitle='Portfolio Gallery' rowWrapperClass='col-xxl-7 col-xl-7 col-lg-8' breadcrumbImg={breadcrumbImg} spacingStyle="style-one" menuItem='PORTFOLIO' menuItemUrl='/portfolio' />
            {/* breadcrumb component end*/}
            {/* portfolio grid area start */}
            <PortfolioGallaryTab/>
            {/* portfolio grid area end */}
        </>
    );
};

export default PortfolioGallaryMain;