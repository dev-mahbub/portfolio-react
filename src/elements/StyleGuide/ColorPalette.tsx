import React from 'react';

const ColorPalette = () => {
    return (
        <>
            <div id="colorPalette" className="elements__area">
                <div className="wrapper">
                    <h5 className="style__guide-title mb-20">Color Palette</h5>
                    <div className="row g-5">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="color-box-inner">
                                <div className="color-box bg-theme-primary"></div>
                                <div className="content mt-10">
                                    <span className="color-box-title">#4286F4</span>
                                    <h6 className="title">Primary Color</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="color-box-inner">
                                <div className="color-box bg-theme-secondary"></div>
                                <div className="content mt-10">
                                    <span className="color-box-title">#FB5141</span>
                                    <h6 className="title">Secondary Color</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="color-box-inner">
                                <div className="color-box bd-common-white"></div>
                                <div className="content mt-10">
                                    <span className="color-box-title">#fff</span>
                                    <h6 className="title">Common White</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="color-box-inner">
                                <div className="color-box bd-bg-secondary"></div>
                                <div className="content mt-10">
                                    <span className="color-box-title">#1D1E1F</span>
                                    <h6 className="title">Bg-primary</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="color-box-inner">
                                <div className="color-box bd-bg-tertiary"></div>
                                <div className="content mt-10">
                                    <span className="color-box-title">#434348</span>
                                    <h6 className="title">Bg-tertiary</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="color-box-inner">
                                <div className="color-box bd-bg-quaternary"></div>
                                <div className="content mt-10">
                                    <span className="color-box-title">#22272C</span>
                                    <h6 className="title">Bg-quaternary</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ColorPalette;