import React from 'react'
import Footer from '../components/Footer'
import Instagram from '../components/Instagram'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    {/* Page Preloder */}
    {/* <div id="preloder">
      <div className="loader" />
    </div> */}
    
          <Navbar/>
    
    
    {/* Categories Section Begin */}
    <section className="categories">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div
              className="categories__item categories__large__item set-bg"
              style={{
                backgroundImage: `url("img/categories/category-1.jpg")`
              }}
            >
              <div className="categories__text">
                <h1>Women’s fashion</h1>
                <p>
                  Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                  incidid-unt labore edolore magna aliquapendisse ultrices
                  gravida.
                </p>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage: `url("img/categories/category-2.jpg")`
                  }}
                >
                  <div className="categories__text">
                    <h4>Men’s fashion</h4>
                    <p>358 items</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage: `url("img/categories/category-3.jpg")`
                  }}
                >
                  <div className="categories__text">
                    <h4>Kid’s fashion</h4>
                    <p>273 items</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage: `url("img/categories/category-4.jpg")`
                  }}
                >
                  <div className="categories__text">
                    <h4>Cosmetics</h4>
                    <p>159 items</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage: `url("img/categories/category-5.jpg")`
                  }}
                >
                  <div className="categories__text">
                    <h4>Accessories</h4>
                    <p>792 items</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Categories Section End */}
    {/* Product Section Begin */}
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="section-title">
              <h4>New product</h4>
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <ul className="filter__controls">
              <li className="active" data-filter="*">
                All
              </li>
              <li data-filter=".women">Women’s</li>
              <li data-filter=".men">Men’s</li>
              <li data-filter=".kid">Kid’s</li>
              <li data-filter=".accessories">Accessories</li>
              <li data-filter=".cosmetic">Cosmetics</li>
            </ul>
          </div>
        </div>
        <div className="row property__gallery">
          <div className="col-lg-3 col-md-4 col-sm-6 mix women">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                style={{
                  backgroundImage: `url("img/product/product-1.jpg")`
                }}
              >
                <div className="label new">New</div>
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-1.jpg" className="image-popup">
                      <span className="arrow_expand" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Buttons tweed blazer</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="product__price">$ 59.0</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix men">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                style={{
                  backgroundImage: `url("img/product/product-2.jpg")`
                }}
              >
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-2.jpg" className="image-popup">
                      <span className="arrow_expand" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Flowy striped skirt</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="product__price">$ 49.0</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix accessories">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                style={{
                  backgroundImage: `url("img/product/product-3.jpg")`
                }}
              >
                <div className="label stockout">out of stock</div>
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-3.jpg" className="image-popup">
                      <span className="arrow_expand" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Cotton T-Shirt</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="product__price">$ 59.0</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix cosmetic">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                style={{
                  backgroundImage: `url("img/product/product-4.jpg")`
                }}
              >
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-4.jpg" className="image-popup">
                      <span className="arrow_expand" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Slim striped pocket shirt</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="product__price">$ 59.0</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix kid">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                style={{
                  backgroundImage: `url("img/product/product-5.jpg")`
                }}
              >
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-5.jpg" className="image-popup">
                      <span className="arrow_expand" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Fit micro corduroy shirt</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="product__price">$ 59.0</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
            <div className="product__item sale">
              <div
                className="product__item__pic set-bg"
                style={{
                  backgroundImage: `url("img/product/product-6.jpg")`
                }}
              >
                <div className="label sale">Sale</div>
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-6.jpg" className="image-popup">
                      <span className="arrow_expand" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Tropical Kimono</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="product__price">
                  $ 49.0 <span>$ 59.0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                style={{
                  backgroundImage: `url("img/product/product-7.jpg")`
                }}
              >
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-7.jpg" className="image-popup">
                      <span className="arrow_expand" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Contrasting sunglasses</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="product__price">$ 59.0</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
            <div className="product__item sale">
              <div
                className="product__item__pic set-bg"
                style={{
                  backgroundImage: `url("img/product/product-8.jpg")`
                }}
              >
                <div className="label">Sale</div>
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-8.jpg" className="image-popup">
                      <span className="arrow_expand" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Water resistant backpack</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="product__price">
                  $ 49.0 <span>$ 59.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Product Section End */}

 

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