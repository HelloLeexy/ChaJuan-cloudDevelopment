// miniprogram/pages/MyLike/MyLike.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{Moudle:"CPT201",testTime:"2020",test:"期末",url:"cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/042417280411_01.2017-2018_ACF102_F_S2_3.Png"}],
    viewTime:{}



  },

  /*
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

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

  },

  1: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/042417280411_01.2017-2018_ACF102_F_S2_1.Png"]
    })
  },
  2: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/042417280411_01.2017-2018_ACF102_F_S2_2.Png"]
    })
  },
  3: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/042417280411_01.2017-2018_ACF102_F_S2_3.Png"]
    })
  },
  4: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/042417280411_01.2017-2018_ACF102_F_S2_4.Png"]
    })
  },
  5: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/042417280411_01.2017-2018_ACF102_F_S2_5.Png"]
    })
  },
  6: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/042417280411_01.2017-2018_ACF102_F_S2_6.Png"]
    })
  },

  // 1: function () {
  //   const preUrl = "cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/042417280411_01.2017-2018_ACF102_F_S2_"
  //   let count = 0
  //   for (var i = 0; i < 6; i++) {
  //     count += 1
  //     const url = preUrl + count + ".png"
  //     wx.previewImage({
  //       urls: [url]
  //     })
  //   };
  // },

  ddd: function (event) {
    that.setData({
      autoFocus: true
    })
  },

})