import React, { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { VITE_BASE_LINK_2 } from '../../../baseLink';
import landingPageApiDataAtom from '../../recoil/atoms/landingPageApiDataAtom';

const MobileCategories = () => {

    const [landingApiData, setLandingApiData] = useRecoilState(landingPageApiDataAtom);

    const skeleton_data = [1, 2, 3, 4, 5, 6, 7, 8]

    // useEffect(() => {
    //   console.log(landingApiData)
    // }, [])



    return (
        <div className='block md:hidden w-full'>
            <div className='w-full grid grid-cols-4 gap-4 px-4 pt-4'>
                {
                    landingApiData?.tab ?
                        // category
                        <>
                            {
                                landingApiData?.tab?.map((data, i) => (
                                    <Link to={`/all-products/` + data?.id} key={i} className='flex flex-col sm:flex-row justify-start gap-[5px] rounded-[4px] w items-center border bg-gray-200 p-2 sm:p-4 cursor-pointer'>
                                        <div className='w-fit'>
                                            <img src={VITE_BASE_LINK_2 + data?.image} className='w-full min-w-[18px] max-w-[20px]' alt="" />
                                        </div>
                                        <div className='text-center'>
                                            <h1 className='helvetica text-[10px] font-[500] poppins pt-1'>{data?.title}</h1>
                                        </div>
                                    </Link>
                                ))
                            }
                        </>
                        :
                        // skeleton loader
                        <>
                            {
                                skeleton_data?.map((data, i) => (
                                    <div key={i} className='flex md:hidden flex-col w-full justify-center items-center h-[60px]'>
                                        <div className='w-full'>
                                            <SkeletonTheme baseColor="#f0f0f0" highlightColor="#d6d6d6">
                                                <p>
                                                    <Skeleton width='100%' height='60px' />
                                                </p>
                                            </SkeletonTheme>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                }
            </div>
        </div>
    )
}

export default MobileCategories