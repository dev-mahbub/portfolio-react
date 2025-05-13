"use client"
import { tabButtonData } from "@/data/portfolio-button-tab-data";
import React from "react";
import PortfolioReusableItemsThree from "./partial/PortfolioReusableItemsThree";
import portfolio_data from "@/data/portfolio-data";
import Link from "next/link";

const PortfolioGallaryTab = () => {
    return (
        <>
            <div className="bd__portfolio-area section-space">
                <div className="container-fluid">
                    <div className="row g-5 section__title-space justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="bd__menu-tab justify-content-center">
                                <ul
                                    className="bd__menu style-two nav"
                                    id="myTab"
                                    role="tablist"
                                >
                                    {tabButtonData.map((item) => (
                                        <li
                                            className="bd__btn-item"
                                            role="presentation"
                                            key={item.id}
                                        >
                                            <button
                                                className={item.status ? item.status : ""}
                                                id={item.idName}
                                                data-bs-toggle="tab"
                                                data-bs-target={item.targetName}
                                                type="button"
                                                role="tab"
                                                aria-controls={item.ariaControls}
                                                aria-selected={item.selectedName}
                                            >
                                                {item.tabName}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12">
                            <div
                                className="tab-content wow fadeInUp"
                                data-wow-delay=".3s"
                                data-wow-duration="1s"
                                id="myTabContent"
                            >
                                <div
                                    className="tab-pane fade show active"
                                    id="view"
                                    role="tabpanel"
                                    aria-labelledby="view-tab"
                                >
                                    <div className="row  g-5">
                                        {/* Usage of PortfolioItems component */}
                                        <PortfolioReusableItemsThree
                                            sliceStart={96}
                                            sliceEnd={105}
                                            data={portfolio_data}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="brand"
                                    role="tabpanel"
                                    aria-labelledby="brand-tab"
                                >
                                    <div className="row  g-5">
                                    <PortfolioReusableItemsThree
                                            sliceStart={105}
                                            sliceEnd={107}
                                            data={portfolio_data}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="project"
                                    role="tabpanel"
                                    aria-labelledby="project-tab"
                                >
                                    <div className="row  g-5">
                                    <PortfolioReusableItemsThree
                                            sliceStart={107}
                                            sliceEnd={110}
                                            data={portfolio_data}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="digital"
                                    role="tabpanel"
                                    aria-labelledby="digital-tab"
                                >
                                    <div className="row  g-5">
                                    <PortfolioReusableItemsThree
                                            sliceStart={110}
                                            sliceEnd={114}
                                            data={portfolio_data}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="creative"
                                    role="tabpanel"
                                    aria-labelledby="creative-tab"
                                >
                                    <div className="row  g-5">
                                    <PortfolioReusableItemsThree
                                            sliceStart={114}
                                            sliceEnd={117}
                                            data={portfolio_data}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="mockup"
                                    role="tabpanel"
                                    aria-labelledby="mockup-tab"
                                >
                                    <div className="row  g-5">
                                    <PortfolioReusableItemsThree
                                            sliceStart={117}
                                            sliceEnd={119}
                                            data={portfolio_data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="portfolio__more text-center mt-50">
                                <Link className="bd-btn is-btn-anim" href="/portfolio">
                                    <span className="bd-btn-inner">
                                        <span className="bd-btn-normal">View all project</span>
                                        <span className="bd-btn-hover">View all project</span>
                                        <i className="contentHidden"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioGallaryTab;
