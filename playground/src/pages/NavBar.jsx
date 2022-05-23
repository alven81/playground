import React from "react";

class Header extends React.Component {
        render() {
            return (
                <header className="container header">
                    <div className="header-nav">
                        <button className="header-nav-button">
                            Women
                        </button>
                        <button className="header-nav-button">
                            Men
                        </button>
                        <button className="header-nav-button">
                            Kids
                        </button>
                    </div>
                    <div className="header-cart">
                        <button className="header-cart-button">
                            <img src="./img/logo_transparent.svg" alt="Switch to cart"/>
                        </button>
                    </div>
                    <div className="header-currency">
                        <select name="currency" className="header-currency-select">
                            <option value="$" selected>$ USD</option>
                            <option value="€" selected>€ EUR</option>
                            <option value="¥" selected>¥ JPY</option>
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