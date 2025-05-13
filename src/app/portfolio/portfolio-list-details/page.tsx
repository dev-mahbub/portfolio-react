import PortfolioListDetailsMain from '@/components/portfolio/portfolio-list-details/PortfolioListDetailsMain';
import FooterStyleOne from '@/elements/footer/FooterStyleOne';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="Portfolio List Details">
                <Wrapper>
                    <HeaderMain headerWrapperClass='header-transparent is-border-bottom' menuColorClass='is-menu-clr' megaMenu='has-mega-menu' />
                    <main>
                        <PortfolioListDetailsMain />
                    </main>
                    <FooterStyleOne footerWrapperClass='section-space-top' />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;