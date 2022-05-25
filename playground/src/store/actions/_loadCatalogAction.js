import axios from "axios";

function getCatalogData() {
    
    return (dispatch) => {
        axios.get('http://localhost:3004/products').then ((res) => {
            dispatch(setCatalogData(res.data))
        });
        
    }
}


function setCatalogData(load) {

    return {
        type: "SET_CATALOG_DATA",
        payload: load
    }
}

export default getCatalogData