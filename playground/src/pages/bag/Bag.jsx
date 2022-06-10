import React from "react";
import { connect } from "react-redux";
import ErrorBoundary from "../../utils/ErrorBoundary";
import { Link } from "react-router-dom";
//import Loader from "../components/Loader";
import BagElement from "./BagElement";
//import CartElement from "./BagElement";
//import TotalPrice from "./TotalPrice";

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalProductsInCart: 0,
			totalPriceInCart: 0,
			totalTaxInCart: 0,
			currencyValue: 0,
		};
	}

	componentDidMount(prevProps) {
		this.setState({
			totalProductsInCart: this.calcTotalProductsInCart(
				this.props.productsInCart
			),
			totalPriceInCart: this.calcTotalPriceInCart(
				this.props.productsInCart
			),
			totalTaxInCart: (
				(this.calcTotalPriceInCart(this.props.productsInCart) / 121) *
				21
			).toFixed(2),
			currencyValue:
				this.props.currencyList[this.props.currencyId]?.symbol,
		});
	}

	componentDidUpdate(prevProps) {
		if (
			this.props.productsInCart !== prevProps.productsInCart ||
			this.props.currencyId !== prevProps.currencyId
		) {
			this.setState({
				totalPriceInCart: this.calcTotalPriceInCart(
					this.props.productsInCart
				),
				totalProductsInCart: this.calcTotalProductsInCart(
					this.props.productsInCart
				),
				totalTaxInCart: (
					(this.calcTotalPriceInCart(this.props.productsInCart) /
						121) *
					21
				).toFixed(2),
			});
		}

		if (
			this.props.currencyList !== prevProps.currencyList ||
			this.props.currencyId !== prevProps.currencyId
		)
			this.setState({
				currencyValue:
					this.props.currencyList[this.props.currencyId].symbol,
			});
	}

	calcTotalPriceInCart(productsInCart) {
		return productsInCart
			.reduce((a, b) => a + b[3][this.props.currencyId].amount * b[0], 0)
			.toFixed(2);
	}

	calcTotalProductsInCart(productsInCart) {
		return productsInCart.reduce((a, b) => a + b[0], 0);
	}

	render() {
		return (
			<>
				<div className="bag_title">
					<span>My Bag,&nbsp;</span>
					<span>
						{this.state.totalProductsInCart === 1
							? `${this.state.totalProductsInCart} item`
							: `${this.state.totalProductsInCart} items`}
					</span>
				</div>
				<div className="bag_product">
					{!this.props.productsInCart.length ? (
						<h4>Cart is empty</h4>
					) : (
						this.props.productsInCart.map((item, index) => {
							return (
								<div
									className="bag_product_element"
									key={index}
								>
									<ErrorBoundary>
										<BagElement
											qty={item[0]}
											productId={item[1]}
											cartItem={item[2]}
											//key={index}
										/>
									</ErrorBoundary>
								</div>
							);
						})
					)}
				</div>
				<div className="bag_total">
					<div className="bag_total_title">
						<p>Total</p>
						<p>
							{this.state.currencyValue}
							{this.state.totalPriceInCart}
						</p>
					</div>
				</div>
                <div className="bag_checkout">
                    <Link className="bag_checkout_button" to="cart">
                        View bag
                    </Link>
                    <button className="bag_checkout_button">Check out</button>
                </div>
				
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	productsInCart: state.cart.data,
	//currencyList: state.loadCurrencies.data, //
	//currencyId: state.currency.data, //
	totalPrice: state.calcTotalPrice.data, //
});

const mapDispatchToProps = {
	// loadProduct,
	// addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
