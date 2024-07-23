import axios from "axios";

export default axios.create({
    baseURL: 'https://d460h8gf70.execute-api.us-east-1.amazonaws.com/prod',
    params: {}
})