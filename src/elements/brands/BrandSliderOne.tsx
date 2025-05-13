import React from 'react';
import brand_data from '@/data/brand-data';
import Image from 'next/image';

const BrandSliderOne = () => {
    return (
        <>
            <div className="row g-5">
                {
                    brand_data.slice(0, 4).map((item) => (
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" key={item.id}>
                            <div className="brand__item wow fadeIn" data-wow-delay={item.wowDelay}>
                                <div className="brand__thumb">
                                    <Image src={item.image} width={122} height={95} alt="image not found" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default BrandSliderOne;