<template>
    <div class="musicBox">
        <div class="musicInfo">
            <span class="musicImgBox"><img :src="songInfo.album.picUrl" class="musicImg"></span>
            <div class="musicText">
                <p>歌名：<span>{{ songInfo.name }}</span></p>
                <p>歌手：
                    <span v-for="(item,index) in songInfo.artists">{{ item.name }}</span>
                </p>
            </div>
        </div>
        <div class="musicBtn f_disselected">
            <p class="progress-line" :style="{'width': progressNum}"><span :class="{'show':progressNum}"></span></p>
            <audio :src="songInfo.mp3Url" id="songAudio"></audio>
            <span class="iconfont icon-step-backward" @click="preSong(true)" title="播放上一首"></span>
            <span class="iconfont icon-backward" @click="changeTime(true)" title="快进5秒"></span>
            <span class="iconfont" :class="{'icon-play': !isPlay, 'icon-pause': isPlay}" @click="playBtn()" :title="!isPlay ? '播放' : '暂停'"></span>
            <span class="iconfont icon-forward" @click="changeTime(false)" title="回退五秒"></span>
            <span class="iconfont icon-step-forward" @click="nxtSong(true)" title="播放下一首"></span>
            <span class="iconfont icon-loading-circle" @click="randomSong()" title="随机一首"></span>
            <span class="">{{ formatCurrentTime }}&nbsp;/&nbsp;{{ songInfo.duration }}</span>
        </div>
    </div>
</template>

<script>
import howler from 'howler';
import axios from 'axios';
import API from "./musicApi.js";
export default {
  name: 'app',
  data () {
    return {
        ele: '',
        currentSongNum: -1,
        currentTime: '0',
        formatCurrentTime: '00:00',
        progressNum: 0,
        isPlay: false,
        songInfo: {
            album:'',
            name: '',
            mp3Url:  '',
            duration: '', //time
            artists: {},
            hMusic: {}
        },
        songsList: [],
        errorSongList: []
    }
  },
  beforeCreate: function(){
    var _self = this;
    getUserLoveSongsList(_self)
  },
  watch:{
    currentTime: function () {
        var _self = this;

        _self.formatCurrentTime = formatNum (_self.currentTime * 1000);
        _self.progressNum = countProgressNum (_self);
        // console.log(_self.progressNum)
        if(_self.progressNum.replace('%','') >= 100) {
            setTimeout(function () {
                console.log('nextsong')
                _self.nxtSong();
            },200);
        }
    },
    isPlay: function  () {
        var _self = this;
        var ele = document.getElementById('songAudio');
        var timer = '';
        if(_self.isPlay) {
            timer = setInterval(function () {
                _self.currentTime = ele.currentTime;
            },500)
        }else {
            if(!!timer) clearInterval(timer);
            if(ele.ended) _self.currentTime = (+_self.songInfo.duration.split(':')[1] + _self.songInfo.duration.split(':')[0] * 60) / 100;
            console.log(_self.currentTime)
        }

    },
    songInfo: function () {
        var _self = this;
        var time = _self.songInfo.duration;
        _self.songInfo.duration = formatNum (time);
    },
  },
  methods: {
    changeSong: function () {
        var _self = this;
        getSongInfo (_self,26508242);
    },
    randomSong: function  () {
        var _self = this;
        _self.currentSongNum = RandomSong('',_self.songsList.length); //随机一首歌曲
        _self.songInfo = _self.songsList[_self.currentSongNum];
        _self.$nextTick(function () {
            _self.playBtn(true);
        })
    },
    nxtSong: function (isLoop) {//定义一个参数判断是否循环切换
        var _self = this;
        var isLast = _self.currentSongNum == _self.songsList.length - 1; //是否为最后一首
        isLoop = !!isLoop ? true : false;
        _self.currentSongNum = isLast && isLoop ? 0 : _self.currentSongNum + 1;
        _self.songInfo = _self.songsList[_self.currentSongNum];
        _self.$nextTick(function () {
            _self.playBtn(true);
        })
    },
    preSong: function (isLoop) {
        var _self = this;
        var isFirst = _self.currentSongNum == 0; //是否为第一首
        isLoop = !!isLoop ? true : false;
        _self.currentSongNum = isFirst && isLoop ? _self.songsList.length - 1 : _self.currentSongNum - 1;
        _self.songInfo = _self.songsList[_self.currentSongNum];
        _self.$nextTick(function () {
            _self.playBtn(true);
        })
    },
    getTag: function (event) {
        // console.log(event.innerHtml())
        // http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp  audioAPI
        var songEle = document.getElementById('songAudio');
        console.log(songEle.networkState) //网络状态 1表示初始化并准备完成，其他为错误
        console.log(songEle.currentTime) //当前播放的时间，以秒计
        console.log(songEle.duration) //当前歌曲时间，以秒计
        console.log(songEle.error) //错误状态，为null时表示正常，不为空则有错误
        console.log(songEle.ended) //播放结束
        console.log(songEle.volume) //音量
    },
    changeTime: function (isPre) {
        var _self = this;
        var ele = document.getElementById('songAudio')
        ele.currentTime = !!isPre ? ele.currentTime - 5 : ele.currentTime + 5;
        _self.currentTime = ele.currentTime
    },
    playBtn: function (toPlay) {
        var _self = this;
        var ele = document.getElementById('songAudio');
        if(!!ele.error) {
            return;
        };
        if(!!ele.paused || !!toPlay) {
            console.log(ele.networkState)
            ele.play();
            _self.isPlay = true;
            return;
        };
        _self.isPlay = false;
        ele.pause();

    }
  }
};


