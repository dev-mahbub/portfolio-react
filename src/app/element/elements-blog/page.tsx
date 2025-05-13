import BlogElementMain from '@/elements/blogs/BlogElementMain';
import FooterStyleThree from '@/elements/footer/FooterStyleThree';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    return (
        <>
            <MetaData pageTitle="Blog Elements">
                <Wrapper>
                    <HeaderMain megaMenu='has-mega-menu' />
                    <main>
                        <BlogElementMain />
                    </main>
                    <FooterStyleThree footerWrapperClass='pt-60 theme-bg-secondary' />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;