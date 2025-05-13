import ServiceAgencyMain from "@/components/services/service-agency/ServiceAgencyMain";
import FooterStyleFour from "@/elements/footer/FooterStyleFour";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/Wrapper";
import HeaderMain from "@/layout/header/HeaderMain";

const page = () => {
    return (
        <>
            <MetaData pageTitle="Service Agency">
                <Wrapper>
                    <HeaderMain megaMenu='has-mega-menu' headerWrapperClass='header-transparent is-border-bottom' menuColorClass="is-menu-clr" />
                    <main>
                        <ServiceAgencyMain />
                    </main>
                    <FooterStyleFour />
                </Wrapper>
            </MetaData>
        </>
    )
};

export default page;