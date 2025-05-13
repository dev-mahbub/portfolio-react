import DigitalAgencyTwoMain from '@/components/portfolio/digital-agency-2/DigitalAgencyTwoMain';
import FooterStyleFive from '@/elements/footer/FooterStyleFive';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="Digital Agency 02">
                <Wrapper>
                    <HeaderMain megaMenu='has-mega-menu' headerWrapperClass='p-relative is-header-large' headerBtnClass='is-border-gradient is-bg-none' />
                    <main>
                        <DigitalAgencyTwoMain />
                    </main>
                    <FooterStyleFive />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;