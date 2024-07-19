import axios from "axios";

export default axios.create({
    baseURL: 'https://n2zs4xbtsd.execute-api.us-east-1.amazonaws.com/prod',
    params: {}
})