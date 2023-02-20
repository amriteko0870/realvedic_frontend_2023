import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { VITE_BASE_LINK } from '../../../baseLink';
import top_seller from '../../mockApi/topSellerSection'
import landingPageApiDataAtom from '../../recoil/atoms/landingPageApiDataAtom';
import ProductCard from '../individual-components/ProductCard';

const TopSellers = (props) => {

  const [landingApiData, setLandingApiData] = useRecoilState(landingPageApiDataAtom);

  // useEffect(() => {
  //   console.log(landingApiData)
  // }, [landingApiData])


  return (

    <div className='mt-[20px] mb-[20px]'>
      {/* <div className='w-full flex justify-center items-center'>
        <h1 className='px-8 py-2 bg-[color:var(--primary-color)] rounded-[20px] poppins text-[19px] font-[500] my-8'>Top Sellers</h1>
      </div> */}
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:flex gap-4 xl:gap-8 px-5 md:px-10 mb-10'>
        {
          landingApiData?.top_seller_products?.map((data, i) => {
            return (

              <ProductCard key={i} id={data?.id} title={data?.title} image={data?.image} weight={data?.weight} price={data?.price}  status={data?.cart_status} statusArray={data?.cart_status_array}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default TopSellers