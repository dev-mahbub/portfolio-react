import ContactlMain from '@/components/contact/ContactlMain';
import FooterStyleOne from '@/elements/footer/FooterStyleOne';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="Contact">
                <Wrapper>
                    <HeaderMain megaMenu='has-mega-menu' headerWrapperClass='header-transparent is-border-bottom' />
                    <main>
                        <ContactlMain />
                    </main>
                    <FooterStyleOne footerWrapperClass='section-space-top theme-bg-secondary' />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;