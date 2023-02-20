import React from 'react'
import Slider from "react-slick";
import LandingPageBanners from './LandingPageBanners'
import landingPageSmallCarousal from '../../mockApi/landingPageSmallCarousal'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import landingPageApiDataAtom from '../../recoil/atoms/landingPageApiDataAtom';
import { useRecoilState } from 'recoil';
import { VITE_BASE_LINK, VITE_BASE_LINK_2 } from '../../../baseLink';
import { Link } from 'react-router-dom';

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={` ${className} w-fit z-[800]`} onClick={onClick}>
            {/* <img src={leftArrow} alt="previous" className=" w-[40px] md:w-[100px] lg:-translate-x-6" /> */}
            <p>prev</p>
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} w-fit`} onClick={onClick}>
            {/* <img src={rightArrow} alt="next" className=" w-[40px] md:w-[100px] lg:translate-x-7" /> */}
            <p>next</p>
        </div>
    );
};

const SmallImageCarousal = () => {

    const [landingApiData, setLandingApiData] = useRecoilState(landingPageApiDataAtom);

    let settings = {
        // dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    let mobileSettings = {
        // dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };


    return (
        <>
            <div className='hidden md:block w-[96%] mx-auto bg-[color:var(--primary-color)] mt-10 py-2 pt-4'>
                <div className='flex justify-between items-center gap-2'>
                    <div className='w-full max-w-[80px] flex justify-center items-center ml-4 font-[500]'>
                        <h1 className='poppins font-[600] text-[17px]'>Best Sellers</h1>
                    </div>
                    <Slider
                        className="w-full overflow-hidden"
                        {...settings}
                    >
                        {
                            landingApiData?.small_carousal_images?.map((data, index) => (
                                <Link to={`/single-product/` + data?.product_id} className="w-full max-w-[150px] flex justify-center items-center outline-none cursor-pointer mx-2" key={index}>
                                    <img src={VITE_BASE_LINK_2 + data?.image} className=" w-full object-contain" />
                                    <h1 className='text-[12px] text-center'>{data?.title}</h1>
                                </Link>
                            ))
                        }
                    </Slider >
                </div>
            </div >



            {/* mobile */}
            <nav className='block md:hidden w-full px-4'>
                <div className='w-[50%] mx-auto bg-[color:var(--primary-color)] flex justify-center items-center font-[500] mb-2 py-1 rounded-[12px]'>
                    <h1 className='poppins font-[500] text-[12px] pl-1'>Best Sellers</h1>
                </div>
                <div className=' w-full bg-[color:var(--primary-color)] mb-14 py-2 rounded-[15px] mt-2'>
                    <div className='flex justify-between items-center gap-2'>
                        <Slider
                            className="w-full overflow-hidden"
                            {...mobileSettings}
                        >
                            {
                                landingPageSmallCarousal?.images?.map((data, index) => (
                                    <div className="w-full flex justify-center items-center outline-none cursor-pointer" key={index}>
                                        <img src={data?.image} className="min-w-[80px] w-full object-contain" />
                                    </div>
                                ))
                            }
                        </Slider >
                    </div>
                </div >
            </nav>
        </>
    )
}

export default SmallImageCarousal