////////////////////////////////
function getSongInfo (_self, songId) {//获得歌曲信息
    songId = !!songId ? songId : 32507038;
    axios.get(API.songDetail, {
        timeout: 10000,
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
            id: songId,
            ids: '[' + songId + ']'
        }
    })
    .then(function(response) {
        // console.log(response)
        if(response.status != 200 || !!!response.data.songs || response.data.songs.length == 0) return;
        var thisSong = response.data.songs[0];
        var songsInfos = {
            name: thisSong.name || '未知歌曲',
            mp3Url: thisSong.mp3Url || '未知地址',
            id: thisSong.id,
            duration: thisSong.duration,
            artists: thisSong.artists[0] || {},
            hMusic: thisSong.hMusic || {}
        };

        // if(!!isReturnData) return songsInfos;
        _self.songInfo = songsInfos;
    })
};
function getUserLoveSongsList(_self){

    var url = API.playlistDetail;
    axios.get(url, {
        timeout: 10000,
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
            id: 537955585, //userLoveSongList's ID
            updateTime: -1
        }
    })
    .then(function(response) {
        if(response.status != 200 ||
            !!!response.data ||
            response.data.length == 0 ||
            !!!response.data.result ||
            response.data.result.length == 0 ||
            !!!response.data.result.tracks ||
            response.data.result.tracks.length == 0) return;

        _self.songsList = response.data.result.tracks;
        _self.currentSongNum = RandomSong('',134);
        _self.songInfo = response.data.result.tracks[_self.currentSongNum];
        // console.log(_self.songInfo)
    })
};

function RandomSong (type,maxNum) {//从数组中拿出一首歌，单曲[oneSong]，顺序(一次[oneList]/循环[loopList])，随机[random]

    type = !!type ? type : 'random';
    maxNum = !!maxNum ? maxNum : 1000000000;
    var songNum = -1; //-1用于判断是否为单曲循环

    //随机
    switch (type) {
        case 'oneSong':
            songNum = parseInt(Math.random() * maxNum) + 1
            break;
        case 'oneList':
            songNum = parseInt(Math.random() * maxNum) + 1
            break;
        case 'loopList':
            songNum = parseInt(Math.random() * maxNum) + 1
            break;
        case 'random':
            songNum = parseInt(Math.random() * maxNum) + 1
            break;
        default:
            break;
    };
    return songNum;
};
function formatNum (time) {

    if(isNaN(parseInt(time)) || !!!time) return '00:00';

    time = time / 60000
    var minute = parseInt(time).toString();
    var second = Math.round((time - minute) * 60).toString();
    minute = minute.length == 1 ? '0' + minute : minute.length == 0 ? '00' : minute;
    second = second.length == 1 ? '0' + second : second.length == 0 ? '00' : second;
    return minute + ':' + second;
};

function countProgressNum (_self) {//计算播放进度
    var currentTime = _self.currentTime * 100;
    var duration = +_self.songInfo.duration.split(':')[1] + _self.songInfo.duration.split(':')[0] * 60;
    var tmpNum = (currentTime / duration);
    tmpNum = tmpNum < 0 ? 0 : tmpNum > 100 ? 100 :tmpNum;
    return tmpNum + '%';
}


</script>

<style>
@import url('./assets/css/public.css');
@import url('./assets/icon/iconfont.css');

.musicBox{width:800px;background: #f8f8f8;padding: 20px 0;border: 1px solid #EEEDFF;margin: 0 auto;margin-top:100px;}
.musicInfo{padding: 0 67px;padding-bottom: 20px;}
.musicImgBox{display: inline-block;height: 110px;border: 1px solid #E0DFF0;}
.musicImg{width:100px;height: auto;display: inline-block;vertical-align: top;padding: 5px;}
.musicText{display: inline-block;vertical-align: top;margin-left:20px;}
.musicText p{font-size:14px;font-family: 'Microsoft YaHei';padding: 5px 0;color: #333;}
.musicText p span{color: #777;}
.musicBtn{padding-top:20px;text-align: center;position: relative;border-top: 1px solid #EEEDFF;}
.musicBtn span{vertical-align: middle;display: inline-block;}
.musicBox .iconfont{font-size: 26px;margin:0 10px;cursor: pointer;color: #6663A6;}
.musicBox .iconfont:hover{color: #535187;}
.progress-line{position: absolute;height: 5px;background: #6668CC;left: 0;top: -3px;}
.progress-line span.show{position: absolute;height: 11px;width:11px;background: #494BB8;top: -3px;right: -10px;display: inline-block;border-radius: 50%;-moz-box-shadow:2px 2px 5px#d3c998;-webkit-box-shadow:2px 2px 3px#d3c998;box-shadow:2px 2px 3px #d3c998;}
</style>
