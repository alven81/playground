import React from "react";
import { connect } from "react-redux";
import { setSelectedProductId } from "../../store/actions/actions";

class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCurrency: null,
        };
    }

    componentDidMount() {
        this.setState({ currentCurrency: this.props.settedCurrency });
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

    handleOnCart = (e) => {
        console.log(e);
    };

    render() {
        return this.state.currentCurrency === null &&
            !this.props.item.length ? (
            <>Loading card...</>
        ) : (
            <div
                className="product-card"
                onClick={() => this.handleOnProductCard()}
            >
                <div className="product-card_img">
                    <img
                        src={this.props.item.gallery[0]}
                        alt={this.props.item.name}
                    />
                    <span
                        className={
                            this.props.item.inStock
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
                <span
                    className="product-card_cart"
                    onClick={(e) => {
                        this.handleOnCart(e);
                    }}
                >
                    <img src="./img/empty_cart.svg" alt="cart" />
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    settedCurrency: state.reduxCurrency.data,
});

const mapDispatchToProps = {
    setSelectedProductId,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
