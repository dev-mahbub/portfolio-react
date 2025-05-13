import FooterStyleOne from '@/elements/footer/FooterStyleOne';
import MetaData from '@/hooks/useMetaData';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';
import ErrorPage from '@/components/404-page/404-Error-page';
import Wrapper from '@/layout/Wrapper';

const page = () => {
    return (
        <MetaData pageTitle="Error 404">
            <Wrapper>
                <HeaderMain megaMenu='has-mega-menu' />
                <ErrorPage />
                <FooterStyleOne footerWrapperClass='section-space-top theme-bg-secondary' />
            </Wrapper>
        </MetaData>
    );
};

export default page;