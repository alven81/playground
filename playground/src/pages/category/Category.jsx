import "../../App.scss";
import React from "react";
import ProductCard from "./ProductCard";
import { loadCategories } from "../../store/actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import Loader from "../components/Loader";

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
        };
    }

    componentDidMount() {
       console.log(this.props.categoryName, this.props.categoryIndex, window.location.pathname);
       console.log("This Work!!!", window.location.pathname.split("/")[1]);
        this.props.loadCategories(
            this.state.categoriesQuery,
            this.props.categoryIndex
        );
    }

    componentDidUpdate(prevProps) {
        
        if (this.props.categoryIndex !== prevProps.categoryIndex) {
            console.log("This Work update!!!", window.location.pathname.split("/")[1]);
            // this.props.loadCategories(
            //     this.state.categoriesQuery,
            //     this.props.categoryName[0]
            // );
        }
    }

    render() {
        if (this.props.loading) {
            return <Loader />;
        }
        if (this.props.error) {
            return (
                <div style={{ color: "red" }}>ERROR: {this.props.error}</div>
            );
        }
        return (
            <>
                {this.props.categoriesList === null ? (
                    <Loader />
                ) : (
                    <div className="container category">
                        <div className="category_title">
                            <h2>{this.props.categoryName}</h2>
                        </div>
                        <div className="category_product">
                            {this.props.categoriesList.map((item, index) => (
                                <Link
                                    style={{ textDecoration: "none" }}
                                    key={index}
                                    to={`${window.location.pathname.split("/")[1]}/${item.id}`}
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
    //categoryName: state.category.data,
    loading: state.loadCategories.loading,
    error: state.loadCategories.error,
});

const mapDispatchToProps = {
    loadCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
