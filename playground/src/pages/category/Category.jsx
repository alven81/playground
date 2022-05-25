import '../../App.scss';
import React from "react";
import ProductCard from './ProductCard';
import {loadCategory} from "../../store/actions/actions";
import { connect } from 'react-redux';

class Category extends React.Component {
   
    componentDidMount() {
        this.props.loadCategory();
    };
        
    render() {
        if (this.props.loading) {
            return <div>Loading</div>
        }
        if (this.props.error) {
            return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
        }
        return (
            <div className="container category">
                {   !this.props.data ?

                        <>LOADER</> : 

                          this.props.data.map((item, index) =>  <ProductCard 
                            item = {item} 
                            key = {item.id} 
                            />) 
                            /* this.props.data.map(item => <div className="question-text" dangerouslySetInnerHTML={{__html: item.description}}/>) */

                }
            </div> 
        )
    }
}

const mapStateToProps = state => ({
    data: state.reduxThunk.data,
    loading: state.reduxThunk.loading,
    error: state.reduxThunk.error,
});

const mapDispatchToProps = {
    loadCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);
