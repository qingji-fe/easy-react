import { createLocation, getDOMLocation, getHashPath } from "./util";

function createBrowserHistory() {
  let listeners = [];
  let history = {};
  const globalHistory = window.history;

  // 通知更新
  const setStateNoticeUpdate = (nextState) => {
    Object.assign(history, nextState) // 合并到history上 action动作
    history.length = globalHistory.length
    console.log("各地,", listeners, history)
    listeners.forEach(fn=> {
      fn.apply(null, [history.location, history.action]);
    })
  }
  // link点击的push
  const push =(path) => {
    globalHistory.pushState({}, null, path);
    setStateNoticeUpdate({
      action: "PUSH",
      location: createLocation(path),
    })
  }

  // 浏览器前进后退
  const handlePopState = () => {
    const location = getDOMLocation();
    console.log("办公费location", location)
    setStateNoticeUpdate({
      action: "POP",
      location,
    });
  }

  // 监听listeners变换
  const listen =(listener) => {
    listeners.push(listener);
    // 刚开始
    if(listeners.length === 1){
      window.addEventListener("popstate", handlePopState);
    }

    return ()=> {
      listeners = listeners.filter(item => item !== listener)
      window.removeEventListener('popstate', handlePopState);
    }
  }

  const path = getHashPath()
  history = {
    push,
    location:createLocation(path),
    listen
  }
  return history;
}

export default createBrowserHistory;
