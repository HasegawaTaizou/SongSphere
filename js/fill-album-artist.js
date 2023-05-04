"use strict";

import { searchArtist } from "./search-artist.js";

export const fillAlbumArtist = async function () {
  const artistData = await searchArtist();

  const albums = document.querySelector(".albums");

  const albumsContainer = document.createElement("ul");
  albumsContainer.classList.add("albums-container");

  const faSolid = "fa-solid";

  let albumContainer;

  let albumIcon;
  let albumText;

  artistData.albums.forEach((album) => {
    albumContainer = document.createElement("a");
    albumContainer.classList.add("album-container");
    albumContainer.setAttribute(
      "href",
      `https://www.vagalume.com.br/${album.link}`
    );

    albumIcon = document.createElement("i");
    albumIcon.classList.add(faSolid);
    albumIcon.classList.add("fa-music");

    albumText = document.createElement("span");
    albumText.classList.add("album__text");
    albumText.textContent = album.name;

    albumContainer.append(albumIcon, albumText);
    albumsContainer.append(albumContainer);
  });

  albums.append(albumsContainer);
};

fillAlbumArtist();
