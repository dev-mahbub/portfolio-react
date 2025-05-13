import React from 'react';
import blogImg1 from '../../../../public/assets/images/blog/details/blog-details-01.png';
import blogImg2 from '../../../../public/assets/images/blog/details/blog-details-02.png';
import quoteImg from '../../../../public/assets/images/shape/testimonial-quote-02.png';
import Image from 'next/image';

const PostboxContent = () => {
    return (
        <>
            <div className="postbox__details-content-wrapper">
                <h5 className="postbox__details-title">Just set something gratifying to indulge
                    in after completing a certain undertaking. The best time to learn about
                    motivation is before you’re in the thick of things.</h5>
                <p className="mb-20">One morning, when Gregor Samsa woke from troubled dreams,
                    he found himself transformed in his bed into a horrible vermin. He lay
                    on his armour-like back, and if he lifted his head a little he could see
                    his brown belly, slightly domed and divided by arches into stiff
                    sections. The bedding was hardly able to cover it and seemed ready to
                    slide off any moment.</p>
                <p className="mb-45">I should be incapable of drawing a single stroke at the
                    present moment; and yet I feel that never was a greater artist than now.
                </p>
                <div className="postbox__thumb-wrapper">
                    <div className="postbox__thumb">
                        <Image src={blogImg1} style={{ width: "100%", height: "auto" }}
                            alt="image not found" />
                    </div>
                    <div className="postbox__thumb">
                        <Image src={blogImg2} style={{ width: "100%", height: "auto" }}
                            alt="image not found" />
                    </div>
                </div>
                <p>His many legs, pitifully thin compared with the size of the rest of him,
                    waved about helplessly as he looked. {`"What's`} happened to {`me?"`} he
                    thought. It {`wasn't`} a dream. His room, a proper human room although a
                    little too small, lay peacefully between its four familiar walls. A
                    collection of textile samples lay spread out on the table - Samsa was a
                    travelling salesman - and above it there hung a picture that he had
                    recently cut out of an illustrated magazine.</p>
                <div className="postbox__quote">
                    <blockquote>
                        <div className="postbox__quote-icon">
                            <Image src={quoteImg} style={{ width: "100%", height: "auto" }}
                                alt="image not found" />
                        </div>
                        <p>“Believe in the magic within you. Your potential is limitless,
                            and every small step forward brings you closer to the
                            extraordinary”</p>
                    </blockquote>
                </div>
                <div className="postbox__features">
                    <h5 className="postbox__features-title">Learning from failure</h5>
                    <p>The European languages are members of the same family. Their separate
                        existence is a myth. For science europe uses the same vocabulary.
                    </p>

                    <ul>
                        <li>Get yourself comfortable.</li>
                        <li>Manage your workspace and organize your desk.</li>
                        <li>Keep In touch with your co-workers.</li>
                    </ul>
                </div>
                <p>The new common language will be more simple and regular than the existing
                    European languages. It will be as simple as Occidental; in fact, it will
                    be Occidental. To an English person, it will seem like simplified
                    English, as a skeptical Cambridge friend of mine told me what Occidental
                    is. The European languages are members of the same family.</p>

            </div>
        </>
    );
};

export default PostboxContent;