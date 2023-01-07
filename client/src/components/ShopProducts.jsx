import React from "react"
import { Link } from "react-router-dom"

const ShopProducts = ({product}) => {
    return (
        <div className="col-lg-4 col-md-6">
		<div className="product__item">
			<div
				className="product__item__pic set-bg"
				style={{
					backgroundImage: `url(${product.img})`,
				}}>
				{/* <div className="label new">New</div> */}
				<ul className="product__hover">
					{/* <li>
						<a href="img/shop/shop-1.jpg" className="image-popup">
							<span className="arrow_expand" />
						</a>
					</li> */}
					<li>
						<a href="#">
							<span className="icon_heart_alt" />
						</a>
					</li>
					<li>
						<Link to={`/Product?id=${product._id}`}>
							<span className="icon_bag_alt" />
						</Link>
					</li>
				</ul>
			</div>
			<div className="product__item__text">
				<h6>
					<a href="#">{product.title}</a>
				</h6>
				<div className="rating">
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<i className="fa fa-star" />
				</div>
				<div className="product__price">$ {product.price}</div>
			</div>
            </div>
            </div>
	)
}

export default ShopProducts
