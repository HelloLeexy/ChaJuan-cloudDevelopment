// pages/history/history.js
const db = wx.cloud.database()
const app = getApp()
var Id
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: "",
    dataList: []

  },

  history: function () {
    db.collection('history').where({
      _openid: this.data.openid
    }).get().then((res) => {
      console.log("这是一次测试", res.data)
      this.setData({
        dataList: res.data.reverse()
      })
      console.log("ababab:", this.data.dataList)
      // this.getOpenid();
      // var openId = this.getOpenid();
    })
  },

  getOpenid: function () {

    var that = this;
    wx.cloud.callFunction({

      name: 'getOpenId',

      complete: res => {

        console.log('openid--', res.result);
        // var oldId = that.data.openId;
        // var newId = oldId.res.result.openid);
        var openid = res.result.openid;
        that.setData({
          openid: openid
        })
        console.log("openid存入data已完毕..." , that.data.openid)
        this.history();
      }

    })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOpenid();
    var openid = this.getOpenid();

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

  },

  go: function (e) {
    console.log(e)

    var index = e.currentTarget.dataset.id;


  },



  // onCookict: function (c_name) {
  //   if (document.cookie.length > 0) {
  //     c_start = document.cookie.indexOf(c_name + "=")
  //     if (c_start != 1) {
  //       c_start = c_start + c_name.length + 1;
  //       c_end = document.cookie.indexOf(",", c_start);
  //       if (c_end == -1) {
  //         c_end = document.cookie.length;
  //       }
  //       return
  //       unescape(document.cookie.substring(c_start, c_end));
  //     }
  //   }
  //   return null
  // },
  // SetCookie: function (c_name, value, expiredays) {





  // },
  // test: function (e) {
  //   Boolean = false
  //   console.log(this.data.lis[0])
  //   console.log(this.data.lis[1])
  //   if (this.data.lis[0] == this.data.lis[1]) {
  //     // console.log(this.data.lis[0])
  //     // console.log(this.data.lis.DDD)
  //     // console.log(this.data.lis)
  //     Boolean = true
  //     console.log(Boolean)
  //   }
  //   else{
  //     console.log(Boolean)
  //   }



  //}


})