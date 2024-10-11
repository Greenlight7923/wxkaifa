// pages/home/home.js
Page({
  data: {
    movies: []
},
  onLoad: function() {
    wx.setNavigationBarColor({
      backgroundColor: '#FF6700',
      frontColor: '#ffffff',
    })
    this.loadCity(this.loadData);
    //wx.db.toastSuccess('1');
    //this.loadCity(this.loadData);
    },
  loadData:function(city) {
    wx.request({
      url: wx.db.url('v2/movie/in_theaters'),
      data:{city:city},
      headers: {'Content-Type': 'json'},
      success: (res) => {
        let movies = res.data.subjects;
        for(let index = 0; index < movies.length; index++) {
          this.updateMovies(movies[index]);
        }
        this.setData({
          movies : movies
        });
        console.log(this.data.movies);
      },
      fail: () => {
        wx.db.toastError('获取热映失败');
      }
    })
  },
  setData: function(obj) {
    
  },
  loadCity: function(success) {
    //获取经纬度
    wx.getLocation({
      success:(res) => {
        //获取城市逆地理编码
         wx.request({
           url: 'https://api.map.baidu.com/reverse_geocoding/v3',
           data: {
            output:'json',
            coordtype:'wgs84ll',
            ak:'Q6Y710TcdxeGcNs35kqKouzjfOmtLmnP',
            location:`${res.latitude},${res.longitude}`
            //location:res.latitude + ',' + res.longitude
           },
           success:(res) => {
            let city = res.data.result.addressComponent.city;
            city = city.substring(0,city.length-1);
            success && success(city);
           },
           fail:() => {
            wx.db.toastError('获取城市失败');
           }
         })
      },
      fail:() => {
        wx.db.toastError('获取位置失败');
      }
    });
},
  updateMovies: function(movies) {
    let stars = parseInt(movies.rating.stars);
    let star = parseInt(stars / 10);//获取整颗星
    let halfStar = stars % 10 > 5; //如果大于5，则显示半颗星
    let noStar = 5 - star - (halfStar ? 1 : 0);//计算剩余的星星
    movies.stars = [star, halfStar, noStar];//更新星星
  }
})