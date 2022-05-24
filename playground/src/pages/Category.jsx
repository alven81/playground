import '../App.scss';
import React from "react";
import { useQuery } from "react-query";
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
                categories  {
                    products  {
                        id
                        name
                        gallery
                        description
                        category
                        }
                    }
            }`,
            res: null
        }
    }

    componentDidMount() {
        
        //const { data, isLoading, error } = useQuery("launches", () => {
        //return
          
            console.log(axios({
            url: this.state.endpoint,
            method: "POST",
            data: {
                query: this.state.CATEGORIES_QUERY
                
                }
            })
            .then(response => response.data.data))
            
        //});

        //if (isLoading) return "Loading...";
        //if (error) return <pre>{error.message}</pre>;
    }


    render() {
        return (
            <div className="container">
                Category
            </div> 
        )
    }
}

export default Category