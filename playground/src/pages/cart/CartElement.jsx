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
import encreaseQuantityInCart from "../../utils/encreaseQuantityInCart";
import decreaseQuantityInCart from "../../utils/decreaseQuantityInCart";

class CartElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }

    handleUpQantity = (productInCartId) => {
        const tempCart = this.props.productsInCart;
        tempCart.map((productInCart) =>
            encreaseQuantityInCart(
                productInCart,
                productInCartId,
                this.props.addToCart
            )
        );
    };

    // encreaseQuantityInCart = (productInCart, productInCartId) => {
    // 	if (productInCart[1] === productInCartId) {
    // 		this.props.addToCart(productInCart);
    // 		return;
    // 	}
    // 	return;
    // };

    handleDownQantity = (productInCartId) => {
        const tempCart = this.props.productsInCart;
        tempCart.map((productInCart) =>
            decreaseQuantityInCart(
                productInCart,
                productInCartId,
                this.props.addToCart
            )
        );
    };

    // decreaseQuantityInCart = (productInCart, productInCartId, addToCart) => {
    // 	if (productInCart[1] === productInCartId) {
    // 		if (productInCart[0] !== 1) {
    // 			productInCart[0] -= 2;
    // 			addToCart(productInCart);
    // 			return;
    // 		}
    // 	} else return;
    // };

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
