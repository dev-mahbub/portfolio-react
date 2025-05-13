
import MinimalPortfolioMain from '@/components/portfolio/minimal-portfolio/MinimalPortfolioMain';
import FooterStyleThree from '@/elements/footer/FooterStyleThree';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="Minimal Portfolio">
                <Wrapper>
                    <HeaderMain headerWrapperClass='header-transparent' />
                    <main>
                        <MinimalPortfolioMain />
                    </main>
                    <FooterStyleThree />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;