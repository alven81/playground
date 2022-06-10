import React from "react";
import { connect } from "react-redux";
import { setCurrency } from "../../store/actions/actions";

class CurrencyElement extends React.Component {
	handleOnSelect = (e) => {
		this.props.setCurrency(e);
	};

	render() {
		return (
			<li
				value={this.props.currencyItem.symbol}
				onClick={(e) => this.handleOnSelect(this.props.currencyNumber)}
			>
				<p>{`${this.props.currencyItem.symbol} ${this.props.currencyItem.label}`}</p>
			</li>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	setCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyElement);
