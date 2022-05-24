import '../App.scss';
import React from "react";
import axios from "axios";

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
            }`,
            res: []
        }
    }

    componentDidMount() {
        axios({
            url: this.state.endpoint,
            method: "POST",
            data: {
                query: this.state.CATEGORIES_QUERY
            }
        })
        .then(response => response.data.data)
        .then(response => this.setState({res: response.categories[0].products}, () => {
            console.log(this.state.res)})
        )       
    }
        
    render() {
        return (
            <div className="container">
                Category
                {   !this.state.res ?

                        <>not loaded</> : 

                        //this.state.res.map(item => <div>{item.description}</div>)
                        this.state.res.map(item => <div className="question-text" dangerouslySetInnerHTML={{__html: item.description}}/>)

                }
            </div> 
        )
    }
}

export default Category