import React from "react";
import { Router } from "../easy-router";
import { createBrowserHistory } from "../history";

const BrowserRouter = (props) => {
  const { children } = props;
  const history = createBrowserHistory(props);
  return <Router history={history} children={children} />;
};

export default BrowserRouter;
