import TeamDetailsMain from "@/components/team/team-details/TeamDetailsMain";
import FooterStyleOne from "@/elements/footer/FooterStyleOne";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/Wrapper";
import HeaderMain from "@/layout/header/HeaderMain";

const page = ({ params }: { params: { id: number } }) => {
    const id = params.id
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