 /* this.props.data.map(item => <div className="question-text" dangerouslySetInnerHTML={{__html: item.description}}/>) */
 import React from "react";
  import { connect } from "react-redux";
  import Attribute from "../components/Attribute";
  import Name from "../components/Name";
  import Price from "../components/Price";
  import { loadProduct } from "../../store/actions/actions";
//  //import ImageBox from "./ImageBox";
  import ErrorBoundary from "../../utils/ErrorBoundary";
import axios from "axios";

 class CartElement extends React.Component {
    
     constructor(props){
         super(props);
         this.state= {
            cardItem: this.props.cardItem,
            categoriesQuery: `
                 {
                     product (id: "${this.props.cartItem.id}") {
                         name
                         inStock
                         gallery
                         description
                         brand
                         prices {
                             currency {
                                 label
                                 symbol
                             }
                             amount
                         }
                         attributes {
                             id
                             name
                             type
                             items {
                                 displayValue
                                 value
                                 id
                             }
                         }
                     }
                 }
                 `,   
             productOptions: [],
             waitForCart: {}
         }
     }
 
     async componentDidMount ()  {
        await axios({
                    url: 'http://localhost:4000/', 
                    method: 'POST',
                    data: {
                        query: this.state.categoriesQuery
                            }
                })
        .then(response => response.data.data) 
        .then(response => this.setState({productOptions: response.product}))

        
        }

 
    //  handleAddToCart = (e) => {
    //      this.isAllAttributesSelected(this.props.waitForCartAttributes)
    //  }
 
    //  isAllAttributesSelected (attributes) {
    //      let isEmpty = 0;
    //      let reset = [];
    //      for (let item in attributes) {
    //          if (attributes[item] === "" ) {++isEmpty}
    //      }
    //      if (isEmpty)
    //          {console.log("not all attributes were filled!!!")}
    //              else 
    //          {//console.log(isEmpty);
    //          attributes["id"] = this.props.cardItem["id"];
    //          //attributes["qty"] = 1;
    //          reset = [1, Object.assign({}, attributes)];
    //          this.props.addToCart(reset)}  
    //  }
 
     render() {

         return (

            !this.state.productOptions ? <>Load!</> :

            <div className="product container">
            
                 <div className="product_info">    
                    <ErrorBoundary> 
                        <Name
                            brand={this.state.productOptions.brand}
                            name={this.state.productOptions.name}
                        />
                     </ErrorBoundary>
                     <ErrorBoundary>
                         <Attribute item={this.state.productOptions.attributes}/>
                     </ErrorBoundary>    
                     <ErrorBoundary>
                         <Price
                             classCurrency={"price_label-show"} 
                             price={this.state.productOptions.prices}
                         />
                     </ErrorBoundary>
                    
                 </div>
             </div>)
         
     }
 }
 
 const mapStateToProps = state => ({
     productId: state.reduxProductId.data,
     //productOptions: state.reduxProduct.data,
     waitForCartAttributes: state.reduxWaitForCart.data
 });
 
 const mapDispatchToProps = {
     loadProduct,
     //addToCart
 };
 
 export default connect(
     mapStateToProps,
     mapDispatchToProps
 )(CartElement);

//export default CartElement