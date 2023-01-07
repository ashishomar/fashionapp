import React from 'react'
import Footer from '../components/Footer'
import Instagram from '../components/Instagram'
import Navbar from '../components/Navbar'
import HomeFeatures from '../components/HomeFeatures'
import HomeProductList from "../components/HomeProductList"

const Home = () => {
  return (
    <>
    {/* Page Preloder */}
    {/* <div id="preloder">
      <div className="loader" />
    </div> */}
    
          <Navbar/>
    
    
    {/* Categories Section Begin */}
      <HomeFeatures />
      

    {/* Product Section Begin */}
      <HomeProductList />

 

    {/* Services Section Begin */}
    <section className="services spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="services__item">
              <i className="fa fa-car" />
              <h6>Free Shipping</h6>
              <p>For all oder over $99</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="services__item">
              <i className="fa fa-money" />
              <h6>Money Back Guarantee</h6>
              <p>If good have Problems</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="services__item">
              <i className="fa fa-support" />
              <h6>Online Support 24/7</h6>
              <p>Dedicated support</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="services__item">
              <i className="fa fa-headphones" />
              <h6>Payment Secure</h6>
              <p>100% secure payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Services Section End */}

    <Instagram/>
    
    <Footer/>
  </>
  )
}

export default Home