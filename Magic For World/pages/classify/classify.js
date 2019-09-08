Page({
  data: {
    currentTab: 0,  //对应样式变化
    scrollTop: 0,  //用作跳转后右侧视图回到顶部
    screenArray: ['商场同款','早秋新品','明星同款','新品到店','线上专享','waitao','上装','连衣裙','半身裙','风衣','T恤','卫衣','牛仔裤'], //左侧导航栏内容
    screenId: "",  
    value:'',   //后台查询需要的字段
    childrenArray: [], //右侧内容
  },
  bindSearch(event) {
    // 动态改变搜索内容
    this.setData({ value:event.detail});
  },
  onLoad: function (options) {
    var that = this;
    //获得分类筛选
    wx.request({
      url: 'http://localhost:3000/api/goods',
      header: {
        "content-type": "json"
      },
      success: (res) => {
        console.log(res.data.data)
        that.setData({ childrenArray: res.data.data })
      }
    });
  },
  navbarTap: function (e) {
    var that = this;
    console.log(e);
    this.setData({
      currentTab: e.currentTarget.id,   //按钮CSS变化
      screenId: e.currentTarget.id,
      scrollTop: 0,   //切换导航后，控制右侧滚动视图回到顶部
    })
    //刷新右侧内容的数据
    var screenId = parseInt(e.currentTarget.id);
    // console.log(typeof screenId);
    switch(screenId){
      case 0:
        wx.request({
          url: 'http://localhost:3000/api/goods',
          header: {
            "content-type": "json"
          },
          success: (res) => {
            console.log(res.data.data)
            this.setData({ childrenArray: res.data.data })
          }
        });
        break;
      case 1:
        wx.request({
          url: 'http://localhost:3000/api/goods',
          header: {
            "content-type": "json"
          },
          success: (res) => {
            // console.log(res.data.data)
            this.setData({ childrenArray: res.data.data })
          }
        });
        break;
      case 2:
        wx.request({
          url: 'http://localhost:3000/api/goods',
          header: {
            "content-type": "json"
          },
          success: (res) => {
            // console.log(res.data.data)
            this.setData({ childrenArray: res.data.data })
          }
        });
        break;
      case 3:
        wx.request({
          url: 'http://localhost:3000/api/goods',
          header: {
            "content-type": "json"
          },
          success: (res) => {
            // console.log(res.data.data)
            this.setData({ childrenArray: res.data.data })
          }
        });
        break;
      case 4:
        wx.request({
          url: 'http://localhost:3000/api/goods',
          header: {
            "content-type": "json"
          },
          success: (res) => {
            // console.log(res.data.data)
            this.setData({ childrenArray: res.data.data })
          }
        });
        break;
      case 5:
        wx.request({
          url: 'http://localhost:3000/api/goods',
          header: {
            "content-type": "json"
          },
          success: (res) => {
            // console.log(res.data.data)
            this.setData({ childrenArray: res.data.data })
          }
        });
        break;
      case 6:
        wx.request({
          url: 'http://localhost:3000/api/goods',
          header: {
            "content-type": "json"
          },
          success: (res) => {
            // console.log(res.data.data)
            this.setData({ childrenArray: res.data.data })
          }
        });
        break;
      case 7:
        wx.request({
          url: 'http://localhost:3000/api/goods',
          header: {
            "content-type": "json"
          },
          success: (res) => {
            // console.log(res.data.data)
            this.setData({ childrenArray: res.data.data })
          }
        });
        break;
      case 8:
        wx.request({
          url: 'http://localhost:3000/api/goods',
          header: {
            "content-type": "json"
          },
          success: (res) => {
            // console.log(res.data.data)
            this.setData({ childrenArray: res.data.data })
          }
        });
        break;
      case 9:
        wx.request({
          url: 'http://localhost:3000/api/goods',
          header: {
            "content-type": "json"
          },
          success: (res) => {
            // console.log(res.data.data)
            this.setData({ childrenArray: res.data.data })
          }
        });
        break;
      case 10:
        wx.request({
          url: 'http://localhost:3000/api/goods',
          header: {
            "content-type": "json"
          },
          success: (res) => {
            // console.log(res.data.data)
            this.setData({ childrenArray: res.data.data })
          }
        });
        break;
      case 11:
        wx.request({
          url: 'http://localhost:3000/api/goods',
          header: {
            "content-type": "json"
          },
          success: (res) => {
            // console.log(res.data.data)
            this.setData({ childrenArray: res.data.data })
          }
        });
        break;
      case 12:
        wx.request({
          url: 'http://localhost:3000/api/goods',
          header: {
            "content-type": "json"
          },
          success: (res) => {
            // console.log(res.data.data)
            this.setData({ childrenArray: res.data.data })
          }
        });
        break;
    }
  },
})



// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     value:''
//   },

//   bindSearch(event){
//     // console.log(event.detail);
//     this.setData({value:event.detail});
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
    
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })