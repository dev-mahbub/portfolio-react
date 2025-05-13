import React from 'react';

const AboutTextArea = () => {
    return (
        <>
            <section className="bd-about-text__area section-space">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-4 col-lg-4">
                            <div className="about__inner-wrapper wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                                <h4 className="about__title"> {`We're`} here to design and digital experience</h4>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="about__text wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
                                <p className="mb-15">The agency looking to outsource design work. a company in search of a
                                    designer or
                                    product work. a agency that needs a landing page a startup that wants to launch an app
                                    or an
                                    enterprise that plans to rebrand. or redesign its website, we welcome any challenge with
                                    our
                                    arms wide open builds digital products that let people do things differently. Share your
                                    challenge with our team.</p>
                                <p>A agency we are specialize in designing, building, shipping and scaling beautiful, usable
                                    products with blazing fast efficiency we welcome any challenge with our arms wide open.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutTextArea;