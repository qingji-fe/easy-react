import { createLocation, getDOMLocation, getHashPath } from "./util";

function createHashHistory() {
  let listeners = [];
  let history = {};

  // 通知更新
  const setStateNoticeUpdate = (nextState) => {
    Object.assign(history, nextState); // 合并到history上 action动作
    console.log("各地,", listeners, history);
    listeners.forEach((fn) => {
      fn.apply(null, [history.location, history.action]);
    });
  };
  // link点击的push
  const push = (path) => {
    window.location.hash = path;
    setStateNoticeUpdate({
      action: "PUSH",
      location: createLocation(path),
    });
  };

  // handleHashChange
  const handleHashChange = () => {
    const location = getDOMLocation();
    setStateNoticeUpdate({
      action: "POP",
      location,
    });
  };

  // 监听listeners变换
  const listen = (listener) => {
    listeners.push(listener);
    console.log("结果是", listeners)
    // 刚开始
    if (listeners.length === 1) {
     
      // window.addEventListener("popstate", handlePopState);
      window.addEventListener("hashchange", handleHashChange);
    }
    return ()=> {
      listeners = listeners.filter(item => item !== listener)
      window.removeEventListener('hashchange', handleHashChange);
    }
  };


  const path = getHashPath();
  history = {
    push,
    location: createLocation(path),
    listen
  };
  return history;
}

export default createHashHistory;
