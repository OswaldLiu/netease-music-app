const state = {
    //SongCollection View的歌单信息
    cltnDetails: {
        id: 0,
        picUrl: '',
        playCount: 0,
        trackCount: 0,
    },

    //当前播放歌曲的信息
    songDetails: {
        id: 0,
        name: '',
        albumId: 0,
        album: "", //name
        albumPicUrl: "",
        artists: "", //name
        artistsIdList: [],
    },

    //歌曲列表,里面是song实例
    songList: [],

    //播放器全屏
    isFullScreen: true,

    //播放状态
    playing: false,
}

export default state