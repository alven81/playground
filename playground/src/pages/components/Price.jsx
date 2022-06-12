import React from "react";
import { connect } from "react-redux";
import Loader from "./Loader";
import { calcTotalPrice } from "../../store/actions/actions";

class Price extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usedCurrency: null,
		};
	}

	render() {
		return this.props.usedCurrency === null && this.props.price === null ? (
			<Loader />
		) : (
			<div className={this.props.priceClass}>
				<p className={this.props.classCurrency}>Price:</p>
				<p className={`${this.props.priceClass}_currency`}>
					{this.props.price[this.props.usedCurrency].currency.symbol}
					{this.props.price[this.props.usedCurrency].amount}
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	usedCurrency: state.currency.data,
});

const mapDispatchToProps = {
	calcTotalPrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(Price);
