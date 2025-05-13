import CorporateBusinessMain from '@/components/portfolio/corporate-business/CorporateBusinessMain';
import FooterStyleFive from '@/elements/footer/FooterStyleFive';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="Corporate Business">
                <Wrapper>
                    <HeaderMain megaMenu='has-mega-menu' headerWrapperClass='header-transparent is-border-bottom p-relative is-header-large' menuColorClass="is-menu-clr" ZIndexMegaMenu='z-index-1' />
                    <main>
                        <CorporateBusinessMain />
                    </main>
                    <FooterStyleFive />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;