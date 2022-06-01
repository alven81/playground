import React from "react";
import { connect } from "react-redux";

class Price extends React.Component {
   
    constructor (props) {
        super(props);
        this.state = {
            whatCurrency: null
        }
    }

    componentDidMount() {
        console.log("Price: ", this.props.price);
    }

    render() {
        return (
        

            (this.props.whatCurrency === null ?? this.props.price === null ) ? <>Loading...</> :

            <div className="price">
                <p className={this.props.classCurrency}>
                    Price:
                </p>
                <p className="price_currency">
                    {this.props.price[this.props.whatCurrency].currency.symbol}
                    {this.props.price[this.props.whatCurrency].amount}
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    whatCurrency: state.reduxCurrency.data,
});

export default connect(
mapStateToProps,
)(Price);