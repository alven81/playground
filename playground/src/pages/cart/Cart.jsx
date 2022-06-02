import React from "react";
import { connect } from "react-redux";
import ErrorBoundary from "../../utils/ErrorBoundary";
import Loader from "../components/Loader";
import CartElement from "./CartElement";

class Cart extends React.Component {
    
    render() {
        return (
            <>
                <div className="container cart">
                    <div className="category_title">
                        <h3>CART</h3>
                    </div>
                    <button
                        onClick={() => console.log(this.props.productsInCart)}
                    >
                        click
                    </button>
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
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    productsInCart: state.cart.data,
});

const mapDispatchToProps = {
    // loadProduct,
    // addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
