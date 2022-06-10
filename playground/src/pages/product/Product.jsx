import React from "react";
import { connect } from "react-redux";
import Attribute from "../components/Attribute";
import Name from "../components/Name";
import Price from "../components/Price";
import {
    loadProduct,
    addToCart,
    waitForCart,
} from "../../store/actions/actions";
import ImageBox from "./ImageBox";
import ErrorBoundary from "../../utils/ErrorBoundary";
import { createBrowserHistory } from 'history';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  //product (id: "${this.props.productId[0]}") {
            categoriesQuery: `
                    {
                        product (id: "${window.location.pathname.split('/').slice(2).join()}") {
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
            //waitForCart: {},
        };
    }

    componentDidMount() {

        this.props.loadProduct(
            this.state.categoriesQuery,
            //this.props.productId[0] !!!!!
            window.location.pathname.split('/').slice(2).join()
        );
        //console.log("window.location.pathname", window.location.pathname.split('/').slice(2).join());
        //console.log(this.state.categoriesQuery,
        //    this.props.productId[0]);

        // let history = createBrowserHistory();
        // history.listen(({ location, action }) => {
        //     console.log(action, location.pathname, location.state);
        //   // this is called whenever new locations come in
        //   // the action is POP, PUSH, or REPLACE
        // });
    }

    componentWillUnmount() {
        //console.log("UNMOUNT");
        //this.props.waitForCart({ id: this.props.productId[0] }); !!!!! 
        this.props.waitForCart({ id: window.location.pathname.split('/').slice(2).join() });
    }

    handleAddToCart = (e) => {
        this.isAllAttributesSelected(this.props.waitForCartAttributes);
    };

    isAllAttributesSelected(attributes) {
        console.log("attributes", attributes);
        let isEmpty = 0;

        for (let item in attributes) {
            if (attributes[item] === "") {
                ++isEmpty;
            }
        }
        if (isEmpty) {
            console.log("not all attributes were filled!!!");
        } else {
            //attributes["id"] = this.props.productId[0]; !!!!!
            attributes["id"] =window.location.pathname.split('/').slice(2).join()
            const elementForCart = Object.assign({}, attributes);
            this.props.addToCart([1, Math.random() * 10e16, elementForCart, this.props.productOptions.prices]);
        }
    }

    render() {
        if (this.props.loading) {
            return <div>Loading...</div>;
        }
        if (this.props.error) {
            return (
                <div style={{ color: "red" }}>ERROR: {this.props.error}</div>
            );
        }
        return (
            <div className="product container">
                <div className="product_images">
                    <ErrorBoundary>
                        {this.props.productOptions.gallery && (
                            <ImageBox
                                images={this.props.productOptions.gallery}
                            />
                        )}
                    </ErrorBoundary>
                </div>
                <div className="product_info">
                    <Name
                        nameClass={"product_info_title"}
                        brand={this.props.productOptions.brand}
                        name={this.props.productOptions.name}
                    />
                    <ErrorBoundary>
                        {this.props.productOptions.attributes && (
                            <Attribute
                                attributeClass={"attribute"}
                                item={this.props.productOptions.attributes}
                                buttonActivity={""}
                            />
                        )}
                    </ErrorBoundary>
                    <ErrorBoundary>
                        {this.props.productOptions.prices && (
                            <Price
                                priceClass={"price"}
                                classCurrency={"price_label-show"}
                                price={this.props.productOptions.prices}
                            />
                        )}
                    </ErrorBoundary>
                    <button
                        disabled={this.props.productOptions.inStock ? "disabled" : ""}
                        className="product_info_button"
                        onClick={() => this.handleAddToCart()}
                    >
                        {this.props.productOptions.inStock ? "Out of stock" : "Add to cart"}
                    </button>
                    <div className="product_info_description">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: this.props.productOptions.description,
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    productId: state.selectedProductId.data,
    productOptions: state.loadProduct.data,
    waitForCartAttributes: state.waitForCart.data,
});

const mapDispatchToProps = {
    loadProduct,
    addToCart,
    waitForCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
