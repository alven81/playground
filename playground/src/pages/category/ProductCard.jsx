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
                </div>
                <div className="product-card_description">
                    <p className="product-card_description">
                        {this.props.item.name}
                    </p>
                    <p className="product-card_description">{this.props.item.prices[this.props.getCurrency].currency.symbol}{this.props.item.prices[this.props.getCurrency].amount}</p>
                </div>
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
