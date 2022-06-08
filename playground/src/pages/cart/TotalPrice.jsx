import React from "react";

class TotalPrice extends React.Component {
	render() {
		return (
			<>
				<div className="cart_total_title">
					<p>Tax 21%:</p>
					<p>Quantity:</p>
					<p>Total:</p>
				</div>
				<div className="cart_total_value">
					<p>{this.props.currencyValue}</p>
					<p>{this.props.totalProductsInCart}</p>
					<p></p>
				</div>
			</>
		);
	}
}

export default TotalPrice;
