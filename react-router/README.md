### history

- hashHistory
- browserHistory

#### hashHistory
给我们的路径添加 /#/ 防止浏览器跳转到其他页面，始终拿到的是 index.html,不需要服务器支持。

#### browserHistory
利用我们的服务器，实现页面跳转，不论访问任何路径，都返回 index.html ,路径看起来美观正常，但是需要有本地服务支持，如果托管在github，coding等网站上的话用不了。
