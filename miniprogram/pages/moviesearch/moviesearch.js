// pages/moviesearch/moviesearch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filmName:'',
    length: -1,
    movie:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindInputName: function (e) {
    this.data.filmName = e.detail.value
  },

  bindSearch: function (e) {
    console.log(this.data.filmName)
    wx.cloud.callFunction({
      name: 'moviesfun',
      data: {
        filmName: this.data.filmName
      },
      success:res=>{
        console.log(res.result.data)
        if(res.result.data.length == 0) {
          this.setData({
            length: 0
          });
          return false;
        }
        else {
          this.setData({
            length: res.result.data.length,
            movie: res.result.data[0]
          })
        }
      }
    })
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