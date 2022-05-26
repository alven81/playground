import React from "react";
import Currency from "./Currency";
import Menu from "./Menu";
import { setCurrency, setCategory } from "../../store/actions/actions";
import { connect } from 'react-redux';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyValue: null
        }
    }

    componentDidMount() {
        this.props.setCurrency(0);
        //this.props.setCategory(0);
    };

    handleOnSelect = (e) => {
        this.props.setCurrency(e);
        //this.setState({currencyValue: this.props.data})
    }
    
    handleSetCategoryOnClick = (e) => {
        this.props.setCategory(e);
        //console.log(e);
    }

    render() {
        return (
            <header className="container header">
                <div className="header-nav">
                   <Menu handleSetCategoryOnClick={this.handleSetCategoryOnClick}/>
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

const mapStateToProps = state => ({
    //data: state.reduxCurrency.data,
});
    
const mapDispatchToProps = {
    setCurrency,
    setCategory
};

export default connect(
mapStateToProps,
mapDispatchToProps
)(Header);








// componentDidMount() {
//     this.props.loadCategory(this.state.categoriesQuery, this.state.idCategory);
// };
    
// render() {
//     if (this.props.loading) {
//         return <div>Loading</div>
//     }
//     if (this.props.error) {
//         return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
//     }
//     return (
//         <>
//             <h2>Category name</h2>
//             <div className="container category">
//                 {   !this.props.data ?

//                     <>LOADER</> :

//                     this.props.data.map((item, index) =>  <ProductCard 
//                         item = {item} 
//                         key = {item.id} 
//                     />)
//                 }
//             </div> 
//         </>
//     )
// }
// }

// const mapStateToProps = state => ({
// data: state.reduxСategories.data,
// loading: state.reduxСategories.loading,
// error: state.reduxСategories.error,
// });

// const mapDispatchToProps = {
// loadCategory
// };

// export default connect(
// mapStateToProps,
// mapDispatchToProps
// )(Category);
