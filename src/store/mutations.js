export default {
    deliverCltnDetails(state, cltnDetails) {
        //更新对象state要更新引用地址
        state.cltnDetails = cltnDetails;
        console.log('cltnDetails', cltnDetails);
    },
    deliverSongDetails(state, songDetails) {
        let buffer = Object.assign({},songDetails);
        state.songDetails = buffer;
        console.log('songDetails', state.songDetails);
    },
    songListAppend(state, song) {
        for (let i = 0; i < state.songList.length; i++) {
            if (state.songList[i].id === song.id) {
                state.songList.splice(i, 1);
                break;
            }
        }
        state.songList.unshift(song);
        console.log('songList', state.songList);
    },
    togglePlayerMode(state,isFullScreen){
        //切换播放器全屏或浮窗模式
        state.isFullScreen = isFullScreen;
        console.log('isFullScreen', state.isFullScreen);
    },
    togglePlayingStatus(state){
        //切换播放器播放状态
        state.playing = !(state.playing);
        console.log("isPlaying",state.playing);
    }
}