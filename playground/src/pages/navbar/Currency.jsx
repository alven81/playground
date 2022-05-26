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
        if (this.props.loading) {
            return <div>Loading</div>
        }
        if (this.props.error) {
            return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
        }
        return (
            <>
                {   !this.props.data ?

                    <>LOADER</> : 

                    this.props.data.map((item, index) =>
                        <>
                            <CurrencyElement 
                                currencyItem={item}
                                key = {index} />
                        </>
                    ) 
                }
            </> 
        )
    }
}

const mapStateToProps = state => ({
    data: state.reduxCurrencies.data,
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
