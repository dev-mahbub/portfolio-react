import CreativeAgencyTwoMain from '@/components/portfolio/creative-agency-2/CreativeAgencyTwoMain';
import FooterStyleFive from '@/elements/footer/FooterStyleFive';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="Creative Agency 02">
                <Wrapper>
                    <HeaderMain />
                    <main>
                        <CreativeAgencyTwoMain />
                    </main>
                    <FooterStyleFive />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;