"use strict";

export function page() {
  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-container");

  const searchTitle = document.createElement("h2");
  searchTitle.classList.add("search__title");

  const searchInput = document.createElement("input");
  searchInput.classList.add("search__input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Artista");

  searchContainer.append(searchTitle, searchInput);

  const resultSuccessfulContainer = document.createElement("div");
  resultSuccessfulContainer.classList.add("result-successful-container");

  return searchContainer;
}
