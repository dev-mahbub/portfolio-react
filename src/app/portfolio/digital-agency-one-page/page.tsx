import DigitalAgencyPortfolioMain from '@/components/portfolio/digital-agency/DigitalAgencyPortfolioMain';
import FooterStyleFive from '@/elements/footer/FooterStyleFive';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="Digital Agency">
            <Wrapper>
                <HeaderMain headerShape="header__shape" ZIndexMegaMenu="z-index-1"
                    headerWrapperClass='header-transparent is-border-bottom is-header-bg p-relative is-header-large' />
                <main>
                    <DigitalAgencyPortfolioMain />
                </main>
                <FooterStyleFive />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;