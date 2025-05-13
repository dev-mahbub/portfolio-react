//@refresh
import HomeMainArea from "@/components/home/HomeMainArea";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/Wrapper";
import MainIndexPageFooter from "@/layout/footer/MainIndexPageFooter";
import MainIndexPageHeader from "@/layout/header/MainIndexPageHeader";

const Home = () => {

  return (
    <>
      <MetaData pageTitle="Home Main">
        <Wrapper>
          <MainIndexPageHeader megaMenu="has-mega-menu"/>
          <main>
            <HomeMainArea />
          </main>
          <MainIndexPageFooter />
        </Wrapper>
      </MetaData>
    </>
  );
};

export default Home;
