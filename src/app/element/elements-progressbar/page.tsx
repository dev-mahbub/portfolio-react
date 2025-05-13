import FooterStyleThree from '@/elements/footer/FooterStyleThree';
import ProgressbarElementMain from '@/elements/progressbar/ProgressbarElementMain';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="Progress">
                <Wrapper>
                    <HeaderMain megaMenu="has-mega-menu" />
                    <main>
                        <ProgressbarElementMain />
                    </main>
                    <FooterStyleThree footerWrapperClass='pt-60 theme-bg-secondary' />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;