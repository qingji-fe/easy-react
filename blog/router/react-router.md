### demo 案例

```jsx
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import Home from "home";
import Home2 from "home";
import Home3 from "home";

const menusList = [
  {
    name: "首页",
    path: "/home",
  },
  {
    name: "首页2",
    path: "/home2",
  },
  {
    name: "首页3",
    path: "/home3",
  },
];
const index = () => {
  return (
    <div>
      <div>
        <Router>
          <div>
            {menusList.map((router) => (
              <Link key={router.path} to={router.path}>
                <span className="routerLink">{router.name}</span>
              </Link>
            ))}
          </div>
          <Switch>
            <Route path={"/home"} component={Home}></Route>
            <Route path={"/home2"} component={Home2}></Route>
            <Route path={"/home3"} component={Home3}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};
```

### react-router

这个包是 router 包提供的比较核心的功能独立出来的和平台无关的包

- Router

  > 接收 location，history 等信息传递下去 （类比于 redux 的 provider）

- Route
  > 接收路径和组件的匹配容器
- Switch

  > 匹配路由

- Redirect

  > 重定向

### react-router-dom

浏览器专用的包

- HashRouter
- BrowserRouter
- Link

### react-router-dom react-router history 关系

- history 是 react-router 的核心，实现了 popState，pushState 等方法
- react-router 是 react-router-dom 的核心， 实现了 Router、Switch 等组件
- react-router-dom 封装了 Link 组、HashRouter、BrowserRouter 等组件
