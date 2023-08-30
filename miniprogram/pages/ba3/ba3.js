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
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/1.2017-2018_EEE101_R_SH_00.png"]
    })
  },
  2: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/1.2017-2018_EEE101_R_SH_01.png"]
    })
  },
  3: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/1.2017-2018_EEE101_R_SH_02.png"]
    })
  },
  4: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/1.2017-2018_EEE101_R_SH_03.png"]
    })
  },
  5: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/1.2017-2018_EEE101_R_SH_04.png"]
    })
  },
  6: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/1.2017-2018_EEE101_R_SH_05.png"]
    })
  },
  7: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/Snipaste_2021-05-09_01-56-31.bmp"]
    })
  },
  8: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/Snipaste_2021-05-09_01-56-31.bmp"]
    })
  },
  9: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/Snipaste_2021-05-09_01-56-31.bmp"]
    })
  },
  10: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/8.2017-2018_EEE108_R_SH_00.png"]
    })
  },
  11: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/8.2017-2018_EEE108_R_SH_01.png"]
    })
  },
  12: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/8.2017-2018_EEE108_R_SH_02.png"]
    })
  },
  13: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/8.2017-2018_EEE108_R_SH_03.png"]
    })
  },
  14: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/8.2017-2018_EEE108_R_SH_04.png"]
    })
  },
  15: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/8.2017-2018_EEE108_R_SH_05.png"]
    })
  },
  16: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/8.2017-2018_EEE108_R_SH_06.png"]
    })
  },
  17: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/8.2017-2018_EEE108_R_SH_07.png"]
    })
  },
  18: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/8.2017-2018_EEE108_R_SH_08.png"]
    })
  },
  19: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/11.2017-2018_EEE112_F_S2_00.png"]
    })
  },
  20: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/11.2017-2018_EEE112_F_S2_01.png"]
    })
  },
  21: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/11.2017-2018_EEE112_F_S2_02.png"]
    })
  },
  22: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/11.2017-2018_EEE112_F_S2_03.png"]
    })
  },
  23: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/11.2017-2018_EEE112_F_S2_04.png"]
    })
  },
  24: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/11.2017-2018_EEE112_F_S2_05.png"]
    })
  },
  25: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/11.2017-2018_EEE112_F_S2_06.png"]
    })
  },
  26: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/11.2017-2018_EEE112_F_S2_07.png"]
    })
  },
  27: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/11.2017-2018_EEE112_F_S2_08.png"]
    })
  },
  28: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/16.2017-2018_EEE118_R_SH_00.png"]
    })
  },
  29: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/16.2017-2018_EEE118_R_SH_01.png"]
    })
  },
  30: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/16.2017-2018_EEE118_R_SH_02.png"]
    })
  },
  31: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/16.2017-2018_EEE118_R_SH_03.png"]
    })
  },
  32: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/16.2017-2018_EEE118_R_SH_04.png"]
    })
  },
  33: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/16.2017-2018_EEE118_R_SH_05.png"]
    })
  },
  34: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/Snipaste_2021-05-09_01-56-31.bmp"]
    })
  },
  35: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/Snipaste_2021-05-09_01-56-31.bmp"]
    })
  },
  36: function () {
    wx.previewImage({
      urls: ["cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/Paper/Snipaste_2021-05-09_01-56-31.bmp"]
    })
  },
})






