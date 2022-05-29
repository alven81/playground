 /* this.props.data.map(item => <div className="question-text" dangerouslySetInnerHTML={{__html: item.description}}/>) */
import React from "react";
import { connect } from "react-redux";
import Attribute from "../components/Attribute";
import Name from "../components/Name";
import Price from "../components/Price";
import { loadProduct } from "../../store/actions/actions";
import ImageBox from "./ImageBox";
import ErrorBoundary from "../../utils/ErrorBoundary";
class Product extends React.Component {
   
    constructor(props){
        super(props);
        this.state= {
            productId: this.props.productId,
            categoriesQuery: `
                {
                    product (id: "${this.props.productId[0]}") {
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
            productOptions: this.props.productOptions
        }
    }

    componentDidMount() {
        this.props.loadProduct(this.state.categoriesQuery, this.props.productId[0]);
    }

    render() {
        if (this.props.loading) {
            return <div>Loading</div>
        }
        if (this.props.error) {
            return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
        }
        return (
            <div className="product container">
                <div className="product_images">
                    <ErrorBoundary>
                        <ImageBox images={this.props.productOptions.gallery}/>
                    </ErrorBoundary>
                </div>    
                <div className="product_info">     
                    <Name
                        brand={this.props.productOptions.brand}
                        name={this.props.productOptions.name}
                    />
                    <ErrorBoundary>
                        <Attribute item={this.props.productOptions.attributes}/>
                    </ErrorBoundary>    
                    <ErrorBoundary>
                        <Price
                            classCurrency={"price_label-show"} 
                            price={this.props.productOptions.prices}
                        />
                    </ErrorBoundary>
                    <button className="product_info_button" onClick={() => console.log("click!")}>Add to cart</button>
                    <div className="product_info_description">
                        <p dangerouslySetInnerHTML={{__html: this.props.productOptions.description}}/>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    productId: state.reduxProductId.data,
    productOptions: state.reduxProduct.data,
});

const mapDispatchToProps = {
    loadProduct
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);