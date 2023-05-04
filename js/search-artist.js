"use strict";

export const searchArtist = async function () {
  const artistName = localStorage.getItem("artistName");

  const url = `https://www.vagalume.com.br/${artistName}/index.js`;
  const response = await fetch(url);

  const data = await response.json();

  let musics = data.artist.lyrics.item.map((music) => {
    return {
      name: music.desc,
      link: music.url,
    };
  });

  let albums = data.artist.albums.item.map((album) => {
    return {
      name: album.desc,
      link: album.url,
    };
  });

  return {
    name: data.artist.desc,
    image: data.artist.pic_medium,
    ranking: data.artist.rank.pos,
    views: data.artist.rank.views,
    fans: data.artist.rank.uniques,
    score: data.artist.rank.points,
    musics: musics,
    albums: albums,
  };
};

searchArtist();
