import React from "react";
import { connect } from "react-redux";
import ErrorBoundary from "../../utils/ErrorBoundary";
import CartElement from "./CartElement";

class Cart extends React.Component {
    render() {
        return (
            <>
                <div className="container cart">
                    <div className="category_title">
                        <h2>CART</h2>
                    </div>
                    <button
                        onClick={() => console.log(this.props.productsInCart)}
                    >
                        click
                    </button>
                    <div className="cart_product">
                        {!this.props.productsInCart.length ? (
                            <>LOADER-Cart</>
                        ) : (
                            this.props.productsInCart.map((item, index) => {
                                return (
                                    <div className="cart_product_element">
                                        <ErrorBoundary>
                                            <CartElement
                                                qty={item[0]}
                                                cartItem={item[1]}
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
    productsInCart: state.reduxCart.data,
});

const mapDispatchToProps = {
    // loadProduct,
    // addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
