import React from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import { setCurrency } from "../../store/actions/actions";

class CurrencyElement extends React.Component {

    handleOnSelect = (e) => {
        this.props.setCurrency(e);
        //console.log(e);
    };

  
    render() {
        return (
            //<Link className="navlink" to="">
                <li value={this.props.currencyItem.symbol} onClick={(e) =>
                    this.handleOnSelect(this.props.currencyNumber)
                }>
                    <p>{`${this.props.currencyItem.symbol} ${this.props.currencyItem.label}`}</p>
                </li>
            //</Link>
        );
    }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    setCurrency
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyElement);


