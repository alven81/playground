import React from "react";
import { connect } from "react-redux";
import Attribute from "../components/Attribute";
import Name from "../components/Name";
import Price from "../components/Price";
import { loadProduct, addToCart } from "../../store/actions/actions";
import ImageBox from "./ImageBox";
import ErrorBoundary from "../../utils/ErrorBoundary";
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      waitForCart: {},
    };
  }

  componentDidMount() {
    this.props.loadProduct(this.state.categoriesQuery, this.props.productId[0]);
  }

  handleAddToCart = (e) => {
    this.isAllAttributesSelected(this.props.waitForCartAttributes);
  };

  isAllAttributesSelected(attributes) {
    let isEmpty = 0;

    for (let item in attributes) {
      if (attributes[item] === "") {
        ++isEmpty;
      }
    }

    if (isEmpty) {
      console.log("not all attributes were filled!!!");
    } else {
      attributes["id"] = this.props.productId[0];
      const elementForCart = Object.assign({}, attributes);
      this.props.addToCart([1, elementForCart]);
    }
  }

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }
    if (this.props.error) {
      return <div style={{ color: "red" }}>ERROR: {this.props.error}</div>;
    }
    return (
      <div className="product container">
        <div className="product_images">
          <ErrorBoundary>
            {this.props.productOptions.gallery && (
              <ImageBox images={this.props.productOptions.gallery} />
            )}
          </ErrorBoundary>
        </div>
        <div className="product_info">
          <Name
            brand={this.props.productOptions.brand}
            name={this.props.productOptions.name}
          />
          <ErrorBoundary>
            {this.props.productOptions.attributes && (
              <Attribute item={this.props.productOptions.attributes} />
            )}
          </ErrorBoundary>
          <ErrorBoundary>
            {this.props.productOptions.prices && (
              <Price
                classCurrency={"price_label-show"}
                price={this.props.productOptions.prices}
              />
            )}
          </ErrorBoundary>
          <button
            className="product_info_button"
            onClick={() => this.handleAddToCart()}
          >
            Add to cart
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
  productId: state.reduxProductId.data,
  productOptions: state.reduxProduct.data,
  waitForCartAttributes: state.reduxWaitForCart.data,
});

const mapDispatchToProps = {
  loadProduct,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
