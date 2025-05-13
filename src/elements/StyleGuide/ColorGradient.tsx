import React from 'react';

const ColorGradient = () => {
    return (
        <>
            <div id="gradient" className="elements__area">
                <div className="wrapper">
                    <h5 className="style__guide-title mb-20">Color Gradient</h5>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="color-box-inner">
                                <div className="color-box gradient-bg-1"></div>
                                <div className="content mt-10">
                                    <h6 className="title">Gradient 1</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="color-box-inner">
                                <div className="color-box gradient-bg-2"></div>
                                <div className="content mt-10">
                                    <h6 className="title">Gradient 2</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="color-box-inner">
                                <div className="color-box gradient-bg-3"></div>
                                <div className="content mt-10">
                                    <h6 className="title">Gradient 3</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ColorGradient;