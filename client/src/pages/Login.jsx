import React from "react"
import Footer from "../components/Footer"
import Instagram from "../components/Instagram"
import Navbar from "../components/Navbar"

const Login = () => {
	return (
		<>
			{/* Page Preloder */}
			{/* <div id="preloder">
      <div className="loader" />
    </div> */}

			<Navbar />

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
									<span>Login</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb End */}
				{/* Contact Section Begin */}
				<section className="contact spad">
					<div className="container">
						<div className="row">
              <div className="col-lg-4 col-md-4">
                
              </div>
							<div className="col-lg-4 col-md-4">
								<div className="contact__content">
									<div className="contact__form">
										<h5>Login</h5>
										<form action="#">
											<input
												type="text"
												placeholder="Username"
											/>
											<input
												type="password"
												placeholder="password"
											/>
											<button
												type="submit"
												className="site-btn">
												Login
                      </button>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
										</form>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4">.</div>
						</div>
					</div>
				</section>
				{/* Contact Section End */}
			</>

			<Instagram />

			<Footer />
		</>
	)
}

export default Login
