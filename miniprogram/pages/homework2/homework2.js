// pages/homework2/homework2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: []
  },

  showBigpicture:function(e) {
    var id=e.currentTarget.id
    wx.navigateTo({
      url: '../bigimage/bigimage?id='+id,
    })
  },

  chooseimage: function () {
    var that = this
    const db = wx.cloud.database()
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log(res)
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        var timestamp = new Date().getTime()
        wx.cloud.uploadFile({
          cloudPath: 'image/' + timestamp + '.jpg',
          filePath: tempFilePaths[0], // 文件路径
          success: res => {
            // get resource ID
            console.log(res.fileID)
            db.collection('image').add({
              data: {
                url: res.fileID
              }
            })
            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 2000
            })
            this.onLoad()
          },
          fail: err => {
            // handle error
          }
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    db.collection('image').get({
      success: res => {
        console.log(res.data)
        this.setData({
          image: res.data
        })
      },
      fail: console.error
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
    this.onLoad()
    wx.stopPullDownRefresh()
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