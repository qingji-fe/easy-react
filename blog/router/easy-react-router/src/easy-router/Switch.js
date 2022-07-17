import React from "react";
import RouterContext from "./RouterContext.js";
import { pathToRegexp } from "path-to-regexp";

const Switch = ({ children }) => {
  console.log("对对对", children);

  return (
    <RouterContext.Consumer>
      {(context) => {
        const { location } = context;
        let dom = null;
        React.Children.forEach(children, (child) => {
          if (dom == null && React.isValidElement(child)) {
            console.log("child", child);
            const path = child.props.path || "";
            const reg = pathToRegexp(path, [], { end: false });
            if (reg.test(location.pathname)) {
              dom = child;
            }
          }
        });
        return dom;
      }}
    </RouterContext.Consumer>
  );
};

export default Switch;
