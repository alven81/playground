import React from "react";
import { connect } from "react-redux";
import Attribute from "../components/Attribute";
import Name from "../components/Name";
import Price from "../components/Price";
import { addToCart } from "../../store/actions/actions";
import ErrorBoundary from "../../utils/ErrorBoundary";
import axios from "axios";
import ImageSwitcher from "./ImageSwitcher.jsx";
import Loader from "../components/Loader";

class CartElement extends React.Component {
	// qty={item[0]} cartItem={item[1]} key={index} />

	constructor(props) {
		super(props);
		this.state = {
			//cardItem: this.props.cardItem,
			categoriesQuery: `
                {
                    product (id: "${this.props.cartItem.id}") {
                        name
                        inStock
                        gallery
                        description
                        brand
                        prices {
                            currency {
                                label
                                symbol
                            }
                            amount
                        }
                        attributes {
                            id
                            name
                            type
                            items {
                                displayValue
                                value
                                id
                            }
                        }
                    }
                }
                `,
			productOptions: null,
			//element: [],
			// waitForCart: {}
		};
	}

	async componentDidMount() {
		await axios({
			url: "http://localhost:4000/",
			method: "POST",
			data: {
				query: this.state.categoriesQuery,
			},
		})
			.then((response) => response.data.data)
			.then((response) => response.product)
			.then((productOptions) => this.setState({ productOptions }));
		//console.log("this.state.cartItem", this.props.cartItem);
		//console.log(this.props.qty);
        console.log("CartElement MOUNTTTTTTTTTTT");
	}

	handleUpQantity = (productInCartId) => {
		const tempCart = this.props.productsInCart;
		tempCart.map((productInCart) =>
			this.encreaseQuantityInCart(productInCart, productInCartId)
		);
	};

	encreaseQuantityInCart = (productInCart, productInCartId) => {
		if (productInCart[1] === productInCartId) {
			//itemUp[0];
			this.props.addToCart(productInCart);
			return;
		}
		return;
	};

	handleDownQantity = (productInCartId) => {
		const tempCart = this.props.productsInCart;
		tempCart.map((productInCart) =>
			this.decreaseQuantityInCart(productInCart, productInCartId)
		);
	};

	decreaseQuantityInCart = (productInCart, productInCartId) => {
		if (productInCart[1] === productInCartId) {
			if (productInCart[0] !== 1) {
				productInCart[0] -= 2;
				this.props.addToCart(productInCart);
				return;
			}
		} else return;
	};

	render() {
		return this.state.productOptions == null ? (
			<Loader />
		) : (
			<>
				<div className="cart_product_info">
					<ErrorBoundary>
						<Name
							brand={this.state.productOptions.brand}
							name={this.state.productOptions.name}
						/>
					</ErrorBoundary>
					<ErrorBoundary>
						<Price
                            productId={this.props.productId}
                            qty={this.props.qty}
							classCurrency={"hide"}
							price={this.state.productOptions.prices}
						/>
					</ErrorBoundary>
					<ErrorBoundary>
						{this.state.productOptions.attributes && (
							<Attribute
								item={this.state.productOptions.attributes}
								cartItem={this.props.cartItem}
								buttonActivity={"disabled"}
							/>
						)}
					</ErrorBoundary>
				</div>
				<div className="cart_product_quantity">
					<button
						onClick={() =>
							this.handleUpQantity(this.props.productId)
						}
					/>
					<span>{this.props.qty}</span>
					<button
						onClick={() =>
							this.handleDownQantity(this.props.productId)
						}
					/>
				</div>
				<div className="cart_product_image">
					<ErrorBoundary>
						{this.state.productOptions.gallery && (
							<ImageSwitcher
								images={this.state.productOptions.gallery}
							/>
						)}
					</ErrorBoundary>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	productsInCart: state.cart.data,
	//productId: state.reduxProductId.data,
	//productOptionsList: state.reduxProduct.data,
	//waitForCartAttributes: state.reduxWaitForCart.data
});

const mapDispatchToProps = {
	//loadProduct,
	addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartElement);
