import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID zHco53vEpdXPyhH354oOUbX95nebxuBkReJzLFv_I6M'
    }
})