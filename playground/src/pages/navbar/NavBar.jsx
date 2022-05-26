import React from "react";
import Currency from "./Currency";
import Menu from "./Menu";

class Header extends React.Component {

    handleOnSelect = (e) => {
        console.log(e)
    }
    
        render() {
            return (
                <header className="container header">
                    <div className="header-nav">
                       <Menu />
                    </div>
                    <div className="header-cart">
                        <button className="header-cart-button">
                            <img src="./img/logo_transparent.svg" alt="Switch to cart"/>
                        </button>
                    </div>
                    <div className="header-currency">
                        <select name="currency" className="header-currency-select" onChange={(e) => this.handleOnSelect(e.target.selectedIndex)}>
                            <Currency />
                        </select>
                        <button className="header-currency-button">
                            <img src="./img/cart.svg" alt="Cart" />
                        </button>
                    </div>
                </header> 
            )
        }
  }

export default Header