import React from "react";
import { Router } from "../easy-router";
import { createHashHistory } from "../history";

const HashRouter = (props) => {
  const { children } = props;
  const history = createHashHistory();
  return <Router history={history} children={children} />;
};

export default HashRouter;
