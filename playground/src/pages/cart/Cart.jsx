import React from "react";
import { connect } from "react-redux";
import CartElement from "./CartElement";

class Cart extends React.Component {
   
// componentDidUpdate(prevProps){
//     //if (this.props.reduxCartInclude == prevProps.reduxCartInclude)
//     console.log(this.props.reduxCartInclude);
// }

    render() {
        return (
            <>                      
                <div className="container cart">
                    <div className="category_title">
                        <h2>CART</h2>
                    </div>
                    <button onClick={() => console.log(this.props.reduxCartInclude)}>click</button>
                    <div className="cart_product">
                        {   !this.props.reduxCartInclude ?

                            <>LOADER</> :

                            this.props.reduxCartInclude.map((item, index) =>  
                            
                            <div>
                                <CartElement cartItem={item[1]} qty={item[0]} key={index} />
                            </div>
                            
                        )}
                    </div>
                </div> 
            </>
        )
    }
}

const mapStateToProps = state => ({
    reduxCartInclude: state.reduxCart.data
});

const mapDispatchToProps = {
    // loadProduct,
    // addToCart
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
