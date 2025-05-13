import PortfolioDetailsMain from '@/components/portfolio/portfolio-details/PortfolioDetailsMain';
import FooterStyleOne from '@/elements/footer/FooterStyleOne';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    const id = 1;
    return (
        <>
            <MetaData pageTitle="Portfolio Classic Details">
                <Wrapper>
                    <HeaderMain megaMenu='has-mega-menu' />
                    <main>
                        <PortfolioDetailsMain id={id} />
                    </main>
                    <FooterStyleOne footerWrapperClass='section-space-top' />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;