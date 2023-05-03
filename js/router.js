"use strict";

const routes = {
  "/": "/pages/index.html",
  "/search": "/pages/search.html",
  "/music": "/pages/music.js",
  "/album": "/pages/album.html",
};

export const route = () => {
  window.event.preventDefault();
  window.history.pushState({}, "", window.event.target.href);
  handleLocation();
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path];
  const { page } = await import(route);

  console.log(page());

  document.getElementById("root").replaceChildren(page());
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

// console.log(artistAditionalInformationContainers);

// artistAditionalInformationContainers.forEach((container) => {
//   console.log(container);
//   container.addEventListener("click", route);
// });
