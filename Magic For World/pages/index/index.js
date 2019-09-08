//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,

    imglist: []

  },
  onClick(event) {
    // console.log(event)
    switch (event.detail.index){
      case 0:
        wx.navigateTo({
          url: '../member/member'
        });
        break;
      case 1:
        wx.navigateTo({
          url: '../classify/classify'
        });
        break;
      case 2:
        wx.navigateTo({
          url: '../shopcart/shopcart'
        });
        break;
      case 3:
        wx.navigateTo({
          url: '../api/api'
        });
        break;
    };
  },

  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function (options) {

    // 数据请求
    wx.request({
      url: 'http://localhost:3000/api/banner',
      header: {
        "content-type": "json"
      },
      success: (res) => {
        // console.log(res.data.data)
        this.setData({ imgUrls: res.data.data })
      }
    });
    wx.request({
      url: 'http://localhost:3000/api/image',
      // url: 'https://douban.uieee.com/v2/movie/top250',
      // data: { start: 0, count: 1 },
      header: {
        "content-type": "json"
      },
      success: (res) => {
        this.setData({ imglist: res.data.data })
      }
    });

    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
});

