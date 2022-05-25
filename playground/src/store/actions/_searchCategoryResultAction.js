import axios from "axios";

function searchCategoryResult(searchText) {
    
    return (dispatch) => {
        axios.get(`http://localhost:3004/products?categoryId=${searchText}`)
        .then((res) => {
            dispatch(getSearchCategoryResult(res.data));
        })
        .catch(function (error) {
            console.log(error);
    });
    }
}

function getSearchCategoryResult(load) {

    return {
        type: "GET_SEARCH_CATEGORY_RESULT",
        payload: load
    }
}

export {searchCategoryResult};

