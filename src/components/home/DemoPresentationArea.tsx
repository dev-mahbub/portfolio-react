import landingImgOne from '../../../public/assets/images/landing/home/landing-home-01.png';
import landingImgTwo from '../../../public/assets/images/landing/home/landing-home-02.png';
import landingImgThree from '../../../public/assets/images/landing/home/landing-home-03.png';
import landingImgFour from '../../../public/assets/images/landing/home/landing-home-04.png';
import landingImgFive from '../../../public/assets/images/landing/home/landing-home-05.png';
import landingImgSix from '../../../public/assets/images/landing/home/landing-home-06.png';
import landingImgSeven from '../../../public/assets/images/landing/home/landing-home-07.png';
import landingImgEight from '../../../public/assets/images/landing/home/landing-home-08.png';
import landingImgNine from '../../../public/assets/images/landing/home/coming-soon.png';
import Link from 'next/link';
import Image from 'next/image';

const DemoPresentationArea = () => {
    const presentationData = [
        { id: 1, image: landingImgOne, title: "personal Portfolio", url: "/portfolio/personal-portfolio" },
        { id: 2, image: landingImgTwo, title: "Minimal Portfolio", url: "/portfolio//minimal-portfolio-agency" },
        { id: 3, image: landingImgThree, title: "Creative Agency", url: "/portfolio//creative-agency" },
        { id: 4, image: landingImgFour, title: "Creative Agency 02", url: "/portfolio//creative-agency-02" },
        { id: 5, image: landingImgFive, title: "Digital Agency", url: "/portfolio//digital-agency" },
        { id: 6, image: landingImgSix, title: "Digital Agency 02", url: "/portfolio//digital-agency-02" },
        { id: 7, image: landingImgSeven, title: "Corporate Business", url: "/portfolio//corporate-business" },
        { id: 8, image: landingImgEight, title: "Startup Business", url: "/portfolio//startup-business" },
        { id: 9, image: landingImgNine, title: "Coming Soon", url: "#" },
    ]
    return (
        <>
            {/* -- Start Demo Presentation area  -- */}
            <div id="homesDemos" className="home-demo-area section-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-head text-center section__title-space">
                                <div className="section__subtitle bg-field">Demos Pages</div>
                                <h2 className="section-title"><strong>8+</strong> Wonderful Top Quality Demos Pages</h2>
                            </div>
                        </div>
                    </div>
                    <div className="custom-meso">
                        <div className="row g-5 main-iso">
                            {
                                presentationData.map((item) => (
                                    <div className="col-lg-4 col-md-6 item" key={item.id}>
                                        <Link href={item.url}>
                                            <div className="thumbnail">
                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                            </div>
                                            <div className="content">
                                                <h6 className="title">{item.title}</h6>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default DemoPresentationArea;