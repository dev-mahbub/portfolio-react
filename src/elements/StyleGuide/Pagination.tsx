import Link from 'next/link';
import React from 'react';

const PaginationElement = () => {
    return (
        <>
            <div id="pagination" className="elements__area">
                <div className="wrapper">
                    <h5 className="style__guide-title mb-20">Pagination</h5>
                </div>
                <div className="row justify-content-between">
                    <div className="col-xxl-6">
                        <div className="pagination__wrapper">
                            <div className="bd-basic__pagination">
                                <nav>
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <i className="fa-sharp fa-regular fa-angle-left"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">1</Link>
                                        </li>
                                        <li>
                                            <Link href="#">2</Link>
                                        </li>
                                        <li>
                                            <span className="current">3</span>
                                        </li>
                                        <li>
                                            <Link href="#"><i className="fa-regular fa-ellipsis"></i></Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6">
                        <div className="pagination__wrapper">
                            <div className="bd-basic__pagination style-2">
                                <nav>
                                    <ul>
                                        <li>
                                            <span><Link href="#">Next</Link></span>
                                        </li>
                                        <li>
                                            <Link href="#">1</Link>
                                        </li>
                                        <li>
                                            <Link href="#">2</Link>
                                        </li>
                                        <li>
                                            <span className="current">3</span>
                                        </li>
                                        <li>
                                            <span><Link href="#">Prev</Link></span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaginationElement;