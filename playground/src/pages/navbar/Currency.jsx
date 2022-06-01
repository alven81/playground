import '../../App.scss';
import React from "react";
import { loadCurrencies } from "../../store/actions/actions";
import { connect } from 'react-redux';
import CurrencyElement from './CurrencyElement';

class Currency extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            currencyQuery: 
            `{
                currencies  {
                    label
                    symbol
                }
            }`
        }
    }

    componentDidMount() {
        this.props.loadCurrencies(this.state.currencyQuery);
    };

    render() {
        return (
            <>
                { !this.props.currencyList.length ? 
                    <>LOADER</> : 

                    this.props.currencyList.map((item, index) =>
                        <CurrencyElement 
                            currencyItem={item}
                            key = {index} 
                        />
                    ) 
                }
            </> 
        )
    }
}

const mapStateToProps = state => ({
    currencyList: state.reduxCurrencies.data,
    loading: state.reduxCurrencies.loading,
    error: state.reduxCurrencies.error,
});

const mapDispatchToProps = {
    loadCurrencies
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Currency);
