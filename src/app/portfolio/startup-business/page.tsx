import StartupBusinessMain from '@/components/portfolio/startup-business/StartupBusinessMain';
import FooterStyleThree from '@/elements/footer/FooterStyleThree';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="Startup Business">
                <Wrapper>
                    <HeaderMain megaMenu='has-mega-menu' menuColorClass="is-menu-clr" headerWrapperClass="header-transparent is-border-bottom p-relative is-header-large" ZIndexMegaMenu='z-index-1' />
                    <main>
                        <StartupBusinessMain />
                    </main>
                    <FooterStyleThree footerWrapperClass="pt-60" />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;