import React, { useEffect } from 'react'
import yt from '../../assets/images/youtube.png'
import product from '../../assets/images/single_product.png'
import foodDetails from '../../mockApi/singleFoodProductLandingPage'
import { useRecoilState } from 'recoil'
import landingPageApiDataAtom from '../../recoil/atoms/landingPageApiDataAtom'
import { VITE_BASE_LINK } from '../../../baseLink'
import YouTube from 'react-youtube'
import ProductCard from '../individual-components/ProductCard'
import { Puff } from 'react-loader-spinner'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SingleFoodProductSection = () => {

    const [landingApiData, setLandingApiData] = useRecoilState(landingPageApiDataAtom);

    // useEffect(() => {
    //     console.log(landingApiData?.single_product_details?.food)
    // }, [landingApiData])

    const opts = {
        height: 300,
        width: "100%",
    };

    return (
        <div className='w-full md:w-[70%] mx-auto px-4 md:px-10 mb-6'>
            {
                landingApiData.single_product_details ?
                    <div className='flex flex-col lg:flex-row justify-center gap-4'>


                        <div className='flex-1 bg-[color:var(--primary-color)] rounded-[15px] pb-6 md:pb-14'>
                            <h1 className='poppins text-[15px] md:text-[18px] font-[500] py-4 text-center'>{landingApiData?.single_product_details?.video_data?.title}</h1>
                            <div className='w-full flex justify-center items-center h-full'>
                                {/* <img src={VITE_BASE_LINK + landingApiData?.single_product_details?.video_data?.video} className='max-h-[350px] w-full' alt="" /> */}
                                <YouTube
                                    // videoId={data?.video_id}
                                    videoId={
                                        landingApiData?.single_product_details?.video_data?.video
                                            .split("/")
                                            .reverse()[0]
                                            .includes("watch?v=")
                                            ? landingApiData?.single_product_details?.video_data?.video.split("watch?v=").reverse()[0]
                                            : landingApiData?.single_product_details?.video_data?.video.split("/").reverse()[0]
                                    }
                                    opts={opts}
                                    className="w-full"
                                />
                                {/* video */}
                            </div>
                        </div>


                        {/* <div className='flex-1 rounded-[15px]'>
                    <p className='poppins text-[15px] md:text-[18px] font-[500] py-4 text-center'>{landingApiData?.single_product_details?.food?.title}</p>
                    <div className='w-[80%] md:w-[65%] mx-auto flex justify-center items-center bg-[#FCEDD1] mt-6'>
                        <img src={VITE_BASE_LINK + landingApiData?.single_product_details?.food?.image} className='w-[200px]' alt="" />
                    </div>
                    <div className='w-[80%] md:w-[65%] mx-auto flex justify-between my-1'>
                        <div className='max-w-[130px]'>
                            <p className='poppins text-[13px] md:text-[17px]'>{landingApiData?.single_product_details?.food?.title}</p>
                        </div>
                        <div>
                            <p className='poppins text-[12px] md:text-[15px]'>{foodDetails?.food?.weight}gm</p>
                            <p className='poppins text-[13px] md:text-[17px]'>₹ {foodDetails?.food?.price}</p>
                        </div>
                    </div>
                    <div className=' w-full md:w-[85%] flex justify-end mb-2 mt-4'>
                        <div className='w-full flex flex-col items-end pr-8 md:pr-4'>
                            <button className='bg-[#FCF55C] active:scale-[0.96] active:bg-[#dad24a] text-[13px] md:text-[15px] px-2 md:px-4 py-1 '>ADD TO CART</button>
                            <p className='text-[12px] md:text-[13px] underline'>View more</p>
                        </div>
                    </div>
                    {
                        landingApiData?.single_product_details?.food &&
                        <ProductCard
                            id={landingApiData?.single_product_details?.food?.id}
                            title={landingApiData?.single_product_details?.food?.title}
                            image={landingApiData?.single_product_details?.food?.image}
                            weight={landingApiData?.single_product_details?.food?.weight}
                            price={landingApiData?.single_product_details?.food?.price}
                            status={landingApiData?.single_product_details?.food?.cart_status} />}

                </div> */}



                        <div className='flex-1 bg-[color:var(--primary-color)] rounded-[15px]'>
                            <p className='poppins text-[15px] md:text-[18px] font-[500] py-4 text-center'>{landingApiData?.single_product_details?.blog?.title}</p>
                            <div className='w-full flex flex-col justify-center items-center'>
                                <div className='w-[86%] md:w-[80%] mx-auto mb-2'>
                                    <div className='w-full mt-5'>
                                        <h1 className='poppins text-[12px] md:text-[14px] lg:text-[14px] '>{landingApiData?.single_product_details?.blog?.content}</h1>
                                    </div>
                                    <div className='w-[90%] lg:w-[85%] mx-auto mt-6 mb-4 lg:mb-8'>
                                        {
                                            landingApiData?.single_product_details?.blog?.points?.map((data, i) => (
                                                <li key={i} className='poppins text-[12px] md:text-[13px] lg:text-[14px] my-1 md:my-2'>{data}</li>
                                            ))
                                        }
                                    </div>
                                </div>
                                {/* <div className='w-full flex justify-center items-center mb-3'>
                                    <button className='bg-[#371106] px-8 py-2 text-white text-[13px] md:text-[15px] active:scale-[0.96] active:bg-[#371106d7]'>Read More</button>
                                </div> */}
                            </div>
                        </div>


                    </div>

                    :
                    <div className='w-full aspect-square flex justify-center h-[20vh] items-center'>
                        <div className='w-[96%] mx-auto aspect-square mt-5 md:mt-0 h-[20vh] justify-center items-center'>
                            {/* skeleton */}
                            <div className='w-full'>
                                <div className='w-full'>
                                    <SkeletonTheme baseColor="#f0f0f0" highlightColor="#d6d6d6">
                                        <p>
                                            <Skeleton width='100%' height='20vh' />
                                        </p>
                                    </SkeletonTheme>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default SingleFoodProductSection