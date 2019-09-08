Page({
  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "../../images/mark.png",
      id: 0,
      latitude: 31.23037,
      longitude: 121.4737,
      speed:0,
      accuracy:0,
      width: 20,
      height: 20
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onShow();
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      scope: 'scope.userLocation',
      success: function (res) {
        console.log(res);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },

  openConfirm: function () {
    wx.showModal({
      content: '检测到您没打开定位权限，是否去设置打开？',
      confirmText: "确认",
      cancelText: "取消",
      success: function (res) {
        console.log(res);
        //点击“确认”时打开设置页面
        if (res.confirm) {
          console.log('用户点击确认')
          wx.openSetting({
            success: (res) => { }
          })
        } else {
          console.log('用户点击取消');
          wx.switchTab({
            url: '../index/index'
          })
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //判断是否获得了用户地理位置授权
    wx.getSetting({
      success: (res) => {
        if (!res.authSetting['scope.userLocation']) {
        this.openConfirm()
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  }
})
