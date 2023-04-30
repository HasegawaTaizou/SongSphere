"use strict";

export const searchArtist = async function () {
  const url = "https://www.vagalume.com.br/matue/index.js";
  const response = await fetch(url);

  const data = await response.json();

  console.log(data);
  return {
    name: data.artist.desc,
    image: data.artist.pic_medium,
    ranking: data.artist.rank.pos,
    views: data.artist.rank.views,
    fans: data.artist.rank.uniques,
    score: data.artist.rank.points,
    musics: data.artist.lyrics.item,
    albums: data.artist.albums.item,
  };
};

searchArtist();
