import ElementsBreadcrumb from '@/components/common/Breadcrumb/ElementsBreadcrumb';
import React from 'react';
import AwardStyleOne from './AwardStyleOne';
import AwardStyleTwo from './AwardStyleTwo';

const ElementsAwardMain = () => {
    return (
        <>
            <ElementsBreadcrumb elementTitle='Award Style' />
            {/* award style one */}
            <section id="homeworks" className="bd-award__area section-space theme-bg-secondary">
                <div className="container">
                    <AwardStyleOne />
                </div>
            </section>
            {/* award style one end */}
            {/* award style two */}
            <section className="bd-award__area section-space">
                <div className="container">
                    <AwardStyleTwo />
                </div>
            </section>
            {/* award style end */}
        </>
    );
};

export default ElementsAwardMain;