import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer wO5vfdFa_ZltG4gdqHTMe3Xug75T3OBKvgCmGGbGHLC5I4p4kU7Tj0g_gqW4BRPe7KtfAHjeCEGKHLYWLO1kan2ozp6u3Giwn13n-1d4ZnhvbUAl3k8HYnsQ64M7YnYx'
    }
});