import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousalData from '../../mockApi/landingPageSingleImageCarousal';
import leftArrow from '../../assets/icons/carousal-left-round.svg'
import rightArrow from '../../assets/icons/carousal-right-round.svg'
import { useRecoilState } from 'recoil';
import landingPageApiDataAtom from '../../recoil/atoms/landingPageApiDataAtom';
import { VITE_BASE_LINK, VITE_BASE_LINK_2 } from '../../../baseLink';

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={` ${className} w-fit z-[100]`} onClick={onClick}>
            <img src={leftArrow} alt="previous" className="w-full max-w-[30px] md:max-w-[100px] translate-x-[33px] -translate-y-[40px]" />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} w-fit z-[100]`} onClick={onClick}>
            <img src={rightArrow} alt="next" className="w-full max-w-[30px] md:max-w-[100px] -translate-x-[33px] -translate-y-[40px]" />
        </div>
    );
};

const SingleImageCarousal = () => {

    const [landingApiData, setLandingApiData] = useRecoilState(landingPageApiDataAtom);

    // useEffect(() => {
    //   console.log(landingApiData)
    // }, [landingApiData])

    let settings = {
        // arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };

    return (
        <div className='hidden md:block w-[80%] mx-auto my-4 md:my-[100px]'>
            <Slider
                className="w-full px-4 md:px-10 overflow-hidden rounded-[15px] mx-1 md:rounded-[25px]"
                {...settings}
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
            >
                {
                    landingApiData?.large_carousal_images?.map((data, index) => (
                        <div className="w-full flex justify-center items-center outline-none border-2 border-[#696969] rounded-[15px] md:rounded-[25px] cursor-pointer z-[100]" key={index}>
                            <img src={VITE_BASE_LINK_2 + data?.image} className=" w-full object-contain z-[100] rounded-[15px] md:rounded-[25px]" />
                        </div>
                    ))
                }
            </Slider >
        </div >
    )
}

export default SingleImageCarousal