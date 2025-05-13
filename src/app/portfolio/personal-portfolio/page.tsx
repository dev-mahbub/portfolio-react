import PersonalPortfolioMain from "@/components/portfolio/personal-portfolio/PersonalPortfolioMain";
import FooterStyleThree from "@/elements/footer/FooterStyleThree";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/Wrapper";
import HeaderMain from "@/layout/header/HeaderMain";

const page = () => {
    return (
        <>

            <MetaData pageTitle="Personal Portfolio">
                <Wrapper>
                    <HeaderMain megaMenu="has-mega-menu" headerWrapperClass="header-transparent" />
                    <main>
                        <PersonalPortfolioMain />
                    </main>
                    <FooterStyleThree />
                </Wrapper>
            </MetaData>

        </>
    );
};

export default page;
