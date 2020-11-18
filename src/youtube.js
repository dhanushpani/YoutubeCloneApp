import axios from "axios";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params : {
         part : 'snippet',
         maxResults : 5,
         key : 'AIzaSyCQq9U7dchgg8pCXyIu_vX2M3W30gB6gQY'
    }
});