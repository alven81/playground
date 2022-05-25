import axios from "axios";

const API_BASE_ADDRESS = 'http://localhost:4000/';
const categoriesQuery = `
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

export default class Api {
    static getUsers() {
        const uri = API_BASE_ADDRESS;

        return axios({
            url: uri, 
            method: 'POST',
            data: {
                query: categoriesQuery
                    }
        })
    }
}
      