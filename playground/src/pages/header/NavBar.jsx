import React from "react";
import Currency from "./Currency";
import Menu from "./Menu";
import {
	setCurrency,
	//setCategory,
	loadCurrencies,
} from "../../store/actions/actions";
import { currencyQuery } from "../../store/queries";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import Bag from "../bag/Bag";

const setActive = ({ isActive }) =>
	isActive ? "active-cart header-cart-button" : "header-cart-button";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currencyValue: "",
			currencyList: null,
			productsInCart: 0,
			dropDownMenuState: false,
			dropDownBagState: false,
		};
	}

	componentDidMount() {
		this.props.loadCurrencies(currencyQuery);
	}

	componentDidUpdate(prevProps) {
		if (
			this.props.currencyList !== prevProps.currencyList ||
			this.props.currencyId !== prevProps.currencyId
		)
			this.setState({
				currencyValue:
					this.props.currencyList[this.props.currencyId].symbol,
			});
		if (this.props.productsInCart !== prevProps.productsInCart) {
			this.setState({
				productsInCart: this.props.productsInCart.reduce(
					(a, b) => a + b[0],
					0
				),
			});
		}
	}

	handleSetCategoryOnClick = (e) => {
		this.props.setCategory(e);
	};

	handleDropDownMenu = () => {
		this.setState({ dropDownMenuState: !this.state.dropDownMenuState });
	};

	handleDropDownBag = () => {
		this.setState({ dropDownBagState: !this.state.dropDownBagState });
	};

	render() {
		return !this.props.currencyList === null ? (
			<Loader />
		) : (
			<header className="container header">
				<div className="header-nav">
					<Menu
						handleSetCategoryOnClick={this.handleSetCategoryOnClick}
					/>
				</div>
				<div className="header-cart">
					<NavLink to="/cart" className={setActive}>
						<img
							src="/img/logo_transparent.svg"
							alt="Switch to cart"
						/>
					</NavLink>
				</div>
				<div className="header-currency">
					<div
						className="header-currency-container"
						onClick={this.handleDropDownMenu}
					>
						<span className="header-currency-container-sign">
							{this.state.currencyValue}
						</span>
						<span
							className={
								this.state.dropDownMenuState
									? "header-currency-container-arrows"
									: "header-currency-container-arrows arrows_transform"
							}
						/>
					</div>
					<div
						className={
							this.state.dropDownMenuState
								? "header-currency-select active"
								: "header-currency-select"
						}
						onClick={this.handleDropDownMenu}
					>
						<Currency currencyList={this.props.currencyList} />
					</div>
					<button
						className="header-currency-button"
						onClick={this.handleDropDownBag}
					>
						<img src="/img/cart.svg" alt="Cart" />
						<span
							className={
								this.state.productsInCart
									? "header-currency-button-quantity"
									: "hide"
							}
						>
							{this.state.productsInCart}
						</span>
					</button>
				</div>
				<span
					className={
						this.state.dropDownBagState
							? "bag_background container"
							: "hide"
					}
				/>
				<div
					className={
						this.state.dropDownBagState ? "bag active" : "bag"
					}
					onClick={this.handleDropDownBag}
				>
					<Bag
						currencyList={this.props.currencyList}
						currencyId={this.props.currencyId}
					/>
				</div>
			</header>
		);
	}
}

const mapStateToProps = (state) => ({
	productsInCart: state.cart.data,
	currencyList: state.loadCurrencies.data,
	loading: state.loadCurrencies.loading,
	error: state.loadCurrencies.error,
	currencyId: state.currency.data,
});

const mapDispatchToProps = {
	setCurrency,
	//setCategory,
	loadCurrencies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
