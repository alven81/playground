import React from "react";
import { connect } from "react-redux";
import Attribute from "../components/Attribute";
import Name from "../components/Name";
import Price from "../components/Price";
import { addToCart } from "../../store/actions/actions";
import { buildProductQuery } from "../../store/queries";
import ErrorBoundary from "../components/ErrorBoundary";
import axios from "axios";
import ImageSwitcher from "./ImageSwitcher.jsx";
import Loader from "../components/Loader";
import increaseQuantityInCart from "../../utils/increaseQuantityInCart";
import decreaseQuantityInCart from "../../utils/decreaseQuantityInCart";

class CartElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productOptions: null,
        };
    }

    async componentDidMount() {
        await axios({
            url: "http://localhost:4000/",
            method: "POST",
            data: {
                query: buildProductQuery(this.props.cartItem.id),
            },
        })
            .then((response) => response.data.data)
            .then((response) => response.product)
            .then((productOptions) => this.setState({ productOptions }));
    }

    handleUpQantity = (productInCartId) => {
        const tempCart = this.props.productsInCart;
        tempCart.map((productInCart) =>
            increaseQuantityInCart(
                productInCart,
                productInCartId,
                this.props.addToCart
            )
        );
    };

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

    render() {
        return this.state.productOptions == null ? (
            <Loader />
        ) : (
            <>
                <div className="cart_product_info">
                    <ErrorBoundary>
                        <Name
                            nameClass={"product_info_title"}
                            brand={this.state.productOptions.brand}
                            name={this.state.productOptions.name}
                        />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Price
                            priceClass={"price"}
                            productId={this.props.productId}
                            qty={this.props.qty}
                            classCurrency={"hide"}
                            price={this.state.productOptions.prices}
                        />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        {this.state.productOptions.attributes && (
                            <Attribute
                                attributeClass={"attribute"}
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
});

const mapDispatchToProps = {
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartElement);
