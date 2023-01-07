import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Instagram from '../components/Instagram'
import Navbar from '../components/Navbar'


const Product = () => {
  const [product, setProduct] = useState({})
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id")
  
  useEffect(() => {
		const fetchProducts = async () => {
			try {				
				const res = await axios.get("/products/find/"+id)				
        setProduct(res.data)
        console.log(res.data);
			} catch (error) {
				console.log(error)
			}
		}
		fetchProducts()
	}, [id])


  return (
    <>
    {/* Page Preloder */}
    {/* <div id="preloder">
      <div className="loader" />
    </div> */}
    
          <Navbar/>
    
    
          <>
  {/* Breadcrumb Begin */}
  <div className="breadcrumb-option">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb__links">
            <a href="./index.html">
              <i className="fa fa-home" /> Home
            </a>
            
            <span>{product.title}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Product Details Section Begin */}
  <section className="product-details spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="product__details__pic">
            {/* <div className="product__details__pic__left product__thumb nice-scroll">
              <a className="pt active" href="#product-1">
                <img src="img/product/details/thumb-1.jpg" alt="" />
              </a>
              <a className="pt" href="#product-2">
                <img src="img/product/details/thumb-2.jpg" alt="" />
              </a>
              <a className="pt" href="#product-3">
                <img src="img/product/details/thumb-3.jpg" alt="" />
              </a>
              <a className="pt" href="#product-4">
                <img src="img/product/details/thumb-4.jpg" alt="" />
              </a>
            </div> */}
            <div className="product__details__slider__content">
              
                <img
                  data-hash="product-1"
                  className="product__big__img"
                  src={product.img}
                      alt=""
                      style={{width: 350, marginLeft: 100 }}
                />
                {/* <img
                  data-hash="product-2"
                  className="product__big__img"
                  src="img/product/details/product-3.jpg"
                  alt=""
                />
                <img
                  data-hash="product-3"
                  className="product__big__img"
                  src="img/product/details/product-2.jpg"
                  alt=""
                />
                <img
                  data-hash="product-4"
                  className="product__big__img"
                  src="img/product/details/product-4.jpg"
                  alt=""
                /> */}
              
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="product__details__text">
            <h3>
              {product.title}{" "}
              <span>Brand: SKMEIMore Men Watches from SKMEI</span>
            </h3>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <span>( 138 reviews )</span>
            </div>
            <div className="product__details__price">
                    $ {product.price}
                    {/* <span>$ 83.0</span> */}
            </div>
            <p>
              {product.desc}
            </p>
            <div className="product__details__button">
              <div className="quantity">
                <span>Quantity:</span>
                <div className="pro-qty">
                  <input type="text" defaultValue={1} />
                </div>
              </div>
              <a href="#" className="cart-btn">
                <span className="icon_bag_alt" /> Add to cart
              </a>
              <ul>
                <li>
                  <a href="#">
                    <span className="icon_heart_alt" />
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <span className="icon_adjust-horiz" />
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="product__details__widget">
              <ul>
                <li>
                  <span>Availability:</span>
                  <div className="stock__checkbox">
                    <label htmlFor="stockin">
                      In Stock
                      <input type="checkbox" id="stockin" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </li>
                {/* <li>
                  <span>Available color:</span>
                  <div className="color__checkbox">
                    <label htmlFor="red">
                      <input
                        type="radio"
                        name="color__radio"
                        id="red"
                        defaultChecked=""
                      />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="black">
                      <input type="radio" name="color__radio" id="black" />
                      <span className="checkmark black-bg" />
                    </label>
                    <label htmlFor="grey">
                      <input type="radio" name="color__radio" id="grey" />
                      <span className="checkmark grey-bg" />
                    </label>
                  </div>
                </li> */}
                <li>
                  <span>Available size:</span>
                  <div className="size__btn">
                    <label htmlFor="xs-btn" className="active">
                      <input type="radio" id="xs-btn" />
                      xs
                    </label>
                    <label htmlFor="s-btn">
                      <input type="radio" id="s-btn" />s
                    </label>
                    <label htmlFor="m-btn">
                      <input type="radio" id="m-btn" />m
                    </label>
                    <label htmlFor="l-btn">
                      <input type="radio" id="l-btn" />l
                    </label>
                  </div>
                </li>
                {/* <li>
                  <span>Promotions:</span>
                  <p>Free shipping</p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="product__details__tab">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#tabs-1"
                  role="tab"
                >
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tabs-2"
                  role="tab"
                >
                  Specification
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tabs-3"
                  role="tab"
                >
                  Reviews ( 2 )
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="tabs-1" role="tabpanel">
                <h6>Description</h6>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut loret fugit, sed quia consequuntur magni dolores eos
                  qui ratione voluptatem sequi nesciunt loret. Neque porro lorem
                  quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut loret
                  fugit, sed quia ipsu consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Nulla consequat massa quis
                  enim.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem.
                </p>
              </div>
              <div className="tab-pane" id="tabs-2" role="tabpanel">
                <h6>Specification</h6>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut loret fugit, sed quia consequuntur magni dolores eos
                  qui ratione voluptatem sequi nesciunt loret. Neque porro lorem
                  quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut loret
                  fugit, sed quia ipsu consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Nulla consequat massa quis
                  enim.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem.
                </p>
              </div>
              <div className="tab-pane" id="tabs-3" role="tabpanel">
                <h6>Reviews ( 2 )</h6>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut loret fugit, sed quia consequuntur magni dolores eos
                  qui ratione voluptatem sequi nesciunt loret. Neque porro lorem
                  quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut loret
                  fugit, sed quia ipsu consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Nulla consequat massa quis
                  enim.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="related__title">
            <h5>RELATED PRODUCTS</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="product__item">
            <div
              className="product__item__pic set-bg"
              style={{
                backgroundImage: `url("img/product/related/rp-1.jpg")`}}
            >
              <div className="label new">New</div>
              <ul className="product__hover">
                <li>
                  <a
                    href="img/product/related/rp-1.jpg"
                    className="image-popup"
                  >
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
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="product__item">
            <div
              className="product__item__pic set-bg"
              style={{
                backgroundImage: `url("img/product/related/rp-2.jpg")`}}
            >
              <ul className="product__hover">
                <li>
                  <a
                    href="img/product/related/rp-2.jpg"
                    className="image-popup"
                  >
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
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="product__item">
            <div
              className="product__item__pic set-bg"
              style={{
                backgroundImage: `url("img/product/related/rp-3.jpg")`}}
            >
              <div className="label stockout">out of stock</div>
              <ul className="product__hover">
                <li>
                  <a
                    href="img/product/related/rp-3.jpg"
                    className="image-popup"
                  >
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
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="product__item">
            <div
              className="product__item__pic set-bg"
              style={{
                backgroundImage: `url("img/product/related/rp-4.jpg")`}}
            >
              <ul className="product__hover">
                <li>
                  <a
                    href="img/product/related/rp-4.jpg"
                    className="image-popup"
                  >
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
      </div>
    </div>
  </section>
  {/* Product Details Section End */}
</>


    <Instagram/>
    
    <Footer/>
  </>
  )
}

export default Product