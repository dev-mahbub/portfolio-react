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
                    <HeaderMain headerWrapperClass='header-transparent is-border-bottom p-relative is-header-large' menuColorClass='is-menu-clr' />
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