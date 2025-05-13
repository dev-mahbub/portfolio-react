import BlogDetailsMain from '@/components/blog/blog-details/BlogDetailsMain';
import FooterStyleOne from '@/elements/footer/FooterStyleOne';
import MetaData from '@/hooks/useMetaData';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = ({ params }: { params: { id: number } }) => {
    const id = params.id
    return (
        <>
            <MetaData pageTitle="Blog Details">
                <HeaderMain megaMenu='has-mega-menu' />
                <main>
                    <BlogDetailsMain id={id}/>
                </main>
               <FooterStyleOne footerWrapperClass='section-space-top theme-bg-secondary'/>
            </MetaData>
        </>
    );
};

export default page;