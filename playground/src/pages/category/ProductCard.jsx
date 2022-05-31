import React from "react"
import { connect } from "react-redux";
import { setSelectedProductId } from "../../store/actions/actions";

class ProductCard extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            settedCurrency: null,
            settedItem: null
        }
    }

    componentDidMount() {
        this.setState({settedCurrency: this.props.getCurrency})
        this.setState({settedItem: this.props.item})
    }

    handleOnProductCard = () => {
        this.props.setSelectedProductId([this.state.settedItem.id, this.state.settedCurrency]);
    }

    handleOnCart = (e) => {
        console.log(e)
    }

    render() {
        return (

            ((this.state.settedCurrency === null) && (this.state.settedItem === null)) ? <>Loading card...</> :

            <div className="product-card" onClick={() => this.handleOnProductCard()}>
                <div className="product-card_img">
                    <img src={this.state.settedItem.gallery[0]} alt={this.state.settedItem.name} />
                    <span className={(this.state.settedItem.inStock) ? "product-card_stock" : "hide" }>
                        <p>Out of stock</p>
                    </span>
                </div>
                <div className="product-card_description">
                    <p className="product-card_description_name">
                        {this.state.settedItem.name}
                    </p>
                    <p className="product-card_description_currency">
                        {this.state.settedItem.prices[this.state.settedCurrency].currency.symbol}
                        {this.state.settedItem.prices[this.state.settedCurrency].amount}
                    </p>
                </div>
                <span className="product-card_cart" onClick={(e) => {this.handleOnCart(e)}}>
                    <img src="./img/empty_cart.svg" alt="cart"/>
                </span>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    getCurrency: state.reduxCurrency.data,
});

const mapDispatchToProps = {
    setSelectedProductId
};

export default connect(
mapStateToProps,
mapDispatchToProps
)(ProductCard);
