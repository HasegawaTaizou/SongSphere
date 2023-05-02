"use strict";

const artistAditionalInformationContainers = document.querySelectorAll(
  ".additional-information-container"
);

const routes = {
  "/": "/pages/index.html",
  "/search": "/pages/search.html",
  "/music": "/pages/music.html",
  "/album": "/pages/album.html",
};

console.log("alo");

export const route = async function (event) {
  event.preventDefault();
  console.log("route");
  window.event.preventDefault();
  window.history.pushState({}, "", window.event.target.href);
  console.log(window.event.target.href);

  const path = window.location.pathname;
  console.log(path);

  const route = routes[path];
  console.log(routes[path]);

  const response = await fetch(route);
  console.log(response);

  const html = await response.text();
  console.log(html);

  document.querySelector(".content").innerHTML = html;
};

window.route = route;

console.log(artistAditionalInformationContainers);
artistAditionalInformationContainers.forEach((container) => {
  console.log(container);
  // container.addEventListener("click", route);
  container.addEventListener("click", () => {
    console.log("click");
  });
});
