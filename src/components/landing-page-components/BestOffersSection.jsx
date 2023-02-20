import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import bestOfferSection from '../../mockApi/bestOffersSection'
import landingPageApiDataAtom from '../../recoil/atoms/landingPageApiDataAtom';

const BestOffersSection = () => {

    const [landingApiData, setLandingApiData] = useRecoilState(landingPageApiDataAtom);

    // useEffect(() => {
    //     console.log(landingApiData?.best_offers?.soup)
    // }, [landingApiData])


    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 px-5 lg:px-10 mb-8'>
            <div className='w-full col-start-1 col-end-2 bg-[color:var(--primary-color)] rounded-[15px] lg:pt-4'>
                <h1 className='poppins text-center py-3 text-[20px] lg:text-[25px] font-[500]'>{bestOfferSection?.soup?.title}</h1>
                <div className='w-full lg:my-5 lg:mt-10 flex justify-center items-center'>
                    <img src={bestOfferSection?.soup?.image} alt="" />
                </div>
                <h1 className='poppins text-[15px] md:text-[20px] lg:text-[25px] font-[500] text-center lg:py-2 lg:mt-10'>{bestOfferSection?.soup?.offer}</h1>
                <h1 className='poppins text-[12px] md:text-[15px] lg:text-[20px] text-center py-2'>{bestOfferSection?.soup?.item}</h1>
            </div>
            <div className='w-full grid grid-cols-2 gap-4 lg:gap-8 lg:col-start-2 lg:col-end-4'>
                <div className='w-full flex flex-col md:flex-row justify-between rounded-[15px] bg-[color:var(--primary-color)] p-2'>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <h1 className='text-[20px] md:text-[25px] lg:text-[30px] poppins'>{bestOfferSection?.beverages?.offer}</h1>
                        <h1 className='text-[16px] md:text-[11px] lg:text-[16px] poppins'>{bestOfferSection?.beverages?.item}</h1>
                    </div>
                    <div className='lg:w-full flex justify-center items-center'>
                        <img src={bestOfferSection?.beverages?.image} className='w-[400px]' alt="" />
                    </div>
                </div>
                <div className='w-full flex flex-col md:flex-row justify-between rounded-[15px] bg-[color:var(--primary-color)] p-2'>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <h1 className='text-[20px] md:text-[25px] lg:text-[30px] poppins'>{bestOfferSection?.flour?.offer}</h1>
                        <h1 className='text-[16px] md:text-[11px] lg:text-[16px] poppins'>{bestOfferSection?.flour?.item}</h1>
                    </div>
                    <div className='lg:w-full flex justify-center items-center'>
                        <img src={bestOfferSection?.flour?.image} className='w-[400px]' alt="" />
                    </div>
                </div>
                <div className='w-full flex flex-col md:flex-row justify-between rounded-[15px] bg-[color:var(--primary-color)] p-2'>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <h1 className='text-[20px] md:text-[25px] lg:text-[30px] poppins'>{bestOfferSection?.spices?.offer}</h1>
                        <h1 className='text-[16px] md:text-[11px] lg:text-[16px] poppins'>{bestOfferSection?.spices?.item}</h1>
                    </div>
                    <div className='lg:w-full flex justify-center items-center'>
                        <img src={bestOfferSection?.spices?.image} className='w-[400px]' alt="" />
                    </div>
                </div>
                <div className='w-full flex flex-col md:flex-row justify-between rounded-[15px] bg-[color:var(--primary-color)] p-2'>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <h1 className='text-[20px] md:text-[25px] lg:text-[30px] poppins'>{bestOfferSection?.dosa_mix?.offer}</h1>
                        <h1 className='text-[16px] md:text-[11px] lg:text-[16px] poppins'>{bestOfferSection?.dosa_mix?.item}</h1>
                    </div>
                    <div className='lg:w-full flex justify-center items-center'>
                        <img src={bestOfferSection?.dosa_mix?.image} className='w-[400px]' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestOffersSection