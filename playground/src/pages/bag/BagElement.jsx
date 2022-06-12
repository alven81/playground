import React from "react";
import { connect } from "react-redux";
import Attribute from "../components/Attribute";
import Name from "../components/Name";
import Price from "../components/Price";
import { addToCart } from "../../store/actions/actions";
import ErrorBoundary from "../components/ErrorBoundary";
import axios from "axios";
import BagImageSwitcher from "./BagImageSwitcher.jsx";
import Loader from "../components/Loader";
import increaseQuantityInCart from "../../utils/increaseQuantityInCart";
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

    handleUpQantity = (e, productInCartId) => {
        e.stopPropagation();
        const tempCart = this.props.productsInCart;
        tempCart.map((productInCart) =>
            increaseQuantityInCart(
                productInCart,
                productInCartId,
                this.props.addToCart
            )
        );
    };

    handleDownQantity = (e, productInCartId) => {
        e.stopPropagation();
        const tempCart = this.props.productsInCart;
        tempCart.map((productInCart) =>
            decreaseQuantityInCart(
                productInCart,
                productInCartId,
                this.props.addToCart
            )
        );
    };

    render() {
        return this.state.productOptions == null ? (
            <Loader />
        ) : (
            <>
                <div className="bag_product_info">
                    <ErrorBoundary>
                        <Name
                            nameClass={"product_info_title bag_name"}
                            brand={this.state.productOptions.brand}
                            name={this.state.productOptions.name}
                        />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Price
                            priceClass={"price bag_price"}
                            productId={this.props.productId}
                            qty={this.props.qty}
                            classCurrency={"hide"}
                            price={this.state.productOptions.prices}
                        />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        {this.state.productOptions.attributes && (
                            <Attribute
                                attributeClass={"attribute bag_attribute"}
                                item={this.state.productOptions.attributes}
                                cartItem={this.props.cartItem}
                                buttonActivity={"disabled"}
                            />
                        )}
                    </ErrorBoundary>
                </div>
                <div className="bag_product_quantity">
                    <button
                        onClick={(e) =>
                            this.handleUpQantity(e, this.props.productId)
                        }
                    />
                    <span>{this.props.qty}</span>
                    <button
                        onClick={(e) =>
                            this.handleDownQantity(e, this.props.productId)
                        }
                    />
                </div>
                <div className="bag_image">
                    <ErrorBoundary>
                        {this.state.productOptions.gallery && (
                            <BagImageSwitcher
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
