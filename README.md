# vue-music

> 利用网易音乐的接口做了一个小小的电台。利用vue + vue-simple-webpack。由于音乐播放是使用原生audio可能会存在一些兼容问题。
>
> 本项目使用网易音乐非公开接口(据说是加密后被各路大神解出来的)，请勿恶意爬取数据（有人恶意爬取收到网易的律师函了）。



## 效果预览

目前已经实现了基本播放功能(但有一些BUG)，

计划实现：歌词同步，搜索，本地存储播放列表，接口切换等功能

 ![vue-datepicker](https://github.com/2ue/vue-music/blob/master/src/assets/vue-music.gif)

## 运行

``` bash
# 安装依赖
npm install

# 本地启动 > localhost:8080
npm run dev
```

## 已知BUG及优化(To Do)

- BUG
  - 播放进度计算存在误差
  - 在某些时候歌曲播放完成后无法自动切换到下一首
  - 当歌曲资源出错时，无法自动切换
  - 计算时间出现NaN
- 优化
  - 保持原始数据的正确性，在其副本上计算
  - 跨域请求目前使用的webpack-dev-server Proxy 代理，后期会改成axios等方式跨域（axios按照官方配置跨域一直无效[链接](https://github.com/mzabriskie/axios/issues/335)，求老司机带带）

## 接口

接口存放到musicAPI.js，具体的细节其中有详细注释
目前调用的是用户歌单的接口

## 参考

- [HTML aduio](http://www.w3school.com.cn/jsref/dom_obj_audio.asp)
- [webpack-dev-server Proxy ](https://segmentfault.com/q/1010000004881097)
- [axios](https://github.com/mzabriskie/axios)

