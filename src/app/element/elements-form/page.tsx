import FooterStyleThree from '@/elements/footer/FooterStyleThree';
import ElementFormMain from '@/elements/form/ElementFormMain';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <MetaData pageTitle="Elements Form">
            <Wrapper>
                <HeaderMain megaMenu='has-mega-menu' />
                <main>
                    <ElementFormMain />
                </main>
                <FooterStyleThree footerWrapperClass='pt-60 theme-bg-secondary' />
            </Wrapper>
        </MetaData>
    );
};

export default page;