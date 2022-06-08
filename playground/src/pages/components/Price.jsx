import React from "react";
import { connect } from "react-redux";
import Loader from "./Loader";
import { calcTotalPrice } from "../../store/actions/actions";

class Price extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			whatCurrency: null,
		};
	}

	//  componentDidMount(prevProps) {
	// //	if (this.props.qty) {
    //     console.log("FUCK!", this.props.productId);
	//  		this.props.calcTotalPrice([
	//  			this.props.qty *
	//  				this.props.price[this.props.whatCurrency].amount,
	//  			this.props.productId
	//  		]);

    //   //  }
             
	//  }

    // componentDidUpdate (prevProps) {
    //     if (this.props.qty !== prevProps.qty)
    //     {console.log("See Res:",this.props.qty,this.props.price[this.props.whatCurrency].amount,  this.props.productId);
    //     this.props.calcTotalPrice([
    //         this.props.qty *
    //             this.props.price[this.props.whatCurrency].amount,
    //         this.props.productId
    //     ])}

    // } 

    

	render() {
		return this.props.whatCurrency === null && this.props.price === null ? (
			<Loader />
		) : (
			<div className="price">
				<p className={this.props.classCurrency}>Price:</p>
				<p className="price_currency">
					{this.props.price[this.props.whatCurrency].currency.symbol}
					{this.props.price[this.props.whatCurrency].amount}
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	whatCurrency: state.currency.data,
});

const mapDispatchToProps = {
	//loadProduct,
	calcTotalPrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(Price);
