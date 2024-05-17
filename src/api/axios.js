import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'dfb151ab49c8a7f8086824603ffd4410',
        language: 'ko-KR',
    },
});

export default instance;
