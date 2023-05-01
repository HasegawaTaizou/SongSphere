"use strict";

import { fillSearchArtist } from "./fill-search-artist.js";

const searchInput = document.querySelector(".search__input");

const getArtist = async function () {
  const searchInputValue = searchInput.value.split(" ").join("-").toLowerCase();
  console.log(searchInputValue);

  localStorage.setItem("artistName", searchInputValue);

  await fillSearchArtist();
};

searchInput.addEventListener("blur", getArtist);
