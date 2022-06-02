import "../../App.scss";
import React from "react";
import ProductCard from "./ProductCard";
import { loadCategories } from "../../store/actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ErrorBoundary from "../../utils/ErrorBoundary";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesQuery: `
            {
                categories {
                products {
                    id
                    name
                    inStock
                    gallery
                    description
                        prices {
                            currency {
                                label
                                symbol
                            }
                    amount
                    }
                }
                }
            }`,
            //whatCurrency: []
        };
    }

    componentDidMount() {
        this.props.loadCategories(
            this.state.categoriesQuery,
            this.props.categoryName[0]
        );
    }

    componentDidUpdate(prevProps) {
        if (this.props.categoryName !== prevProps.categoryName) {
            this.props.loadCategories(
                this.state.categoriesQuery,
                this.props.categoryName[0]
            );
        }
    }

    render() {
        if (this.props.loading) {
            return <div>Loading</div>;
        }
        if (this.props.error) {
            return (
                <div style={{ color: "red" }}>ERROR: {this.props.error}</div>
            );
        }
        return (
            <>
                {this.props.categoriesList === null ? (
                    <>LOADER</>
                ) : (
                    <div className="container category">
                        <div className="category_title">
                            <h2>{this.props.categoryName[1]}</h2>
                        </div>
                        <div className="category_product">
                            {this.props.categoriesList.map((item, index) => (
                                <Link
                                    style={{ textDecoration: "none" }}
                                    key={index}
                                    to={`/product/${item.id}`}
                                >
                                    <ErrorBoundary>
                                        <ProductCard item={item} />
                                    </ErrorBoundary>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    categoriesList: state.loadCategories.data,

    // Array [category number, category name]
    categoryName: state.category.data,

    loading: state.loadCategories.loading,
    error: state.loadCategories.error,
});

const mapDispatchToProps = {
    loadCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
