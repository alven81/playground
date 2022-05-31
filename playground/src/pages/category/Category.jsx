import '../../App.scss';
import React from "react";
import ProductCard from './ProductCard';
import {loadCategory} from "../../store/actions/actions";
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';

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
            setCategory: null,
            setCategories: null,
        }
    }

    componentDidMount() {

        this.setState({setCategory: this.props.getCategory});

       setTimeout(() => //(if (this.state.setCategory !== null)
            {this.props.loadCategory(this.state.categoriesQuery, this.state.setCategory[0])}, 100);
            
            setTimeout(() => //if (this.state.setCategories !== null)
            {this.setState({setCategories: this.props.getCategories})}, 200);
    };

    componentDidUpdate(prevProps) {
        if (this.props.getCategory !== prevProps.getCategory) {
            this.props.loadCategory(this.state.categoriesQuery, this.state.setCategory[0]);
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
            {   !this.state.setCategory ?

                            <>HEADER LOADER</> :                    
                <div className="container category">
                    <div className="category_title">
                        <h2>{this.state.setCategory[1]}</h2>
                    </div>
                    <div className="category_product">
                        {   !this.state.setCategories ?

                                        <>LOADER</> : 

                            this.state.setCategories.map((item, index) =>  
                                <Link style={{ textDecoration: 'none' }} key={index}
                                to={`/product/${item.id}`}>
                                    <ProductCard 
                                    item = {item}
                                    key = {item.id}
                                    />
                                </Link>
                            )
                        }
                    </div>
                </div> }
            </>
        )
    }
}

const mapStateToProps = state => ({
    getCategories: state.reduxСategories.data,
    getCategory: state.reduxCategory.data,
    loading: state.reduxСategories.loading,
    error: state.reduxСategories.error
 });

const mapDispatchToProps = {
    loadCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);
