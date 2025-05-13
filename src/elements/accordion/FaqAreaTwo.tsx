import Link from 'next/link';
import React from 'react';

const FaqAreaTwo = () => {
    return (
        <>
            <div className="row justify-content-center justify-content-center wow fadeInUp" data-wow-delay=".5s">
                <div className="col-xxl-8 col-xl-8 col-lg-10">
                    <div className="faq__style-2">
                        <div className="bd__faq">
                            <div className="accordion accordion-border" id="accordionExampleTwo">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix" aria-expanded="true"
                                            aria-controls="collapseSix">
                                            <span><i className="icon-ux-design"></i></span> Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse show"
                                        aria-labelledby="headingSix" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur
                                            adipisicing elit. Modi consequatur quo, cupiditate quia et beatae
                                            veritatis! Magnam a mollitia voluptate odio, ex excepturi temporibus ut
                                            sit ipsa, repellat, harum maxime. Et impedit sapiente minima minus,
                                            dolor nihil quis quod sed soluta nulla reiciendis voluptate, quam omnis
                                            cupiditate consectetur. Nostrum, eum? <Link href="/faq" className="">load
                                                more <i className="icon-arrow_forward"></i></Link></div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                            aria-expanded="false" aria-controls="collapseSeven">
                                            <span><i className="icon-design"></i></span> Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse"
                                        aria-labelledby="headingSeven" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur
                                            adipisicing elit. Modi consequatur quo, cupiditate quia et beatae
                                            veritatis! Magnam a mollitia voluptate odio, ex excepturi temporibus ut
                                            sit ipsa, repellat, harum maxime. Et impedit sapiente minima minus,
                                            dolor nihil quis quod sed soluta nulla reiciendis voluptate, quam omnis
                                            cupiditate consectetur. Nostrum, eum? <Link href="/faq" className="">load
                                                more <i className="icon-arrow_forward"></i></Link></div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEight">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseEight"
                                            aria-expanded="false" aria-controls="collapseEight">
                                            <span><i className="icon-creative"></i></span> Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="collapseEight" className="accordion-collapse collapse"
                                        aria-labelledby="headingEight" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur
                                            adipisicing elit. Modi consequatur quo, cupiditate quia et beatae
                                            veritatis! Magnam a mollitia voluptate odio, ex excepturi temporibus ut
                                            sit ipsa, repellat, harum maxime. Et impedit sapiente minima minus,
                                            dolor nihil quis quod sed soluta nulla reiciendis voluptate, quam omnis
                                            cupiditate consectetur. Nostrum, eum? <Link href="/faq" className="">load
                                                more <i className="icon-arrow_forward"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqAreaTwo;