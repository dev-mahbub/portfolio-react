import React from 'react';
import PageImgOne from '../../../public/assets/images/landing/inner/landing-inner-01.png';
import PageImgTwo from '../../../public/assets/images/landing/inner/landing-inner-02.png';
import PageImgThree from '../../../public/assets/images/landing/inner/landing-inner-03.png';
import PageImgFour from '../../../public/assets/images/landing/inner/landing-inner-04.png';
import PageImgFive from '../../../public/assets/images/landing/inner/landing-inner-05.png';
import PageImgSix from '../../../public/assets/images/landing/inner/landing-inner-06.png';
import PageImgSeven from '../../../public/assets/images/landing/inner/landing-inner-07.png';
import PageImgEight from '../../../public/assets/images/landing/inner/landing-inner-08.png';
import PageImgNine from '../../../public/assets/images/landing/inner/landing-inner-09.png';
import PageImgTen from '../../../public/assets/images/landing/inner/landing-inner-10.png';
import PageImgEleven from '../../../public/assets/images/landing/inner/landing-inner-11.png';
import PageImgTwelve from '../../../public/assets/images/landing/inner/landing-inner-11.png';
import Image from 'next/image';
import Link from 'next/link';

const ShowcasesArea = () => {
    const innerPageData = [
        { id: 1, image: PageImgOne, url: "/about", title: "About Us" },
        { id: 2, image: PageImgTwo, url: "/about-creative", title: "About Creative" },
        { id: 3, image: PageImgThree, url: "/service", title: "Service" },
        { id: 4, image: PageImgFour, url: "/service-standard", title: "Service Standard" },
        { id: 5, image: PageImgFive, url: "/service-agency", title: "Service Agency" },
        { id: 6, image: PageImgSix, url: "/service/service-details", title: "Service Details" },
        { id: 7, image: PageImgSeven, url: "/team/team-details", title: "Team Details" },
        { id: 8, image: PageImgEight, url: "/portfolio", title: "Portfolio Classic" },
        { id: 9, image: PageImgNine, url: "/portfolio-video-details", title: "Portfolio Video" },
        { id: 10, image: PageImgTen, url: "/pricing", title: "Pricing Plan" },
        { id: 11, image: PageImgEleven, url: "/blog", title: "Blog Standard" },
        { id: 12, image: PageImgTwelve, url: "/404", title: "Error 404" },
    ]

    return (
        <>
            <div className="inner-page-presentation-area section-space-bottom">
                <div className="container-fluid p-0">
                    <div className="row justify-content-center">
                        <div className="col-xl-5">
                            <div className="section-head text-center section__title-space">
                                <div className="section__subtitle bg-field">Inner Pages</div>
                                <h2 className="section-title">Portlu Awesome Inner Pages</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="demo-wrapper inner-pages-wrapper">
                                <div className="row inner-pages-animation">
                                    {
                                        innerPageData.slice(0, 6).map((item) => (
                                            <div className="col-xl-3 col-lg-4 col-sm-6" key={item.id}>
                                                <div className="demo-item">
                                                    <div className="solo-demo">
                                                        <Link className="solo-demo-link" target="_blank" href={item.url}>
                                                            <div className="thumbnail">
                                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="Inner Image" />
                                                            </div>
                                                            <div className="content text-center">
                                                                <h3 className="title">{item.title}</h3>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="row mt-30 inner-pages-animation inner-pages-animation--2">

                                    {
                                        innerPageData.slice(6, 12).map((item) => (
                                            <div className="col-xl-3 col-lg-4 col-sm-6" key={item.id}>
                                                <div className="demo-item">
                                                    <div className="solo-demo">
                                                        <Link className="solo-demo-link" target="_blank" href={item.url}>
                                                            <div className="thumbnail">
                                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="Inner Image" />
                                                            </div>
                                                            <div className="content text-center">
                                                                <h3 className="title">{item.title}</h3>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowcasesArea;