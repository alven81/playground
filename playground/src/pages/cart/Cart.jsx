import React from "react";
import { connect } from "react-redux";
import ErrorBoundary from "../../utils/ErrorBoundary";
import Loader from "../components/Loader";
import CartElement from "./CartElement";
import TotalPrice from "./TotalPrice";

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalProductsInCart: 0,
			currencyValue: "",
			totalPrice: 0,
		};
	}

	componentDidMount(prevProps) {
		const tempProductsInCart = this.props.productsInCart;
		this.setState({
			totalProductsInCart:
				this.calcTotalProductInCart(tempProductsInCart),
		});
		this.setState({
			currencyValue:
				this.props.currencyList[this.props.currencyId].symbol,
		});
		console.log("totalProductsInCart", this.state.totalProductsInCart);
        console.log("here: " , this.props.totalPrice.reduce((a, b) => a + b[0]));
	}

	componentDidUpdate( prevProps) {
        // if (this.props.productsInCart !== prevProps.productsInCart)
        // console.log("UPDATE this.props.qty!!!!!!!!");
        

		if (
			this.props.currencyList !== prevProps.currencyList ||
			this.props.currencyId !== prevProps.currencyId
		)
			this.setState({
				currencyValue:
					this.props.currencyList[this.props.currencyId].symbol,
			});
	}

	calcTotalProductInCart(tempProductsInCart) {
		return tempProductsInCart.reduce((a, b) => a + b[0], 0);
	}

	render() {
		return (
			<>
				<div className="container cart">
					<div className="category_title">
						<h3>CART</h3>
					</div>
					{/* <button
                        onClick={() => console.log(this.props.productsInCart)}
                    >
                        click
                    </button> */}
					<div className="cart_product">
						{!this.props.productsInCart.length ? (
							<Loader />
						) : (
							this.props.productsInCart.map((item, index) => {
								return (
									<div className="cart_product_element">
										<ErrorBoundary>
											<CartElement
												qty={item[0]}
												productId={item[1]}
												cartItem={item[2]}
												key={index}
											/>
										</ErrorBoundary>
									</div>
								);
							})
						)}
					</div>
					<div className="cart_total">
						<TotalPrice
							currencyValue={this.state.currencyValue}
							totalProductsInCart={this.state.totalProductsInCart}
							//totalPrice={this.state.totalPrice}
						/>
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	productsInCart: state.cart.data,
	currencyList: state.loadCurrencies.data, //
	currencyId: state.currency.data, //
	totalPrice: state.calcTotalPrice.data, //
});

const mapDispatchToProps = {
	// loadProduct,
	// addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// import React from "react";
// import { connect } from "react-redux";
// import ErrorBoundary from "../../utils/ErrorBoundary";
// import Loader from "../components/Loader";
// import CartElement from "./CartElement";

// class Cart extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             totalProductsInCart: 0,
//         };
//     }

//     componentDidMount(prevProps) {
//         const tempProductsInCart = this.props.productsInCart;
//         this.setState({
//             totalProductsInCart:
//                 this.calcTotalProductInCart(tempProductsInCart),
//         });
//     }

//     componentDidUpdate(prevProps) {
//         if (this.props.productsInCart !== prevProps.productsInCart) {
//             const tempProductsInCart = this.props.productsInCart;
//             this.setState({
//                 totalProductsInCart:
//                     this.calcTotalProductInCart(tempProductsInCart),
//             });
//         }
//     }

//     calcTotalProductInCart(tempProductsInCart) {
//         return tempProductsInCart.reduce((a, b) => a + b[0], 0);
//     }

//     render() {
//         return (
//             <>
//                 <div className="container cart">
//                     <div className="category_title">
//                         <h3>CART</h3>
//                     </div>
//                     {/* <button
//                         onClick={() => console.log(this.props.productsInCart)}
//                     >
//                         click
//                     </button> */}
//                     <div className="cart_product">
//                         {!this.props.productsInCart.length ? (
//                             <Loader />
//                         ) : (
//                             this.props.productsInCart.map((item, index) => {
//                                 return (
//                                     <div className="cart_product_element">
//                                         <ErrorBoundary>
//                                             <CartElement
//                                                 qty={item[0]}
//                                                 productId={item[1]}
//                                                 cartItem={item[2]}
//                                                 key={index}
//                                             />
//                                         </ErrorBoundary>
//                                     </div>
//                                 );
//                             })
//                         )}
//                     </div>
//                     <div className="cart_total">
//                         <div className="cart_total_title">
//                             <p>Tax 21%:</p>
//                             <p>Quantity:</p>
//                             <p>Total:</p>
//                         </div>
//                         <div className="cart_total_value">
//                             <p>{this.state.totalProductsInCart}</p>
//                             <p>{this.state.totalProductsInCart}</p>
//                             <p>{this.state.totalProductsInCart}</p>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }

// const mapStateToProps = (state) => ({
//     productsInCart: state.cart.data,
// });

// const mapDispatchToProps = {
//     // loadProduct,
//     // addToCart
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);
