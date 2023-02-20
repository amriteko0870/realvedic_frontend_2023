import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import reactLogo from './assets/react.svg'
import MyOrders from './components/account-page-components/MyOrders'
import SingleOrderDetails from './components/account-page-components/SingleOrderDetails'
import Footer from './components/global-components/Footer'
import Navbar from './components/global-components/Navbar'
import Sidebar from './components/global-components/Sidebar'
import ProductCard from './components/individual-components/ProductCard'
import BestOffersSection from './components/landing-page-components/BestOffersSection'
import BlogsSection from './components/landing-page-components/BlogsSection'
import CategoryTabs from './components/landing-page-components/CategoryTabs'
import LandingPageBanners from './components/landing-page-components/LandingPageBanners'
import SingleFoodProductSection from './components/landing-page-components/SingleFoodProductSection'
import SingleImageCarousal from './components/landing-page-components/SingleImageCarousal'
import SmallImageCarousal from './components/landing-page-components/SmallImageCarousal'
import TopSellers from './components/landing-page-components/TopSellers'
import AboutUsPage from './components/pages/AboutUsPage'
import AllProductsView from './components/pages/AllProductsView'
import Blogs from './components/pages/Blogs'
import CancellationPolicyPage from './components/pages/CancellationPolicyPage'
import Cart from './components/pages/Cart'
import CheckoutPage from './components/pages/CheckoutPage'
import DoctorsPage from './components/pages/DoctorsPage'
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import MyAccount from './components/pages/MyAccount'
import OrderConfirmedPage from './components/pages/OrderConfirmedPage'
import SignUpPage from './components/pages/SignUpPage'
import SingleProduct from './components/pages/SingleProduct'
import TermsAndConditionsPage from './components/pages/TermsAndConditionsPage'
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './helpers/routes/ProtectedRoute'
import { VITE_BASE_LINK, VITE_BASE_LINK_2 } from '../baseLink'
import axios from 'axios'
import cartPageAtom from './recoil/atoms/cartPageAtom'
import { atom, useRecoilState } from 'recoil'
import cartProductIDs from './recoil/atoms/cartProductsIDs'


function App() {


  const [cartData, setCartData] = useRecoilState(cartPageAtom)
  
  const [cartProductId, setCartProductId] = useRecoilState(cartProductIDs)

  const location = useLocation()

  useEffect(() => {
    let formdata = new FormData();
    formdata.append('token', localStorage.getItem('token'))
    formdata.append('no_login_token', localStorage.getItem('no_login_token'))
    axios.post(VITE_BASE_LINK_2 + 'UserCartView', formdata).then((response) => {
        // console.log(response?.data)
        setCartData(response?.data)
        setCartProductId(response?.data?.cartItems?.map((data, i) => {
          return data?.product_id
        }))
    })
}, [location])


// useEffect(() => {
//   console.log('eitu e hoi clg', cartProductId)
// }, [cartProductId])


  return (
    <>
      <div className="relative">
        <Sidebar />
        <Navbar />
        <div className=' md:mt-16 lg:mt-20 xl:mt-[40px]'>
          <Routes>


            <Route element={<ProtectedRoute />}  >
              {/* <Route path="/" element /> */}
              <Route path="*" element={<Navigate replace to='/' />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path='/orders' element={<MyOrders />} />
              <Route path='/order-confirmed' element={<OrderConfirmedPage />} />
              <Route path='/account/orders/:order_id' element={<SingleOrderDetails />} />
              <Route path='/account' element={<MyAccount />} />
            </Route>


            <Route path='*' element={<Navigate to={localStorage.getItem("status") === 'true' ? '/' : '/login'} replace={true} />} />
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/single-product/:product_id' element={<SingleProduct />} />
            <Route path='/all-products/:category_id' element={<AllProductsView />} />
            <Route path='/about-us' element={<AboutUsPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/doctors' element={<DoctorsPage />} />
            <Route path='/cancellation-policy' element={<CancellationPolicyPage />} />
            <Route path='/terms-conditions' element={<TermsAndConditionsPage />} />
            {/* <Route path='/test' element={<ProductCard id='2' title='Test Product' image='' weight='250' price='100' />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  )
}

export default App
