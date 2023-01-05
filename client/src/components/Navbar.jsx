import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
	return (
		<>
			{/* Offcanvas Menu Begin */}
			<div className="offcanvas-menu-overlay" />
			<div className="offcanvas-menu-wrapper">
				<div className="offcanvas__close">+</div>
				<ul className="offcanvas__widget">
					<li>
						<span className="icon_search search-switch" />
					</li>
					<li>
						<a href="#">
							<span className="icon_heart_alt" />
							<div className="tip">2</div>
						</a>
					</li>
					<li>
						<a href="#">
							<span className="icon_bag_alt" />
							<div className="tip">2</div>
						</a>
					</li>
				</ul>
				<div className="offcanvas__logo">
					<a href="./index.html">
						<img src="img/logo.png" alt="" />
					</a>
				</div>
				<div id="mobile-menu-wrap" />
				<div className="offcanvas__auth">
					<a href="#">Login</a>
					<a href="#">Register</a>
				</div>
			</div>
			{/* Offcanvas Menu End */}

			{/* Header Section Begin */}
			<header className="header">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-lg-2">
							<div className="header__logo">
								<Link to="/">
									<img src="img/logo.png" alt="" />
								</Link>
							</div>
						</div>
						<div className="col-xl-6 col-lg-7">
							<nav className="header__menu">
								<ul>
                                    {/* <li className="active">
										<Link to="/">Home</Link>
                                    </li> */}
                                    <li>
										<Link to="/">Home</Link>
									</li>

									<li>
										<Link to="/Shop">Shop</Link>
									</li>

									<li>
										<Link to="/Product">Product</Link>
									</li>

									<li>
										<Link to="/Cart">Cart</Link>
                                    </li>
                                    
                                    <li>
										<Link to="/Checkout">Checkout</Link>
                                    </li>
                                    
									<li>
										<Link to="/Contact">Contact</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div className="col-lg-3">
							<div className="header__right">
								<div className="header__right__auth">
									<a href="/Login">Login</a>
									<a href="/Register">Register</a>
								</div>
								<ul className="header__right__widget">
									
									{/* <li>
										<a href="#">
											<span className="icon_heart_alt" />
											<div className="tip">2</div>
										</a>
									</li> */}
									<li>
										<Link to="/Cart">
											<span className="icon_bag_alt" />
											<div className="tip">2</div>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="canvas__open">
						<i className="fa fa-bars" />
					</div>
				</div>
			</header>
			{/* Header Section End */}
		</>
	)
}

export default Navbar
