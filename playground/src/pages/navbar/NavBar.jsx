import React from "react";
import Currency from "./Currency";
import Menu from "./Menu";
import {
    setCurrency,
    setCategory,
    loadCurrencies,
} from "../../store/actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyValue: "",
            currencyList: null,
            productsInCart: 0,
            dropDownMenuState: false,
            currencyQuery: `{
                currencies  {
                    label
                    symbol
                }
            }`,
        };
    }

    componentDidMount() {
        this.props.loadCurrencies(this.state.currencyQuery);
        console.log("currencyList", this.props.currencyList);
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
                    <Link to="/cart">
                        <button className="header-cart-button">
                            <img
                                src="./img/logo_transparent.svg"
                                alt="Switch to cart"
                            />
                        </button>
                    </Link>
                </div>
                <div className="header-currency">
                    <div
                        className="header-currency-container"
                        onClick={() => this.handleDropDownMenu()}
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
                    >
                        <Currency currencyList={this.props.currencyList} />
                    </div>
                    <button className="header-currency-button">
                        <img src="./img/cart.svg" alt="Cart" />
                        <span className={this.state.productsInCart ? "header-currency-button-quantity" : "hide"}>
                            {this.state.productsInCart}
                        </span>
                    </button>
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
    setCategory,
    loadCurrencies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
