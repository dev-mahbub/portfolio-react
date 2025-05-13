import React from 'react';
import ColorPalette from './ColorPalette';
import ColorGradient from './ColorGradient';
import Typography from './Typography';
import FormElement from './FormElement';
import PaginationElement from './Pagination';
import Tooltips from './Tooltips';
import AvatarElement from './AvatarElement';

const StyleGuideMain = () => {
    return (
        <>
            <div className="style-guide__area section-space">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-3 col-lg-4">
                            <div className="widget-sidebar bd-sticky__top">
                                <div className="content-item-content">
                                    <div className="widget-details">
                                        <nav className="onepagenav">
                                            <ul className="mainmenu rbt-course-details-list-wrapper">
                                                <li className="current"><a href="#colorPalette"><span>1. Color
                                                    Palette</span></a></li>
                                                <li><a href="#gradient"><span>2. Color Gradient</span></a></li>
                                                <li><a href="#typography"><span>3. Typography</span></a></li>
                                                <li><a href="#formElements"><span>4. Form Elements</span></a></li>
                                                <li><a href="#pagination"><span>5. Pagination</span></a></li>
                                                <li><a href="#tooltips"><span>6. Tooltips</span></a></li>
                                                <li><a href="#avatar"><span>7. Avatar</span></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="guide__widget-box">
                                <ColorPalette />
                                <div className="elements__divider">
                                    <hr />
                                </div>
                                <ColorGradient />
                                <div className="elements__divider">
                                    <hr />
                                </div>
                                <Typography />
                                <div className="elements__divider">
                                    <hr />
                                </div>
                                <FormElement />
                                <div className="elements__divider">
                                    <hr />
                                </div>
                                <PaginationElement />
                                <div className="elements__divider">
                                    <hr />
                                </div>
                                <Tooltips />
                                <div className="elements__divider">
                                    <hr />
                                </div>
                                <AvatarElement />
                                <div className="elements__divider">
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StyleGuideMain;