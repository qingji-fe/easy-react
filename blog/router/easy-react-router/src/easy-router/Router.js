import React, { useEffect, useState } from "react";

import RouterContext from "./RouterContext.js";
const Router = (props) => {
  const { children, history } = props;
  const [location, setLocation] = useState(history.location);

  console.log("propsprops", props);

  useEffect(() => {
    const unlisten = history.listen((location) => {
      console.log("变换location", location);
      setLocation(location);
    });
    return () => {
      console.log("卸载");
      unlisten();
    };
  });

  return (
    <RouterContext.Provider
      value={{
        history: history,
        location,
      }}
    >
      {children || null}
    </RouterContext.Provider>
  );
};

export default Router;
