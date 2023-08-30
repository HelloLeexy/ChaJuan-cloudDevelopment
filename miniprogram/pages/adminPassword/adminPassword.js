Page({

  /**
   * 页面的初始数据
   */

  data: {
    Length: 6, //输入框个数
    isFocus: true, //聚焦
    Value: "", //输入的内容
    ispassword: true, //是否密文显示 true为密文， false为明文。
  },

  Focus(e) {
    var that = this;
    console.log(e.detail.value);
    var inputValue = e.detail.value;
    that.setData({
      Value: inputValue,
    })
  },

  Tap(e) {
    var that = this;
    that.setData({
      isFocus: true,
    })
  },

  formSubmit(e) {
    const admin_password = 123456
    console.log('老子密码输完了, 输入值是: ', e.detail.value.password);
    // if (e.detail.value.password) {

    // }
    if (e.detail.value.password == admin_password) {
      console.log('爷爷我是管理员，让我进去！')
      wx.navigateTo({
        url: '/pages/admin/admin',
      })
    } else {
      console.log('你不是管理员，爬！')
      wx.showToast({
        title: '管理员密码错误! 你不是管理员，爬!',
        icon: 'none'
      })
    }
  },
})