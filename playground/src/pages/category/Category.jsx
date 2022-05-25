import '../../App.scss';
import React from "react";
import axios from "axios";
import ProductCard from './ProductCard';
import { categoriesQuery } from '../../store/actions/categoriesAction';
import { connect } from 'react-redux';

class Category extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: "",
            error: "",
            endpoint: "http://localhost:4000/",
            CATEGORIES_QUERY: `
            {
                categories {
                    products  {
                        id
                        name
                        gallery
                        description
                        category
                        }
                    }
            }`
            //res: [],
           
        }
    }

    //const dispatch = useDispatch();

    componentDidMount() {
        this.props.categoriesQuery(this.state.CATEGORIES_QUERY);

        // axios({
        //     url: this.state.endpoint,
        //     method: "POST",
        //     data: {
        //         query: this.state.CATEGORIES_QUERY
        //     }
        // })
        // .then(response => response.data.data)
        // // .then(response => this.setState({res: response.categories[0].products}, () => {
        // //     console.log(this.state.res)})
        // .then(response => this.setState({res: response.categories[0].products}, () => {
        // console.log(this.state.res)})
        // )       
    };
        
    render() {
        return (
            <div className="container category">
                Category
                {   !this.state.res ?

                        <>not loaded</> : 
                        
                        this.state.res.map((item, index) => <ProductCard 
                            item = {item} 
                            key={index} 
                            id = {item.id}/>)
                        //this.state.res.map(item => <div className="question-text" dangerouslySetInnerHTML={{__html: item.description}}/>)

                }
            </div> 
        )
    }
}

const mapStateToProps = state => ({
    //searchResult: loadSearch
    // loading: state.reduxThunk.loading,
    // error: state.reduxThunk.error,
});

const mapDispatchToProps = {
    categoriesQuery
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);

