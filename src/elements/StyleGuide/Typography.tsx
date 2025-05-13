import React from 'react';

const Typography = () => {
    return (
        <>
            <div id="typography" className="elements__area">
                <div className="wrapper">
                    <h5 className="style__guide-title mb-20">Typography</h5>
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <h1 className="mb-20">H1. Heading</h1>
                            <h2 className="mb-20">H2. Heading</h2>
                            <h3 className="mb-20">H3. Heading</h3>
                            <h4 className="mb-20">H4. Heading</h4>
                            <h5 className="mb-20">H5. Heading</h5>
                            <h6 className="mb-20">H6. Heading</h6>
                        </div>
                        <div className="col-lg-6">
                            <p className="b1">B1- Lorem ipsum dolor sit amet consectetur adipiscing elit Ut
                                et massa mi. Aliquam in hendrerit urna.</p>
                            <p className="b2">B2- Lorem ipsum dolor sit amet consectetur adipiscing elit Ut
                                et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet</p>
                            <p className="b3">B3- Lorem ipsum dolor sit amet consectetur adipiscing elit Ut
                                et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet</p>
                        </div>
                    </div>
                    <div className="elements__divider">
                        <hr />
                    </div>
                    <div className="row align-items-center">
                        <div className="section__guide">
                            <h5 className="style__guide-title">Subtitle Style</h5>
                        </div>
                        <div className="col-xl-auto col-lg-6 col-md-6 mt-30">
                            <div className="subtitle">
                                <span className="section__subtitle">Section subtitle One</span>
                            </div>
                        </div>
                        <div className="col-xl-auto col-lg-6 col-md-6 mt-30">
                            <div className="subtitle">
                                <span className="section__subtitle bg-field">Section subtitle Two</span>
                            </div>
                        </div>
                        <div className="col-xl-auto col-lg-6 col-md-6 mt-30">
                            <div className="subtitle">
                                <span className="section__subtitle sec-border">Section subtitle Three</span>
                            </div>
                        </div>
                        <div className="col-xl-auto col-lg-6 col-md-6 mt-30">
                            <div className="subtitle">
                                <span className="section__subtitle bg-solid-field">Section subtitle
                                    Six</span>
                            </div>
                        </div>
                        <div className="col-xl-auto col-lg-6 col-md-6 mt-30">
                            <div className="subtitle">
                                <span className="section__subtitle-7 uppercase">Section subtitle
                                    seven</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Typography;