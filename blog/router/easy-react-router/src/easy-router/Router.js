import React, { useEffect, useState } from "react";

import RouterContext from "./RouterContext.js";
const Router = (props) => {
  const { children, history } = props;
  const [location, setLocation] = useState(history.location);

  console.log("propsprops", props);
  history.listen((location) => {
    setLocation(location);
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
