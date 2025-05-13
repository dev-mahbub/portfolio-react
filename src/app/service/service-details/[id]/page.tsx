import ServiceDetailsMain from '@/components/services/service-details/ServiceDetailsMain';
import FooterStyleOne from '@/elements/footer/FooterStyleOne';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = ({ params }: { params: { id: number } }) => {
    const id = params.id;
    return (
        <>
            <MetaData pageTitle="Service Details">
                <Wrapper>
                    <HeaderMain megaMenu='has-mega-menu' headerWrapperClass='header-transparent is-border-bottom' menuColorClass="is-menu-clr" />
                    <main>
                        <ServiceDetailsMain id={id} />
                    </main>
                    <FooterStyleOne footerWrapperClass='section-space-top' />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;