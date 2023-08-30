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

  showDiscussionList: function () {
    // db.collection('discussion').where({
    //   _openid: this.data.openid
    // })

    db.collection('discussion').get().then((res) => {
      console.log("这是一次测试", res.data)
      this.setData({
        dataList: res.data.reverse()
      })
      console.log("ababab:", this.data.dataList)
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
        this.showDiscussionList();
      }
    })
  },

  delete: function (e) {
    console.log(e)
    var discussionID = e.currentTarget.dataset.discussion_id
    console.log("This _id is " + discussionID)
    if (discussionID) {
      db.collection('discussion').doc(discussionID).remove({
        success: res => {
          wx.showToast({
            title: '删除成功',
          })
          wx.redirectTo({
            url: '/pages/admin/admin',
          })
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '删除失败',
          })
          console.error('[数据库] [删除记录] 失败：', err)
        }
      })
    } else {
      wx.showToast({
        title: '无记录可删',
      })
    }
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


})