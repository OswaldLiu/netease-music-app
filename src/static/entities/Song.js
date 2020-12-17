export default class Song{
    constructor(id,name,albumId,album,albumPicUrl,artists,artistsIdList){
        this.id = id;
        this.name = name;
        this.albumId = albumId
        this.album = album; //name
        this.albumPicUrl = albumPicUrl
        this.artists = artists; //name
        this.artistsIdList = artistsIdList
    }
}

//从歌单请求响应去建立歌曲实例List
export function createSongList(response) {
    let result;
    if (response.data.code!=200) return [];
    if (response.data.result.tracks) result = response.data.result.tracks;
    else if (response.data.result.songs) result = response.data.result.songs;
    // console.log('here',result);
    let songList = [];
    let artists
    let artistsIdList
    for (let i=0;i<result.length;i++){
        let element = result[i];
        artists = "";
        artistsIdList = [];
        for (let j=0;j<element.artists.length;j++){
            artists += element.artists[j].name + "/";
            artistsIdList.push(element.artists[j].id)
        }

        artists = artists.substring(0,artists.length-1);
        songList.push(new Song(element.id, element.name,
            element.album.id, element.album.name, element.album.picUrl, artists, artistsIdList));
    }
    return songList;
}

export function getCollectionCover(response){
    return response.data.result.coverImgUrl
}

