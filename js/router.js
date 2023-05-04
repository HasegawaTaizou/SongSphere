"use strict";

// const routes = {
//   // "/index.html": "/pages/successful.html",
//   "/index.html": "/pages/successful.js",
//   "/search": "/pages/search.html",
//   "/music": "/pages/music.html",
//   "/album": "/pages/album.html",
//   "/verde": "/pages/verde.html",
// };

const routes = {
  // "/index.html": "/pages/successful.html",
  //   "/index.html": "../index.html",
  "/about": "/pages/about.html",
};

const route = () => {
  console.log('route');
  
  window.event.preventDefault();
  window.history.pushState({}, "", window.event.target.href);
  handleLocation();
};

const handleLocation = async () => {
  
  const path = window.location.pathname;
  console.log('path: ' + path);
  
  const route = routes[path];
  console.log('route: ' + route);
  
  const response = await fetch(route);
  const html = await response.text();

  document.getElementById("root").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

// export const route = () => {
//   window.event.preventDefault();
//   window.history.pushState({}, "", window.event.target.href);
//   handleLocation();
// };

// const handleLocation = async () => {
//   const path = window.location.pathname;
//   const route = routes[path];
//   const { page } = await import(route);

//   console.log(page());

//   document.getElementById("root").replaceChildren(page());
// };

// window.onpopstate = handleLocation;
// window.route = route;

// handleLocation();

// console.log(artistAditionalInformationContainers);

// artistAditionalInformationContainers.forEach((container) => {
//   console.log(container);
//   container.addEventListener("click", route);
// });
