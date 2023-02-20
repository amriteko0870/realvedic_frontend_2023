import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import bannerData from '../../mockApi/landingPageBanner'
import landingPageApiDataAtom from '../../recoil/atoms/landingPageApiDataAtom'
import { VITE_BASE_LINK, VITE_BASE_LINK_2 } from '../../../baseLink'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const LandingPageBanners = () => {

  const [landingApiData, setLandingApiData] = useRecoilState(landingPageApiDataAtom);

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  // useEffect(() => {
  //   console.log(landingApiData)
  // }, [landingApiData])


  return (
    <div className='w-full md:px-10 md:mt-8'>
      {/* <div className='w-full flex flex-col md:flex-row gap-4 md:gap-8 justify-between max-h-[400px] overflow-hidden'> */}
      {/* {
        landingApiData?.dual_banners?.map((data, i) => (
          <div key={i} className='w-full'>
            <img src={VITE_BASE_LINK + data?.image} className='w-full' alt="" />
          </div>
        ))
      } */}
      {
        <Slider
          className="w-full overflow-hidden z-[90]"
          {...settings}
        >
          {
            landingApiData?.banner?.map((data, i) => (
              <div key={i} className='w-full overflow-hidden'>
                <Link to={`/single-product/` + data?.product_id}>
                  <div>
                    <img src={VITE_BASE_LINK_2 + data?.image} className='w-full min-h-[20vh] md:h-auto object-cover md:object-contain' alt="" />
                  </div>
                </Link>
              </div>
            ))
          }
        </Slider >
      }
    </div>
  )
}

export default LandingPageBanners