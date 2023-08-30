const app = getApp()
const db = wx.cloud.database()

Page({
  data: {
    active: 0,
    dataList: [],
    list3: [],
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    zan: {
      value: 1,
    },
    openid: '',

  },


  onChange(event) {
    this.setData({
      value: event.detail,
    });
  },
  onChange(event) {
    this.setData({
      active: event.detail
    });
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
        console.log("openid存入data已完毕...", that.data.openid)

      }

    })


  },

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.getOpenid()
    this.getImage()
  },

  onShow: function (event) {
    this.message()
  },

  laqu: function (info, num) {
    var size = this.data.dataList.length
    if (size != 0) {
      this.data.dataList.skip(size)
    }
    db.collection('discussion').where({
      _id: info
    }).get().then((res) => {
      var old_data = this.data.dataList
      var new__data = res.data.concat(old_data);

      this.setData({
        dataList: new__data
      })
      console.log(this.data.dataList, '7878787...........................')
    });
  },

  message1: function (list, start) {

    var a = 0;
    for (a = 0; a < list.length; a++) {
      this.laqu(list[a], a)
    }
  },


  message: function (start = 0) {
    wx.reLaunch({
      url: 'pages/collect/collect',
    })
    db.collection('Subscrib').where({
      _openid: this.data.openid,
      state: true
    }).get().then((res) => {
      var list1 = res.data
      var list = [list1.length]
      for (var i = 0; i < list1.length; i++) {
        list[i] = list1[i].id
      }
      console.log('substate0:................', list)
      this.message1(list, 0)
    })


  },




  getImage: function () { //相框

    const windowWidth = wx.getSystemInfoSync().windowWidth;
    const image = windowWidth - 70;
    const threeimage = (image - 2.5) / 3;
    const twoimage = (image - 2.5) / 2
    this.setData({
      TT: threeimage,
      two: twoimage
    })
  },





  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  block: function () {
    wx.navigateTo({
      url: '/pages/MyLike/MyLike',
    })
  },
  next: function () {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

})