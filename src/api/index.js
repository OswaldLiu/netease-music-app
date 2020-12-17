import axios from 'axios'

const Host = 'http://120.79.162.149:3000'

export function getRecommendSongCollection() {
    const url = Host + '/personalized';
    // console.log("Get:",url);
    return axios.get(url);
}

export function getSongCollectionDetails(id){
    const url = Host + '/playlist/detail?id=' + id;
    // console.log("Get:",url);
    return axios.get(url);
}

export function getSongDetails(id){
    const url = Host + '/song/detail?ids=' + id;
    // console.log("Get:",url);
    return axios.get(url);
}

export function getSearch(keywords){
    const url = Host + '/search?keywords=' + keywords;
    return axios.get(url);
}
