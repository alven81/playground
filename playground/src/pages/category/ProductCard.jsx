import React from "react";
import { connect } from "react-redux";
import { setSelectedProductId } from "../../store/actions/actions";
import Loader from "../components/Loader";

class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCurrency: null,
        };
    }

    componentDidMount() {
        this.setState({ currentCurrency: this.props.settedCurrency });
        console.log("inStock", this.props.item.inStock, this.props.item.name);
    }

    componentDidUpdate(prevProps) {
        if (this.props.settedCurrency !== prevProps.settedCurrency)
            this.setState({ currentCurrency: this.props.settedCurrency });
    }

    handleOnProductCard = () => {
        this.props.setSelectedProductId([
            this.props.item.id,
            this.state.currentCurrency,
        ]);
    };

    handleOnAddToCart = (e) => {
        e.preventDefault();
        console.log("add to cart");
    }

    render() {
        return this.state.currentCurrency === null &&
            !this.props.item.length ? (
            <Loader />
        ) : (
            <div className="product-card" onClick={this.handleOnProductCard}>
                <div className="product-card_img">
                    <img
                        src={this.props.item.gallery[0]}
                        alt={this.props.item.name}
                    />
                    <span
                        className={
                            !this.props.item.inStock
                                ? "product-card_stock"
                                : "hide"
                        }
                    >
                        <p>Out of stock</p>
                    </span>
                </div>
                <div className="product-card_description">
                    <p className="product-card_description_name">
                        {this.props.item.name}
                    </p>
                    <p className="product-card_description_currency">
                        {
                            this.props.item.prices[this.state.currentCurrency]
                                .currency.symbol
                        }
                        {
                            this.props.item.prices[this.state.currentCurrency]
                                .amount
                        }
                    </p>
                </div>
                <span onClick={(e) => this.handleOnAddToCart(e)}
                    className={
                        this.props.item.inStock ? "product-card_cart" : ""
                    }
                >
                    {this.props.item.inStock ? (
                        <img src="./img/empty_cart.svg" alt="cart" />
                    ) : (
                        <></>
                    )}
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    settedCurrency: state.currency.data,
});

const mapDispatchToProps = {
    setSelectedProductId,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
