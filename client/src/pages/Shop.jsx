import axios from "axios"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Footer from "../components/Footer"
import Instagram from "../components/Instagram"
import Navbar from "../components/Navbar"
import ShopProducts from "../components/ShopProducts"
import { Link } from "react-router-dom"

const Shop = () => {
	const [products, setProducts] = useState([])

	const search = useLocation().search;
	const cat = new URLSearchParams(search).get("cat")

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				var catstr = "";
				if (cat) catstr = "?category=" + cat;
				const res = await axios.get("/products" + catstr)
				console.log(catstr)
				setProducts(res.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchProducts()
	}, [cat])

	return (
		<>
			<Navbar />
			{/* Breadcrumb Begin */}
			<div className="breadcrumb-option">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="breadcrumb__links">
								<a href="./index.html">
									<i className="fa fa-home" /> Home
								</a>
								<span>Shop</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Breadcrumb End */}
			{/* Shop Section Begin */}
			<section className="shop spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3">
							<div className="shop__sidebar">
								<div className="sidebar__categories">
									<div className="section-title">
										<h4>Categories</h4>
									</div>
									<div className="categories__accordion">
										<div
											className="accordion"
											id="accordionExample">
											<div className="card">
												<div className="card-heading active">
												<Link to="/shop"
														data-toggle="collapse"
														data-target="#collapseOne">
														All
													</Link>
												</div>
											</div>
											<div className="card">
												<div className="card-heading active">
												<Link to="/shop?cat=Women"
														data-toggle="collapse"
														data-target="#collapseOne">
														Women
													</Link>
												</div>
											</div>
											<div className="card">
												<div className="card-heading">
													<Link to="/shop?cat=Men"
														data-toggle="collapse"
														data-target="#collapseTwo">
														Men
													</Link>
												</div>
											</div>
											<div className="card">
												<div className="card-heading">
													<Link to="/shop?cat=Kids"
														data-toggle="collapse"
														data-target="#collapseThree">
														Kids
													</Link>
												</div>
												<div
													id="collapseThree"
													className="collapse"
													data-parent="#accordionExample"></div>
											</div>
											<div className="card">
												<div className="card-heading">
													<Link to="/shop?cat=Accessories"
														data-toggle="collapse"
														data-target="#collapseFour">
														Accessories
													</Link>
												</div>
												<div
													id="collapseFour"
													className="collapse"
													data-parent="#accordionExample"></div>
											</div>
											<div className="card">
												<div className="card-heading">
													<Link to="/shop?cat=Cosmetic"
														data-toggle="collapse"
														data-target="#collapseFive">
														Cosmetic
													</Link>
												</div>
												<div
													id="collapseFive"
													className="collapse"
													data-parent="#accordionExample"></div>
											</div>
										</div>
									</div>
								</div>
								{/* <div className="sidebar__filter">
									<div className="section-title">
										<h4>Shop by price</h4>
									</div>
									<div className="filter-range-wrap">
										<div
											className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
											data-min={33}
											data-max={99}
										/>
										<div className="range-slider">
											<div className="price-input">
												<p>Price:</p>
												<input
													type="text"
													id="minamount"
												/>
												<input
													type="text"
													id="maxamount"
												/>
											</div>
										</div>
									</div>
									<a href="#">Filter</a>
								</div> */}
							</div>
						</div>
						<div className="col-lg-9 col-md-9">
							<div className="row">
								
									{products.map((product) => (
										<ShopProducts product={product} key={product._id}/>
									))}
								

								{/* <div className="col-lg-12 text-center">
									<div className="pagination__option">
										<a href="#">1</a>
										<a href="#">2</a>
										<a href="#">3</a>
										<a href="#">
											<i className="fa fa-angle-right" />
										</a>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Shop Section End */}

			<Instagram />

			<Footer />
		</>
	)
}

export default Shop
