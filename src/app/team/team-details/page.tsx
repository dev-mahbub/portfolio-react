import TeamDetailsMain from "@/components/team/team-details/TeamDetailsMain";
import FooterStyleOne from "@/elements/footer/FooterStyleOne";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/Wrapper";
import HeaderMain from "@/layout/header/HeaderMain";

const page = () => {
    const id = 1;
    return (
        <>
            <MetaData pageTitle="Team Details">
                <Wrapper>
                    <HeaderMain megaMenu='has-mega-menu' />
                    <main>
                        <TeamDetailsMain id={id} />
                    </main>
                    <FooterStyleOne footerWrapperClass='section-space-top theme-bg-secondary' />
                </Wrapper>
            </MetaData>
        </>
    )
};

export default page;