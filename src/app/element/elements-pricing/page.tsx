import FooterStyleThree from '@/elements/footer/FooterStyleThree';
import PricingElementMain from '@/elements/pricing/PricingElementMain';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <MetaData pageTitle="Pricing Elements">
            <Wrapper>
                <HeaderMain megaMenu='has-mega-menu' />
                <main>
                    <PricingElementMain />
                </main>
                <FooterStyleThree footerWrapperClass='pt-60 theme-bg-secondary' />
            </Wrapper>
        </MetaData>
    );
};

export default page;