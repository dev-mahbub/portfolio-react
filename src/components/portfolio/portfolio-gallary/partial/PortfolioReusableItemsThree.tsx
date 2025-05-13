
import { imageLoader } from '@/hooks/ImageLoader';
import PhotoPopupAnimation from '@/hooks/photo-popup-animation';
import Image from 'next/image';
import { TPortfolio } from '@/interFace/type';

type TPortfolioItemsProps ={
sliceStart:number;
sliceEnd:number;
data:TPortfolio[]
}
// Define PortfolioItems component
const PortfolioReusableItemsThree = ({ sliceStart, sliceEnd, data }:TPortfolioItemsProps ) => {
  const slicedData = data.slice(sliceStart, sliceEnd);

  return (
    <PhotoPopupAnimation>
      {slicedData.map((item) => (
         <div className="col-lg-4 col-md-6" key={item.id}>
         <div className=" portfolio__item style-seven is-bg-none">
             <div className="portfolio__item-thumb fix bd-img-reveal bd-img-reveal-item">
                  <Image src={item.image} loader={imageLoader} placeholder="blur" loading="lazy" style={{ width: "100%", height: "auto" }} alt="image not found"
              />
              <div className='portfolio-item-content'>
                <h4 className='portfolio__hover-title'>{item.title}</h4>
                <p>{item.tagName}</p>
              </div>
             </div>
         </div>
     </div>
      ))}
    </PhotoPopupAnimation>
  );
};

export default PortfolioReusableItemsThree;