import React from "react";

class CurrencyElement extends React.Component {
    render() {
        return (
            <option value={this.props.currencyItem.symbol}>
                {`${this.props.currencyItem.symbol} ${this.props.currencyItem.label}`}
            </option>
        );
    }
}

export default CurrencyElement;
