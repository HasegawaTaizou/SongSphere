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

export const route = async function () {
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

  document.getElementById("root").innerHTML = html;
};

artistAditionalInformationContainers.forEach((container) => {
  container.addEventListener("click", route);
});
