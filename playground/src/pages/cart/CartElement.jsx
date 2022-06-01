import React from "react";
import { connect } from "react-redux";
import Attribute from "../components/Attribute";
import Name from "../components/Name";
import Price from "../components/Price";
import { loadProduct } from "../../store/actions/actions";
import ErrorBoundary from "../../utils/ErrorBoundary";
import axios from "axios";
import ImageSwitcher from "./ImageSwitcher.jsx";

class CartElement extends React.Component {
    // qty={item[0]} cartItem={item[1]} key={index} />

    constructor(props) {
        super(props);
        this.state = {
            //cardItem: this.props.cardItem,
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
            productOptions: null,
            // waitForCart: {}
        };
    }

    async componentDidMount() {
        await axios({
            url: "http://localhost:4000/",
            method: "POST",
            data: {
                query: this.state.categoriesQuery,
            },
        })
            .then((response) => response.data.data)
            .then((response) => response.product)
            .then((productOptions) => this.setState({ productOptions }));

            setTimeout(() => console.log(this.state.productOptions.gallery), 300);
    }

    render() {
        return this.state.productOptions == null ? (
            <>Load</>
        ) : (
            <>
                <div className="cart_product_info">
                    <ErrorBoundary>
                        <Name
                            brand={this.state.productOptions.brand}
                            name={this.state.productOptions.name}
                        />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Price
                            classCurrency={"price_label-show"}
                            price={this.state.productOptions.prices}
                        />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        {this.state.productOptions.attributes && (
                            <Attribute
                                item={this.state.productOptions.attributes}
                            />
                        )}
                    </ErrorBoundary>
                </div>
                <div className="cart_product_quantity"></div>
                <div className="cart_product_image">
                    <ErrorBoundary>
                        {this.state.productOptions.gallery && (
                            <ImageSwitcher
                                images={this.state.productOptions.gallery}
                            />
                        )}
                    </ErrorBoundary>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    //productId: state.reduxProductId.data,
    //productOptionsList: state.reduxProduct.data,
    //waitForCartAttributes: state.reduxWaitForCart.data
});

const mapDispatchToProps = {
    loadProduct,
    //addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartElement);

//export default CartElement
