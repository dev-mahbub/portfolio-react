import React from 'react';

const FaqAreaThree = () => {
    return (
        <>
            <div className="row justify-content-center justify-content-center wow fadeInUp" data-wow-delay=".5s">
                <div className="col-xxl-8 col-xl-8 col-lg-10">
                    <div className="faq__style-3">
                        <div className="bd__faq">
                            <div className="accordion" id="accordionExampleThree">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingNine">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseNine" aria-expanded="true"
                                            aria-controls="collapseNine">
                                            <span>Q.</span> Accordion Item #1</button>
                                    </h2>
                                    <div id="collapseNine" className="accordion-collapse collapse show"
                                        aria-labelledby="headingNine" data-bs-parent="#accordionExampleThree">
                                        <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur
                                            adipisicing elit. Modi consequatur quo, cupiditate quia et beatae
                                            veritatis! Magnam a mollitia voluptate odio, ex excepturi temporibus ut
                                            sit ipsa, repellat, harum maxime. Et impedit sapiente minima minus,
                                            dolor nihil quis quod sed soluta nulla reiciendis voluptate, quam omnis
                                            cupiditate consectetur. Nostrum, eum?</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTen">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTen"
                                            aria-expanded="false" aria-controls="collapseTen">
                                            <span>Q.</span> Accordion Item #2</button>
                                    </h2>
                                    <div id="collapseTen" className="accordion-collapse collapse"
                                        aria-labelledby="headingTen" data-bs-parent="#accordionExampleThree">
                                        <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur
                                            adipisicing elit. Modi consequatur quo, cupiditate quia et beatae
                                            veritatis! Magnam a mollitia voluptate odio, ex excepturi temporibus ut
                                            sit ipsa, repellat, harum maxime. Et impedit sapiente minima minus,
                                            dolor nihil quis quod sed soluta nulla reiciendis voluptate, quam omnis
                                            cupiditate consectetur. Nostrum, eum?</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEleven">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseEleven"
                                            aria-expanded="false" aria-controls="collapseEleven">
                                            <span>Q.</span> Accordion Item #3</button>
                                    </h2>
                                    <div id="collapseEleven" className="accordion-collapse collapse"
                                        aria-labelledby="headingEleven" data-bs-parent="#accordionExampleThree">
                                        <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur
                                            adipisicing elit. Modi consequatur quo, cupiditate quia et beatae
                                            veritatis! Magnam a mollitia voluptate odio, ex excepturi temporibus ut
                                            sit ipsa, repellat, harum maxime. Et impedit sapiente minima minus,
                                            dolor nihil quis quod sed soluta nulla reiciendis voluptate, quam omnis
                                            cupiditate consectetur. Nostrum, eum?</div>
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

export default FaqAreaThree;