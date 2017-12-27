Page({
  
  data: {
   
    inputShowed: false,
    inputVal: "",
    friends:[{
      icon: '../images/圣诞树 (2).png',
      name:"嬴政",age:18
    },
    {
      icon: '../images/圣诞老人.png',
      name:"武则天",age:"20"
      }, {
      icon: '../images/圣诞袜.png',
        name: "刘邦", age: "20"
    }, {
      icon: '../images/285402.jpg',
      name: "赵匡义", age: "20"
    }]
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
 
  onLoad: function () {
    this.setData({
    
    });
  }
});
