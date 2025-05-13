import BannerAreaOne from "./BannerAreaOne";
import CustomerReviewArea from "./CustomerReviewArea";
import DemoPresentationArea from "./DemoPresentationArea";
import FaqArea from "./FaqArea";
import FutureArea from "./FutureArea";
import ShowcasesArea from "./ShowcasesArea";
import SliderPresentationArea from "./SliderPresentationArea";

const HomeMainArea = () => {
    return (
        <>
            <BannerAreaOne />
            <DemoPresentationArea />
            <SliderPresentationArea />
            <FutureArea />
            <ShowcasesArea />
            <CustomerReviewArea />
            <FaqArea />
        </>
    )
};

export default HomeMainArea;
