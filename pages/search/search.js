// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:true,
    hidden1:true,
    search:'',
    list:[]
  },
  inputHandle:function(event){
    this.data.search=event.detail.value;
  },
  serchHandle:function(){
    this.setData({
      hidden1:false
    })
    var that=this;
    wx.request({
      url: "http://api.douban.com/v2/movie/search?q="+this.data.search,
      data:{},
      header: {
        'content-type': 'json' // 默认值
      },
      success:function(res){
        that.setData({
          list: res.data.subjects,
          hidden: false,
          hidden1:true
        });
      }
    })
  },
  navigateDtail:function(options){
    wx.navigateTo({
      url: '../detail/detail?id=' + options.currentTarget.dataset.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
})