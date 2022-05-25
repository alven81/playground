import React from "react"

class ProductCard extends React.Component {

    render() {
        return (
            <div className="product-card" productId={this.props.item.id}>
                <div className="product-card_img">
                    <img src={this.props.item.gallery[0]} alt={this.props.item.name} />
                </div>
                <div className="product-card_description">
                    <p>{this.props.item.name}</p>
                    <p>{this.props.item.prices[0].currency.symbol}{this.props.item.prices[0].amount}</p>
                </div>
            </div>
        )
    }
}

export default ProductCard