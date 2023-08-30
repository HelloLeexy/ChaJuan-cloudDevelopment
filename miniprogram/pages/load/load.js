var app = getApp()
const db = wx.cloud.database()
const _ = db.command;
wx.cloud.init();
var util = require('../../utils/util.js');

Page({
  onShareAppMessage() {
    return {
      title: 'picker',
      path: 'pages/picker/picker'
    }
  },

  bindYearChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value,
      yearValue: this.data.array1[e.detail.value]
    })
    console.log("hh:", this.data.yearValue)
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      typeValue: this.data.array[e.detail.value]
    })
    console.log("hh:", this.data.typeValue)
  },


  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  /**
   * 页面的初始数据
   */

  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },


  data: {
    array: ['试卷类型', '普通试卷', '期末试卷', '期中试卷', '期末补考试卷'],
    index: 0,
    array1: ['试卷时间', '2017-2018', '2018-2019', '2019-2020'],
    index1: 0,
    text: '',
    imgUrl: '',
    type: '',
    typeValue: "",
    yearValue: "",
    count: 0,
    date: '试卷年份',
    userInfo: null,
    urlArr: [],
    creat_time: db.serverDate()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCount()
    this.setData({
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
    })
  },

  getCount: function () {
    //已输入的字数
    var that = this
    db.collection('funnys').count({
      success: res => {
        that.setData({
          count: Number(res.total) + 1
        })
      }
    })

  },

  codeInput: function (e) {
    this.setData({
      code: e.detail.value
    })
  },

  textInput: function (e) {
    this.setData({
      text: e.detail.value
    })
  },

  getUserInfo(e) {
    wx.getUserProfile({
      desc: '正在获取',
      success: (res) => {
        console.log('获取成功: ', res)
        this.pulish(res.userInfo)
        wx.setStorage({
          key: 'userInfo',
          data: JSON.stringify(res.userInfo),
          success(res) {
            console.log('set storage success:', res)
            //that.addUserInfo(res.userInfo);
          }
        })
      },

      fail: function (err) {
        console.log("获取失败: ", err)
      }
    })

  },
  pulish: function (userInfo) {
    var data = {
      //image: new Array(app.globalData.fileID), //将图片储存为数组类型
      image: this.data.urlArr,
      content: this.data.text, //用户输入的文字
      comment: [],
      typeValue: this.data.typeValue,
      yearValue: this.data.yearValue,
      year: this.data.index1,
      type: this.data.index,
      code: this.data.code,
      nickName: userInfo.nickName,
      id: Number(this.data.count) + 1, //是现在数据库的条数+1,微信小程序的不知道怎么设置自增的数字字段
      shareNum: 0,
      commentNum: 0,
      validStatus: 0,
      validTime: db.serverDate(),
      avatarUrl: userInfo.avatarUrl,
      zTime: util.formatTime(new Date())
    }
    //validStatus: 审核状态, 通过时候 +1, 反对时候-1
    //validTime: 审核次数, 最多5次,如果反对的人大于等于3,则不通过

    console.log(data)

    if (data.content && data.year != 0 && data.type != 0) {
      db.collection('discussion').add({
        data: data,
        success: res => {
          wx.showToast({
            title: '发布成功',
          })
          setTimeout(() => {
            wx.reLaunch({
              url: '/pages/index/index',
            })
          }, 1000)

        },
        fail: e => {
          wx.showToast({
            title: '发布错误',
          })
          console.log(e)
        }
      })
    } else {
      wx.showToast({
        title: '请填写文字、试卷类型或试卷时间',
        icon: 'none'
      })
    }

  },

  // 上传图片
  //上传的时候，我们可以获得一个fileId，这个id我们必须存起来，在别人查看的时候，image的src使用的就是fileId，然后用户必
  //须得知道上传的是哪张图片呀， 所以我们使用的是本地的图片路径来展示，即imagePath 
  doUpload: function () {
    // 选择图片
    var that = this;
    wx.chooseImage({
      count: 6,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        that.setData({
          imgUrl: filePath
        })

        // 上传图片
        const cloudPath = "disscussion_image_data/" + Date.now() + "_" + that.data.count + filePath.match(/\.[^.]+?$/)[0]
        //改写: 数组 多图片
        // const filePath = res.tempFilePaths, cloudPath = [];
        // filePath.forEach((item, i)=>{
        // cloudPath.push(that.data.count + '_' + i + filePath[i].match(/\.[^.]+?$/)[0])
        // })

        console.log(cloudPath)

        // filePath.forEach((item, i) => {
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', cloudPath, res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath

          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })
        // })

      },
      fail: e => {
        console.error(e)
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },

  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },

  selectFile(files) {
    console.log('files', files)
    // 返回false可以阻止某次文件上传
  },


  uploadError(e) {
    console.log('upload error', e.detail)
  },

  uplaodFile(files) {
    console.log('upload files', files)
    // 文件上传的函数，返回一个promise
    return new Promise((resolve, reject) => {
      const tempFilePaths = files.tempFilePaths;
      //上传返回值
      const that = this;
      const object = {};
      for (var i = 0; i < tempFilePaths.length; i++) {
        let filePath = '',
          cloudPath = ''
        filePath = tempFilePaths[i]
        // 上传图片
        // cloudPath 最好按时间 遍历的index来排序，避免文件名重复
        cloudPath = "disscussion_image_data/" + Date.now() + "_" + that.data.count + filePath.match(/\.[^.]+?$/)[0]

        console.log(filePath)
        console.log(cloudPath)
        console.log('0000')

        wx.cloud.uploadFile({
          filePath,
          cloudPath,
          success: function (res) {
            console.log(res.fileID)
            that.data.urlArr.push(res.fileID)
            console.log(that.data.urlArr)
            console.log(res.statusCode)
            console.log('1010')
            if (res.statusCode == 200 || res.statusCode == 204 || res.statusCode == 205) {
              console.log('xixi', res.statusCode)
              console.log('picture updated')
              object.urls = files.tempFilePaths
              resolve(object)
            } else {
              console.log('1111')
              reject('error')
            }
          },
          fail: function (err) {
            console.log('2222')
            console.log(err)
          },
          conplete: () => {
            console.log('333333')
          }
        })
      }
    })
  },

  
  


})