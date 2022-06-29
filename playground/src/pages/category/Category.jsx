import "../../App.scss";
import React from "react";
import ProductCard from "./ProductCard";
import { loadCategories } from "../../store/actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import Loader from "../components/Loader";
import { buildCategoryQuery } from "../../store/queries";

class Category extends React.Component {

    componentDidMount() {
        console.log(window.location.pathname.split("/")[1]);
        this.props.loadCategories(
            buildCategoryQuery(
                window.location.pathname.split("/")[1]
            ),
            window.location.pathname.split("/")[1]
        );
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
                            <h2>{window.location.pathname.split("/")[1]}</h2>
                        </div>
                        <div className="category_product">
                            {this.props.categoriesList.map((item, index) => (
                                <Link
                                    style={{ textDecoration: "none" }}
                                    key={index}
                                    to={`${item.id}`}
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
    loading: state.loadCategories.loading,
    error: state.loadCategories.error,
});

const mapDispatchToProps = {
    loadCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
