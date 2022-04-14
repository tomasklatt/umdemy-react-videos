import axios from 'axios';

const KEY = 'AIzaSyDN5wij-GskMrl0QJDTn0teVS64s28r4Hg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});