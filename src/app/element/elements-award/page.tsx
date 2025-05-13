import ElementsAwardMain from '@/elements/award/ElementsAwardMain';
import FooterStyleThree from '@/elements/footer/FooterStyleThree';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="Awards Elements">
                <Wrapper>
                    <HeaderMain megaMenu='has-mega-menu' />
                    <main>
                        <ElementsAwardMain />
                    </main>
                    <FooterStyleThree footerWrapperClass='pt-60 theme-bg-secondary' />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;