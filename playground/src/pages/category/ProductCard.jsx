import React from "react"
import { connect } from "react-redux";

class ProductCard extends React.Component {

constructor (props) {
    super(props);
    this.state = {
        getCurrency: this.props.getCurrency
    }
}

    render() {
        return (
            <div className="product-card">
                <div className="product-card_img">
                    <img src={this.props.item.gallery[0]} alt={this.props.item.name} />
                    <span className={(this.props.item.inStock) ? "product-card_stock" : "hide" }>
                        <p>Out of stock</p>
                    </span>
                </div>
                <div className="product-card_description">
                    <p className="product-card_description_name">
                        {this.props.item.name}
                    </p>
                    <p className="product-card_description_currency">
                        {this.props.item.prices[this.props.getCurrency].currency.symbol}
                        {this.props.item.prices[this.props.getCurrency].amount}
                    </p>
                </div>
                <span className="product-card_cart">
                    <img src="./img/empty_cart.svg" alt="cart"/>
                </span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    getCurrency: state.reduxCurrency.data,
});

export default connect(
mapStateToProps,
)(ProductCard);
