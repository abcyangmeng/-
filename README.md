# 微信小程序:

<img src="http://img2015.zdface.com/20170403/400eb0b46d359e4da1c9833242048238.png" title="赵丽颖" width="120" height="120" align=center />
<h2>我们来学习微信怎样抓取网站数据</h2>

**首先打开要提取信息的网站点击检查查看源代码**

**提取所要查找信息的url复制给当前页面js文件onload赋值**

**data数据设置type（信息类型）、tag、page_limit（每张页面显示信息）、page_start(起始页)** 

**设置header**  
```
header: {  

 'content-type': 'application/x-www-form-urlencoded'    
      },    
      success: function (res) {    
        console.log(res)    
        that.setData({    
          movies: res.data.subjects    
        })    
      }
 ```
  **设置样式**      



