import PortfolioGallaryMain from '@/components/portfolio/portfolio-gallary/PortfolioGallaryMain';
import FooterStyleOne from '@/elements/footer/FooterStyleOne';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="Portfolio Gallery">
                <Wrapper>
                    <HeaderMain megaMenu='has-mega-menu' />
                    <main>
                        <PortfolioGallaryMain />
                    </main>
                    <FooterStyleOne footerWrapperClass='section-space-top theme-bg-secondary' />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;