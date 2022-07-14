### 前端路由

#### 概述

> 前端路由就是无需要刷新页面情况下，根据不同的 url 来对应不同的页面

#### 优缺点

> 优点： 前后端彻底分离，用户体验会好很多, 每次请求都不需要向后端请求

> 缺点： 前进后退还要请求接口， 不能缓存

### 前端路由实现原理

#### 第一种模式 hash

hash 就是一个 url #号后面内容， hash 在 url 中但是不会被 http 请求的
只是做一个浏览器的标识动作,改变 hash 不会加载页面，通过 hashChange 事件监听路由改变

#### 第二种模式 history

html5 新增的 api， history.pushState、 history.replaceState 来操作浏览器的历史记录栈,history 模式下没有像 hash 模式那样有一个**专用的事件**来监听 url 变换,所以需要模拟一个路由变换的条件来来做不同的事件处理

- a 标签跳转时候通过 click 点击时候来处理事件（需要阻止默认的行为）从 event.target.url 来获取 url
- 浏览器的前进后退,通过 window.onpopstate 事件，来获取历史记录栈的改变对应的执行回调
- 脚本直接使用 pushState、replaceState

### 小结

实现前端路由关心只有两件事

- 如何改变 url 并且不刷新页面

- 如何监听 url 的变换
