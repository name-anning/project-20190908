// pages/shopcart/shopcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1, //读取第几页数据
    size: 10, //每次读取数据的条数
    goods:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.stopPullDownRefresh();//接受下拉刷新
    
    let start = (this.data.page-1) * this.data.size;
    this.setData({page:this.data.page+1});
    wx.request({
      url: 'http://localhost:3000/api/goods',
      data:{
        start:start,
        count:this.data.count
      },
      success: (res) => {
        console.log(res.data.data)
        this.setData({ goods: res.data.data });
        wx.stopPullDownRefresh(); //停止下拉刷新UI
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