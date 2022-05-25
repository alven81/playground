import axios from "axios";

function categoriesQuery(querySelector)  {
    console.log("WORK!!")
    return  (dispatch) => {
        axios({
            url: `http://localhost:4000/`,
            method: "POST",
            data: {
                query: querySelector
            }
        })
        .then(response => response.data.data)
        .then(response => dispatch(getCategoriesQuery(response.categories[0].products)), () => {
            //console.log("action: ", response.categories[0].products);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

function getCategoriesQuery(load) {
    return {
        type: "GET_CATEGORIES_QUERY",
        payload: load
    }
}

export {categoriesQuery};

