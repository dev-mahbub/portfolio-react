import FooterStyleThree from '@/elements/footer/FooterStyleThree';
import TestimonialElementMain from '@/elements/testimonial/TestimonialElementMain';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="Testimonial">
                <Wrapper>
                    <HeaderMain megaMenu='has-mega-menu' />
                    <main>
                        <TestimonialElementMain />
                    </main>
                    <FooterStyleThree footerWrapperClass='pt-60 theme-bg-secondary' />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;