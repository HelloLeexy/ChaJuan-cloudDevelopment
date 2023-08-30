// pages/index/index.js
var that;
var db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    isHide: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    /*wx.getStorage({
      key: 'userInfo',
      success(res) {
        console.log('get Storage Success', JSON.parse(res.data))
        that.setData({
          userInfo: JSON.parse(res.data)
        })
        wx.reLaunch({
          url: '/pages/index/index',
        })
      }
    })*/

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.cloud.callFunction({
      name: 'login',
      data: {}
    }).then((res) => {
      //console.log(res);
      db.collection('user').where({
        _openid: res.result.openid
      }).get().then((res) => {
        if (res.data.length) {
          wx.reLaunch({
            url: '/pages/index/index',
          })
        }
      });

    });
    
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

  getUserInfo(e) {
    wx.getUserProfile({
      desc: '正在获取',
      success: (res) => {
        console.log('获取成功: ', res)
        that.addUserInfo(res.userInfo)
        wx.setStorage({
          key: 'userInfo',
          data: JSON.stringify(res.userInfo),
          success(res) {
            console.log('set storage success:', res)
            //that.addUserInfo(res.userInfo);
          }
        })
        wx.switchTab({
          url: "/pages/index/index",
        })
      },

      fail: function (err) {
        console.log("获取失败: ", err)
      }
    })

  },

  addUserInfo(userInfo) {
    db.collection('user').add({
        data: {
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl,
          gender: userInfo.gender,
          time: new Date()
        }
      })
      .then(res => {
        console.log('Add user success', res)
      })
      .catch(console.error)
  },


})