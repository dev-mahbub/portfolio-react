import customerReviewData from '@/data/customer-review-data';
import Image from 'next/image';
import React from 'react';

const CustomerReviewArea = () => {

    return (
        <>
            <div className="customer-review-area section-space theme-bg-secondary">
                <div className="container">
                    <div className="customer-review-title mb-45">
                        <div className="section-head text-center section__title-space">
                            <div className="section__subtitle bg-field">Customers review</div>
                            <h2 className="section-title mb-10">Our Satisfied Customers</h2>
                            <p className="description">Join the ranks of our satisfied customers who have transformed their
                                educational platforms with our powerful and intuitive HTML them</p>
                        </div>
                    </div>
                    <div className="customer-review-wrapper">
                        <div className="customer-review-wrap">

                            {
                                customerReviewData.slice(0, 6).map((item) => (
                                    <div className="customer-review-style-1" key={item.id}>
                                        <div className="content">
                                            <div className="rating-icon">
                                                <Image src={item.icon} width={113} height={17} alt="image not found" />
                                            </div>
                                            <p className="content-title">for <span>{" "} {item.title}</span></p>
                                            <p className="text">{item.desc}</p>
                                            <div className="info">
                                                <h5 className="title"> <span>by</span>{" "} {item.authorName}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="customer-review-wrap">
                            {
                                customerReviewData.slice(6, 12).map((item) => (
                                    <div className="customer-review-style-1" key={item.id}>
                                        <div className="content">
                                            <div className="rating-icon">
                                                <Image src={item.icon} width={113} height={17} alt="image not found" />
                                            </div>
                                            <p className="content-title">for <span>{" "} {item.title}</span></p>
                                            <p className="text">{item.desc}</p>
                                            <div className="info">
                                                <h5 className="title"><span>by</span>{" "} {item.authorName}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="customer-review-wrap">
                            {
                                customerReviewData.slice(12, 19).map((item) => (
                                    <div className="customer-review-style-1" key={item.id}>
                                        <div className="content">
                                            <div className="rating-icon">
                                                <Image src={item.icon} width={113} height={17} alt="image not found" />
                                            </div>
                                            <p className="content-title">for <span>{" "} {item.title}</span></p>
                                            <p className="text">{item.desc}</p>
                                            <div className="info">
                                                <h5 className="title"><span>by</span>{" "} {item.authorName}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="customer-review-wrap">
                            {
                                customerReviewData.slice(19, 25).map((item) => (
                                    <div className="customer-review-style-1" key={item.id}>
                                        <div className="content">
                                            <div className="rating-icon">
                                                <Image src={item.icon} width={113} height={17} alt="image not found" />
                                            </div>
                                            <p className="content-title">for <span>{" "} {item.title}</span></p>
                                            <p className="text">{item.desc}</p>
                                            <div className="info">
                                                <h5 className="title"><span>by</span>{" "} {item.authorName}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerReviewArea;