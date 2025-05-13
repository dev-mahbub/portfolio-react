import Link from "next/link";
import React from "react";
import shapeOne from '../../../public/assets/images/landing/shape/landing-four-line-shape.png';
import shapeTwo from '../../../public/assets/images/landing/shape/landing-four-line-shape-02.png';
import Image from "next/image";

const MainIndexPageFooter = () => {
  return (
    <>
      <footer className="landing-footer theme-bg-secondary">
        <div className="landing-footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-inner text-center">
                  <h2 className="title mb-20">Start Build Your Website With <span
                    className="bd-text-primary">Portlu</span>
                  </h2>
                  <p className="description">Purchase Portlu today and start to creating your beautiful Ai
                    application
                    website.</p>
                  <Link className="bd-btn is-btn-anim" href="#">
                    <span className="bd-btn-inner">
                      <span className="bd-btn-normal">Purchase now</span>
                      <span className="bd-btn-hover">Purchase now</span>
                      <i className="contentHidden"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-landing">
          <div className="inner text-center">
            <p className="description">Copyright © 2024 <Link href="#">Portlu</Link> Themes. All Rights Reserved</p>
          </div>
        </div>
        <div className="four-line line-left">
          <Image src={shapeOne} style={{ width: "100%", height: "auto" }} alt="Four Line" />
        </div>
        <div className="four-line line-right">
          <Image src={shapeTwo} style={{ width: "100%", height: "auto" }} alt="Four Line" />
        </div>
      </footer>
    </>
  );
};

export default MainIndexPageFooter;
