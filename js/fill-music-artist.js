"use strict";

import { searchArtist } from "./search-artist.js";

export const fillMusicArtist = async function () {
  console.log("fill search music");
  const artistData = await searchArtist();
  console.log(artistData);

  const musics = document.querySelector(".musics");
  console.log(musics);

  const musicsContainer = document.createElement("ul");
  musicsContainer.classList.add("musics-container");
  console.log(musicsContainer);

  const faSolid = "fa-solid";

  let musicContainer;

  let musicIcon;
  let musicText;

  artistData.musics.forEach((music) => {
    musicContainer = document.createElement("a");
    musicContainer.classList.add("music-container");
    musicContainer.setAttribute(
      "href",
      `https://www.vagalume.com.br/${music.link}`
    );

    musicIcon = document.createElement("i");
    musicIcon.classList.add(faSolid);
    musicIcon.classList.add("fa-music");

    musicText = document.createElement("span");
    musicText.classList.add("music__text");
    musicText.textContent = music.name;

    musicContainer.append(musicIcon, musicText);
    musicsContainer.append(musicContainer);
  });

  musics.append(musicsContainer);
};

fillMusicArtist();

console.log("fill music");
