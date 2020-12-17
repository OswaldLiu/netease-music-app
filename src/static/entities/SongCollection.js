export default class SongCollection {
    constructor(id, name, picUrl, playCount, trackCount) {
        this.id = id;
        this.name = name;
        this.picUrl = picUrl;
        this.playCount = playCount;
        this.trackCount = trackCount;
    }
}

export function createCollectionList(response) {
    let result = response.data.result;
    // console.log(result);
    let cltnList = [];
    for (let i=0;i<result.length;i++){
        let element = result[i];
        cltnList.push(new SongCollection(element.id, element.name,
        element.picUrl, element.playCount, element.trackCount));
    }
    return cltnList;
}