import React from 'react';

const AcoordionStyleOne = () => {
    return (
        <>
            <div className="row align-items-center justify-content-center wow fadeInUp" data-wow-delay=".3s">
                <div className="col-xxl-8 col-xl-8 col-lg-10">
                    <div className="faq__style">
                        <div className="bd__faq">
                            <div className="accordion" id="accordionExampleFour">
                                <div className="accordion-item">
                                    <h5 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h5>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo" data-bs-parent="#accordionExampleFour">
                                        <div className="accordion-body">
                                            <span className="qualification__meta">DVI University (1997 - 2001)</span>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                                                consequatur quo, cupiditate quia et beatae veritatis! Magnam a
                                                mollitia voluptate odio, ex excepturi temporibus ut sit ipsa,
                                                repellat, harum maxime. Et impedit sapiente minima minus, dolor
                                                nihil quis quod sed soluta nulla reiciendis voluptate, quam omnis
                                                cupiditate consectetur. Nostrum, eum?</p>
                                            <h6 className="qualification__rating">4.30/5</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h5 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h5>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExampleFour">
                                        <div className="accordion-body">
                                            <span className="qualification__meta">DVI University (1997 - 2001)</span>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                                                consequatur quo, cupiditate quia et beatae veritatis! Magnam a
                                                mollitia voluptate odio, ex excepturi temporibus ut sit ipsa,
                                                repellat, harum maxime. Et impedit sapiente minima minus, dolor
                                                nihil quis quod sed soluta nulla reiciendis voluptate, quam omnis
                                                cupiditate consectetur. Nostrum, eum?</p>
                                            <h6 className="qualification__rating">4.30/5</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h5 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h5>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExampleFour">
                                        <div className="accordion-body">
                                            <span className="qualification__meta">DVI University (1997 - 2001)</span>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                                                consequatur quo, cupiditate quia et beatae veritatis! Magnam a
                                                mollitia voluptate odio, ex excepturi temporibus ut sit ipsa,
                                                repellat, harum maxime. Et impedit sapiente minima minus, dolor
                                                nihil quis quod sed soluta nulla reiciendis voluptate, quam omnis
                                                cupiditate consectetur. Nostrum, eum?</p>
                                            <h6 className="qualification__rating">4.30/5</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h5 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                            aria-expanded="false" aria-controls="collapseFour">
                                            Accordion Item #4
                                        </button>
                                    </h5>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                        aria-labelledby="headingFour" data-bs-parent="#accordionExampleFour">
                                        <div className="accordion-body">
                                            <span className="qualification__meta">DVI University (1997 - 2001)</span>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                                                consequatur quo, cupiditate quia et beatae veritatis! Magnam a
                                                mollitia voluptate odio, ex excepturi temporibus ut sit ipsa,
                                                repellat, harum maxime. Et impedit sapiente minima minus, dolor
                                                nihil quis quod sed soluta nulla reiciendis voluptate, quam omnis
                                                cupiditate consectetur. Nostrum, eum?</p>
                                            <h6 className="qualification__rating">4.30/5</h6>
                                        </div>
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

export default AcoordionStyleOne;