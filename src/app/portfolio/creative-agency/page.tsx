import CreativeAgencyMain from '@/components/portfolio/creative-agency/CreativeAgencyMain';
import FooterStyleFour from '@/elements/footer/FooterStyleFour';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="Creative Agency">
                <Wrapper>
                    <HeaderMain megaMenu="has-mega-menu" headerWrapperClass='header-transparent' headerBtnClass='is-border-gradient is-bg-none' menuColorClass="is-menu-clr" />
                    <main>
                        <CreativeAgencyMain />
                    </main>
                    <FooterStyleFour />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;