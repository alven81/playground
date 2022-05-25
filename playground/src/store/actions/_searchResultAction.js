import axios from "axios";

function  searchResult(searchText)  {
    
    return  (dispatch) => {
        
        axios.get(`http://localhost:3004/products?q=${searchText}`)
        .then((res) => {
            dispatch(getSearchResult(res.data));
            console.log(res.data);
        })
        .catch(function (error) {
            console.log(error);
    });
    }
}

function getSearchResult(load) {

    return {
        type: "GET_SEARCH_RESULT",
        payload: load
    }
}

export {searchResult};

