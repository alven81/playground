import React from "react";
import { connect } from "react-redux";
import ErrorBoundary from "../components/ErrorBoundary";
import CartElement from "./CartElement";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalProductsInCart: 0,
            totalPriceInCart: 0,
            totalTaxInCart: 0,
            currencyValue: "",
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
                this.props.currencyList[this.props.currencyId].symbol,
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
                <div className="container cart">
                    <div className="category_title">
                        <h3>CART</h3>
                    </div>
                    <div className="cart_product">
                        {!this.props.productsInCart.length ? (
                            <h4>Cart is empty</h4>
                        ) : (
                            this.props.productsInCart.map((item, index) => {
                                if (item[0] > 0)
                                return (
                                    <div className="cart_product_element" key={index}>
                                        <ErrorBoundary>
                                            <CartElement
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
                    <div className="cart_total">
                        <div className="cart_total_title">
                            <p>Tax 21%:</p>
                            <p>Quantity:</p>
                            <p>Total:</p>
                        </div>
                        <div className="cart_total_value">
                            <p>
                                {this.state.currencyValue}
                                {this.state.totalTaxInCart}
                            </p>
                            <p>{this.state.totalProductsInCart}</p>
                            <p>
                                {this.state.currencyValue}
                                {this.state.totalPriceInCart}
                            </p>
                        </div>
                    </div>
                    <button className="cart_button">Order</button>
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
