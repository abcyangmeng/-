
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    name: "hello",
    age: 10

  },

  addhero: function () {
    var user = { title: this.data.name, rate: this.data.age }
    var movies = this.data.movies;
    movies.push(user);
    this.setData({
      movies: movies
    })

    this.setData({
      name: '',
      age: ''
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindKeyInputAge: function (e) {
    this.setData({
      age: e.detail.value
    })
  },

  deletehero: function (e) {
    var index = e.currentTarget.dataset.index;
    var movies= this.data.movies;
    movies.splice(index, 1);
    this.setData({
      movies: movies
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var url = 'https://movie.douban.com/j/search_subjects';
    wx.request({
      url: url,
      data: {
        type: 'movie',
        tag: '热门',
        page_limit: 5,
        page_start: 0
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          movies: res.data.subjects
        })
      }
    })
  }
})
