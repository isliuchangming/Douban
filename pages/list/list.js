// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:'',
    title:'Loading...',
    hidden:false,
    starts:0,
    option:{}
  },

  /**
   * 页面加载完成去加载数据
   */
  navigateDtail: function (options) {
    wx.navigateTo({
      url: '../detail/detail?id=' + options.currentTarget.dataset.id
    })
  },
  onLoad: function (options) {
    var that = this;
    this.data.option=options;
    wx.request({
      url: "http://api.douban.com/v2/movie/"+options.key,
      data: {
        start:0,
        count:15
      },
      header: {
        'content-type': 'json' // 默认值
      },
      success:function(res){
        that.setData({
          list: res.data.subjects,
          hidden:true,
          title: options.name,
          starts:that.data.starts+5  
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
  onReachBottom: function (options) {
    this.setData({
      hidden:false
    });
    var that = this;
    wx.request({
      url: "http://api.douban.com/v2/movie/" + this.data.option.key,
      data: {
        start:this.data.starts,
        count: 5
      },
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        var lis = res.data.subjects;
        var lists=that.data.list;
        if (res.data.subjects.length===0){
          wx.showModal({
            title: '没有更多资源了',
            success: function (res) {
              return 
            }
          })
        }
        for(var i=0;i<lis.length-1;i++){
          lists.push(lis[i])
        }
        lists.push(res.data.subjects)
        that.setData({
          list: lists,
          hidden:true,
          starts: that.data.starts + 5  
        });
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})