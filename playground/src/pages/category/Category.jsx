import '../../App.scss';
import React from "react";
import ProductCard from './ProductCard';
import {loadCategory} from "../../store/actions/actions";
import { connect } from 'react-redux';

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
            idCategory: 2
        }
    }

    componentDidMount() {
        this.props.loadCategory(this.state.categoriesQuery, this.state.idCategory);
    };
        
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
                        <h2>Category name</h2>
                    </div>
                    <div className="category_product">
                        {   !this.props.data ?

                            <>LOADER</> :

                            this.props.data.map((item, index) =>  <ProductCard 
                                item = {item} 
                                key = {item.id}
                            />)
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
});

const mapDispatchToProps = {
    loadCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);

