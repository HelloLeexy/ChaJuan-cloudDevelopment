// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    active: 0,
    image:[ 1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },


  data: {
    zan:{
      value: 1,
    },
    handleQuestionTap:function(){
      wx.navigateTo({
          url:"../question/question"
      });
    },
    handleAnswerTap:function(){
      wx.navigateTo({
          url:"../answer/answer"
      })
    },

  
    onChange(event) {
      this.setData({
        value: event.detail,
      });
    },

    banners:[
      {
        picUrl:'cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/homePage/image-2.jpg',
      },
      {
        picUrl:'cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/homePage/image-1.jpg',
      },
      {
        picUrl:'cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/homePage/image-3.jpg',
      }
    ],
    
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // // 事件处理函数
  // bindViewTap() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function (options) {
    this.initImageSize()
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    

  },
  initImageSize: function() {
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    const weiboWidth = windowWidth - 40
    const twoImageSize = (weiboWidth - 2.5) / 2;
    const threeImageSize = (weiboWidth - 2.5 * 2) / 3;
    this.setData({
      twoImageSize: twoImageSize,
      threeImageSize: threeImageSize
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
  // tiaozhuan:(
  //   wx.navigateTo({
  //     url: 'url',
  //   })
  // ),
  1: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/1.2017-2018_CCS001_F_S2_00.png"]
    })
  },
  2: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/1.2017-2018_CCS001_F_S2_01.png"]
    })
  },
  3: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/Snipaste_2021-05-09_01-56-31.bmp"]
    })
  },
  4: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/1.2017-2018_CSE101_F_S1(1)_03.png"]
    })
  },
  5: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/1.2017-2018_CSE101_F_S1(1)_04.png"]
    })
  },
  6: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/1.2017-2018_CSE101_F_S1(1)_04.png"]
    })
  },
  7: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/1.2017-2018_CSE101_F_S1(1)_06.png"]
    })
  },
  8: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/1.2017-2018_CSE101_F_S1(1)_07.png"]
    })
  },
  9: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/Snipaste_2021-05-09_01-56-31.bmp"]
    })
  },
  10: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/9.2017-2018_CCS104_R_SH_00.png"]
    })
  },
  11: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/9.2017-2018_CCS104_R_SH_01.png"]
    })
  },
  12: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/2.2017-2018_CSE101_R_SH(1)_02.png"]
    })
  },
  13: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/2.2017-2018_CSE101_R_SH(1)_03.png"]
    })
  },
  14: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/2.2017-2018_CSE101_R_SH(1)_04.png"]
    })
  },
  15: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/1.2017-2018_CSE101_F_S1(1)_05.png"]
    })
  },
  16: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/1.2017-2018_CSE101_F_S1(1)_06.png"]
    })
  },
  20: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/10.2017-2018_CCS105_F_S1_01.png"]
    })
  },
  19: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/10.2017-2018_CCS105_F_S1_00.png"]
    })
  },
  
})






