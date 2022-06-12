import "../../App.scss";
import React from "react";
import CurrencyElement from "./CurrencyElement";
import Loader from "../components/Loader";

class Currency extends React.Component {
    render() {
        return (
            <ul>
                {!this.props.currencyList.length ? (
                    <Loader />
                ) : (
                    this.props.currencyList.map((item, index) => (
                        <CurrencyElement
                            currencyItem={item}
                            key={index}
                            currencyNumber={index}
                        />
                    ))
                )}
            </ul>
        );
    }
}

export default Currency;
