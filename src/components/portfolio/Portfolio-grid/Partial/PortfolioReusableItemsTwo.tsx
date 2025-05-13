
import { imageLoader } from '@/hooks/ImageLoader';
import PhotoPopupAnimation from '@/hooks/photo-popup-animation';
import Image from 'next/image';
import { PhotoView } from 'react-photo-view';
import Link from 'next/link';
import { TPortfolio } from '@/interFace/type';

type TPortfolioItemsProps ={
sliceStart:number;
sliceEnd:number;
data:TPortfolio[]
}
// Define PortfolioItems component
const PortfolioReusableItemsTwo = ({ sliceStart, sliceEnd, data }:TPortfolioItemsProps ) => {
  const slicedData = data.slice(sliceStart, sliceEnd);

  return (
    <PhotoPopupAnimation>
      {slicedData.map((item) => (
        <div className="col-lg-6 col-md-6" key={item.id}>
          <div className="portfolio__item style-seven">
            <div className="portfolio__item-thumb">
              <Image
                src={item.image}
                loader={imageLoader}
                placeholder="blur"
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
                alt="image not found"
              />
              <div className="portfolio__item-btn">
                <span className="icon__box">
                  <PhotoView src={item.image.src}>
                    <button className="popup-image circle-btn is-bg-white is-btn-large">
                      {" "}
                      <i className="icon-plus"></i>
                    </button>
                  </PhotoView>
                </span>
              </div>
            </div>
            <div className="portfolio__item-content">
              <div className="portfolio__item-info">
                <div className="portfolio__tag">
                  <Link href={`/portfolio/portfolio-details/${item.id}`}>{item.tagName}</Link>
                </div>
                <h5 className="portfolio__item-title underline">
                  <Link href={`/portfolio/portfolio-details/${item.id}`}>
                    {item.title}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </PhotoPopupAnimation>
  );
};

export default PortfolioReusableItemsTwo;