import '../../App.scss';
import React from "react";
import ProductCard from './ProductCard';
import {loadCategory} from "../../store/actions/actions";
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

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
            idCategory: 0
            
        }
    }

    componentDidMount() {
        this.props.loadCategory(this.state.categoriesQuery, this.props.category[0]);
    };

    componentDidUpdate(prevProps) {
        if (this.props.category !== prevProps.category) {
            this.props.loadCategory(this.state.categoriesQuery, this.props.category[0]);
        }
    }

    render() {
        if (this.props.loading) {
            return <div>Loading</div>
        }
        if (this.props.error) {
            return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
        }
        return (
            <>                      
                <div className="container category">
                    <div className="category_title">
                        <h2>{this.props.category[1]}</h2>
                    </div>
                    <div className="category_product">
                        {   !this.props.data ?

                            <>LOADER</> :

                            this.props.data.map((item, index) =>  
                                <Link key={index}
                                to={`/product/${item.id}`}>
                                    <ProductCard 
                                    item = {item}
                                    key = {item.id}
                                    />
                                </Link>
                            )
                        }
                    </div>
                </div> 
            </>
        )
    }
}

const mapStateToProps = state => ({
    data: state.reduxСategories.data,
    loading: state.reduxСategories.loading,
    error: state.reduxСategories.error,
    category: state.reduxCategory.data    
});

const mapDispatchToProps = {
    loadCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);
