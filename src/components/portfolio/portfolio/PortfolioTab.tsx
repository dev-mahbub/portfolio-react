"use client";
import { tabButtonData } from "@/data/portfolio-button-tab-data";
import portfolio_data from "@/data/portfolio-data";
import Link from "next/link";
import React from "react";
import PortfolioReusableItems from "./partial/PortfolioReusableItems";

const PortfolioTab = () => {
  return (
    <>
      <section className="bd__portfolio-area section-space">
        <div className="container">
          <div className="row g-5 section__title-space justify-content-center">
            <div className="col-xl-8 col-lg-8">
              <div className="bd__menu-tab">
                <ul className="bd__menu nav" id="myTab" role="tablist">
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
                    <PortfolioReusableItems
                      sliceStart={53}
                      sliceEnd={62}
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
                  <PortfolioReusableItems
                      sliceStart={62}
                      sliceEnd={64}
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
                    <PortfolioReusableItems
                      sliceStart={64}
                      sliceEnd={68}
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
                  <PortfolioReusableItems
                      sliceStart={68}
                      sliceEnd={71}
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
                  <PortfolioReusableItems
                      sliceStart={71}
                      sliceEnd={75}
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
                  <PortfolioReusableItems
                      sliceStart={75}
                      sliceEnd={78}
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
        </div >
      </section >
    </>
  );
};

export default PortfolioTab;
