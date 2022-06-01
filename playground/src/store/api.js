import axios from "axios";

const API_BASE_ADDRESS = "http://localhost:4000/";

export default class Api {
    static getData(query) {
        const uri = API_BASE_ADDRESS;

        return axios({
            url: uri,
            method: "POST",
            data: {
                query: query,
            },
        });
    }
}
