import FooterStyleThree from '@/elements/footer/FooterStyleThree';
import ServiceElementMain from '@/elements/services/ServiceElementMain';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <MetaData pageTitle="Service Elements">
            <Wrapper>
                <HeaderMain megaMenu='has-mega-menu' />
                <main>
                    <ServiceElementMain />
                </main>
                <FooterStyleThree footerWrapperClass='pt-60 theme-bg-secondary' />
            </Wrapper>
        </MetaData>
    );
};

export default page;