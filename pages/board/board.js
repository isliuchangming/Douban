// pages/board/board.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[],
    boards: [
      { key: 'in_theaters', name: '正在热映' },
      { key: 'coming_soon', name: '即将上映' },
      { key: 'top250', name: 'T0P250' },
      { key: 'weekly', name: '口碑榜' },
      { key: 'us_box', name: '北美票房榜' },
      { key: 'new_movies', name: '新片榜' }
    ]
  },
  listHandle:function(event){
    // console.log(event.currentTarget.dataset.key)
    wx.navigateTo({
      url: '../list/list?key=' + event.currentTarget.dataset.key + '&name=' + event.currentTarget.dataset.name
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: "http://api.douban.com/v2/movie/in_theaters",
      data:{
        start:1,
        count:4
      },
      header:{
        'content-type': 'json' // 默认值
      },
      success:function(res){
        that.setData({
          imgUrls:res.data.subjects
        });
      }
    })
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