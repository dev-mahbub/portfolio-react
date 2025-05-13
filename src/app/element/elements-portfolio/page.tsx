import FooterStyleThree from '@/elements/footer/FooterStyleThree';
import PortfolioElementMain from '@/elements/portfolio/PortfolioElementMain';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="Portfolio">
                <Wrapper>
                    <HeaderMain megaMenu='has-mega-menu' />
                    <main>
                        <PortfolioElementMain />
                    </main>
                    <FooterStyleThree footerWrapperClass='pt-60 theme-bg-secondary' />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;