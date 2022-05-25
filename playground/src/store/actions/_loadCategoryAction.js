import axios from "axios";

function getCategoryList() {
    
    return (dispatch) => {
        axios.get('http://localhost:3004/categiries').then ((res) => {
            dispatch(setCategoryData(res.data))
        });
        
    }
}


function setCategoryData(load) {

    return {
        type: "SET_CATEGORY_DATA",
        payload: load
    }
}

export default getCategoryList