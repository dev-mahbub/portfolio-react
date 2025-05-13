
import LeaveReplyForm from '@/elements/form/LeaveReplyForm';
import React from 'react';

const PortfolioCommentForm = () => {
    return (
        <>
             <section className="portfolio-comment-form__area section-space theme-bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="postbox__comment-form">
                            <h4 className="postbox__comment-form-title">Leave A Reply</h4>
                            <p>Your email address will not be published. Required fields are marked *</p>
                         <LeaveReplyForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default PortfolioCommentForm;