import React from "react";
import RouterContext from "../easy-router/RouterContext";
import { createLocation } from "../history/util";

const Link = (props) => {
  const { children, to } = props;
  const handleClick = (history) => {
    return (e) => {
      e.preventDefault();
      history.push(to);
      console.log("link.click");
    };
  };
  return (
    <RouterContext.Consumer>
      {(context) => {
        const { history } = context;

        const location = createLocation(to);
        const href = "#" + location.pathname;
        console.log("contextcontext", props, context, href);
        return (
          <a href={href} onClick={handleClick(history)}>
            {children}
          </a>
        );
      }}
    </RouterContext.Consumer>
  );
};

export default Link;
