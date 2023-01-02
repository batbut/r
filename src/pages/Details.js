import React from 'react'
import Header from '../parts/Header'
import Breadcrumb from '../component/Breadcrumb/index'
import { useParams, useSearchParams } from 'react-router-dom'
// import Hero from "../parts/Hero"
// import BrowserRoom from '../parts/HomePage/BrowserRoom'
// import JustArr from '../parts/HomePage/JustArrived'
import fetch from '../helpers/fetch'
import useAsync from '../helpers/hooks/useAsync'

import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
import ProductDetails from '../parts/Details/ProductDetails'
import Suggestion from '../parts/Details/Suggestion'




export default function HomePage() {

  const {idp} = useParams();
  const {
    data,
    run,
    isLoading
  } = useAsync();
  React.useEffect(() => {
    run(fetch({
      url: `/api/products/${idp}`
    }));
  }, [run]);

console.log(data)

  return (
    <>
    <Header theme="black"/>
      <Breadcrumb
        list={[
        { url: "/", name: "Home" },
        { url: "/categories/91231", name: " Office Room" },
        { url: "/categories/91231/products/78888", name: "details "},     
        ]} />
      
      {
        isLoading ? "Loading" :
          <ProductDetails data={data} />
      }
      {
        isLoading ? "Loading" :
      <Suggestion data={ data?.relatedProducts || {}} />
      }
      
      <Sitemap />
      <Footer/>
    </>
  )
}
