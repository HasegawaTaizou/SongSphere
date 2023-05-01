"use strict";

import { fillSearchArtist } from "./fill-search-artist.js";

const searchInput = document.querySelector(".search__input");

export const getArtist = async function () {
  const searchInputValue = searchInput.value.split(" ").join("-").toLowerCase();

  localStorage.setItem("artistName", searchInputValue);

  await fillSearchArtist();
};

searchInput.addEventListener("blur", getArtist);
