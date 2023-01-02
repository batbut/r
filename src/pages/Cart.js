import React from 'react'
import Header from '../parts/Header'
import Breadcrumb from '../component/Breadcrumb/index'

// import Hero from "../parts/Hero"
// import BrowserRoom from '../parts/HomePage/BrowserRoom'
// import JustArr from '../parts/HomePage/JustArrived'

import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
import ShippingDetails from '../parts/Cart/ShippingDetails'
import ShoppingCart from '../parts/Cart/ShoppingCart'
// import ProductDetails from '../parts/Cart/ProductDetails'
// import Suggestion from '../parts/Cart/Suggestion'




export default function HomePage() {
  return (
    <>
    <Header theme="black"/>
      <Breadcrumb
        list={[
        { url: "/", name: "Home" },
        { url: "/cart", name: "Shopping Cart" },    
        ]} />

        <section className="md:py-16">
      <div className="container px-4 mx-auto">
                  <div className="flex flex-wrap -mx-4">
                 <ShoppingCart />
          <ShippingDetails/>     
      </div>
      </div>
          </section>
          
      <Sitemap/>
      <Footer/>
    </>
  )
    }
