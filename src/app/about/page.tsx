import AboutPageMain from '@/components/about/AboutPageMain';
import FooterStyleOne from '@/elements/footer/FooterStyleOne';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="About Us">
                <Wrapper>
                    <HeaderMain megaMenu='has-mega-menu' headerWrapperClass='header-transparent is-border-bottom' menuColorClass="is-menu-clr" />
                    <main>
                        <AboutPageMain />
                    </main>
                    <FooterStyleOne footerWrapperClass='section-space-top' />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;