const app = getApp()
Page({
  data: {
    dataList:[],
  },
  data: {
    dataList:[],
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
 getData(num=5,page=0){
  wx.cloud.callFunction({
    name:"mid17",
    data:{
      num:num,
      page:page
    }
  }).then(res=>{
    var oldData=this.data.dataList
    var newData=oldData.concat(res.result.data);
    //console.log(res.result.data)
    this.setData({
      dataList:newData
    })
  })
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.getData()
  this.getImage()
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var page=this.data.dataList.length
    this.getData(3,page)
  },
 
  
})

