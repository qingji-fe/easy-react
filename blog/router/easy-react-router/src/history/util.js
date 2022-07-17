function parsePath(path) {
  let pathname = path || "/";
  let search = "";
  const searchIndex = pathname.indexOf("?");
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search,
    hash: "",
  };
}
function getHashPath() {
  const href = window.location.href;
  const hashIndex = href.indexOf("#");
  return hashIndex === -1 ? "" : href.substring(hashIndex + 1);
}

function getDOMLocation() {
  const path = getHashPath();
  return createLocation(path);
}
function createLocation(path) {
  return parsePath(path);
}

export { getHashPath, createLocation, getDOMLocation };
