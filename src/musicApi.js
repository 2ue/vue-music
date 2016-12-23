/*
* @Author: Administrator
* @Date:   2016-12-12 12:35:38
* @Last Modified by:   Administrator
* @Last Modified time: 2016-12-19 13:34:04
*/

'use strict';
//MUSIC_LIST_API
//URL: http://moonlib.com/606.html
const baseUrl = '/API/';
// const baseUrl = 'https://music.163.com/api/';
//网易音乐
const API_WYYY = {
    base: baseUrl,
    playlistDetail: baseUrl + 'playlist/detail', //歌单 id=37880978&updateTime=-1
    userPlayList: 'user/playlist', //用户歌单 uid=&limit&offset=
    // artistAlbums: function (artistID) {//歌手专辑 id=166009&offset=0&total=true&limit=5
    //     return baseUrl + 'artist/albums/' + artistID;
    // },
    artistAlbums: baseUrl + 'artist/albums/',
    search: baseUrl + 'search/pc', //搜索
    songDetail: baseUrl + 'song/detail/', //歌曲信息 id=28377211&ids=%5B28377211%5D
    Albums:  function (albumsID) { //专辑信息 ext=true&id=2457012&offset=0&total=true&limit=10
        return baseUrl + 'albums/' + albumsID;
    },
    songLrc: baseUrl + 'song/lyric',  //歌词  os=pc&id=93920&lv=-1&kv=-1&tv=-1
    mv: baseUrl + 'mv/detail',  //MV  id=319104&type=mp4
    songsRanker: {
        0: ['云音乐新歌榜', 'discover/toplist?id=3779629'],
        1: ['云音乐热歌榜', '/discover/toplist?id=3778678'],
        2: ['网易原创歌曲榜', '/discover/toplist?id=2884035'],
        3: ['云音乐飙升榜', '/discover/toplist?id=19723756'],
        4: ['云音乐电音榜', '/discover/toplist?id=10520166'],
        5: ['UK排行榜周榜', '/discover/toplist?id=180106'],
        6: ['美国Billboard周榜', '/discover/toplist?id=60198'],
        7: ['KTV嗨榜', '/discover/toplist?id=21845217'],
        8: ['iTunes榜', '/discover/toplist?id=11641012'],
        9: ['Hit FM Top榜', '/discover/toplist?id=120001'],
        10: ['日本Oricon周榜', '/discover/toplist?id=60131'],
        11: ['韩国Melon排行榜周榜', '/discover/toplist?id=3733003'],
        12: ['韩国Mnet排行榜周榜', '/discover/toplist?id=60255'],
        13: ['韩国Melon原声周榜', '/discover/toplist?id=46772709'],
        14: ['中国TOP排行榜(港台榜)', '/discover/toplist?id=112504'],
        15: ['中国TOP排行榜(内地榜)', '/discover/toplist?id=64016'],
        16: ['香港电台中文歌曲龙虎榜', '/discover/toplist?id=10169002'],
        17: ['华语金曲榜', '/discover/toplist?id=4395559'],
        18: ['中国嘻哈榜', '/discover/toplist?id=1899724'],
        19: ['法国 NRJ EuroHot 30周榜', '/discover/toplist?id=27135204'],
        20: ['台湾Hito排行榜', '/discover/toplist?id=112463'],
        21: ['Beatport全球电子舞曲榜', '/discover/toplist?id=3812895']
    }
}

module.exports = API_WYYY;