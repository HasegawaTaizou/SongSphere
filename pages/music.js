"use strict";

export async function page() {
  console.log('page music');
  
  const content = document.querySelector(".content");

  const musicsIntroductions = document.createElement("div");
  musicsIntroductions.classList.add("musics-introdution");

  const musicTitle = document.createElement("h1");
  musicTitle.classList.add("music__title");
  musicTitle.textContent = "MÚSICAS";

  const musicImage = document.createElement("img");
  musicImage.setAttribute("src", "../img/songsphere-music-image.png");
  musicImage.setAttribute("alt", "Music Image");

  musicsIntroductions.append(musicTitle, musicImage);

  //Where the data will be filled
  const musics = document.createElement("div");
  musics.classList.add("musics");

  content.append(musicsIntroductions, musics);

  return content;
}
