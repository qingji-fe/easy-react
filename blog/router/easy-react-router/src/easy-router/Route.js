import React from "react";
import RouterContext from "./RouterContext.js";
import { pathToRegexp } from "path-to-regexp";

const Route = ({ path, component: Component, children, exact = false }) => {
  return (
    <RouterContext.Consumer>
      {(context) => {
        const { pathname } = context.location;
        let keys = [];
        const reg = pathToRegexp(path, keys, { end: exact });
        keys = keys.map((item) => item.name);
        const result = pathname.match(reg);
        let [url] = result || [];
        const match = {
          isExact: url === pathname,
          url,
          path,
        };
        let props = {
          ...context,
          location,
          match,
        };
        if (result) {
          return Component ? <Component {...props} /> : children;
        }
        return null;
      }}
    </RouterContext.Consumer>
  );
};

export default Route;
