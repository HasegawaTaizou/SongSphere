"use strict";

import { route } from "./router.js";
import { searchArtist } from "./search-artist.js";

route;

export const fillSearchArtist = async function () {
  const artistData = await searchArtist();

  const artistContainer = document.querySelector(
    ".result-successful-container"
  );

  const artistName = document.createElement("h3");
  artistName.classList.add("result__successful-text");
  artistName.textContent = artistData.name;

  const artistImage = document.createElement("img");
  artistImage.classList.add("result__successful-image");
  artistImage.setAttribute("alt", "Successful Image");
  artistImage.setAttribute(
    "src",
    `https://www.vagalume.com.br/${artistData.image}`
  );

  const artistInformations = document.createElement("ul");
  artistInformations.classList.add("result__informations-container");

  const faSolid = "fa-solid";

  const artistInformationRankingContainer = document.createElement("li");
  artistInformationRankingContainer.classList.add("information-container");
  const artistInformationRankingIcon = document.createElement("i");
  artistInformationRankingIcon.classList.add(faSolid);
  artistInformationRankingIcon.classList.add("fa-trophy");
  const artistInformationRankingText = document.createElement("span");
  artistInformationRankingText.classList.add("information-views__text");
  artistInformationRankingText.textContent = `Ranking: ${artistData.ranking}`;

  artistInformationRankingContainer.append(
    artistInformationRankingIcon,
    artistInformationRankingText
  );

  const artistInformationViewsContainer = document.createElement("li");
  artistInformationViewsContainer.classList.add("information-container");
  const artistInformationViewsIcon = document.createElement("i");
  artistInformationViewsIcon.classList.add(faSolid);
  artistInformationViewsIcon.classList.add("fa-eye");
  const artistInformationViewsText = document.createElement("span");
  artistInformationViewsText.classList.add("information-views__text");
  artistInformationViewsText.textContent = `Visualizações: ${artistData.views}`;

  artistInformationViewsContainer.append(
    artistInformationViewsIcon,
    artistInformationViewsText
  );

  const artistInformationFansContainer = document.createElement("li");
  artistInformationFansContainer.classList.add("information-container");
  const artistInformationFansIcon = document.createElement("i");
  artistInformationFansIcon.classList.add(faSolid);
  artistInformationFansIcon.classList.add("fa-user-group");
  const artistInformationFansText = document.createElement("span");
  artistInformationFansText.classList.add("information-fans__text");
  artistInformationFansText.textContent = `Fãs: ${artistData.fans}`;

  artistInformationFansContainer.append(
    artistInformationFansIcon,
    artistInformationFansText
  );

  const artistInformationScoreContainer = document.createElement("li");
  artistInformationScoreContainer.classList.add("information-container");
  const artistInformationScoreIcon = document.createElement("i");
  artistInformationScoreIcon.classList.add(faSolid);
  artistInformationScoreIcon.classList.add("fa-bullseye");
  const artistInformationScoreText = document.createElement("span");
  artistInformationScoreText.classList.add("information-score__text");
  artistInformationScoreText.textContent = `Pontuação: ${artistData.score}`;

  artistInformationScoreContainer.append(
    artistInformationScoreIcon,
    artistInformationScoreText
  );

  artistInformations.append(
    artistInformationRankingContainer,
    artistInformationViewsContainer,
    artistInformationFansContainer,
    artistInformationScoreContainer
  );

  const artistAditionalInformationsContainer = document.createElement("ul");
  artistAditionalInformationsContainer.classList.add(
    "result__additional-informations-container"
  );

  const artistAdditionalInformationMusicContainer = document.createElement("a");
  artistAdditionalInformationMusicContainer.classList.add(
    "additional-information-container"
  );
  artistAdditionalInformationMusicContainer.setAttribute("href", "/music");
  const artistAdditionalInformationMusicIcon = document.createElement("i");
  artistAdditionalInformationMusicIcon.classList.add(faSolid);
  artistAdditionalInformationMusicIcon.classList.add("fa-music");
  const artistAdditionalInformationMusicText = document.createElement("span");
  artistAdditionalInformationMusicText.classList.add(
    "additional-information__text"
  );
  artistAdditionalInformationMusicText.textContent = "MÚSICAS";

  artistAdditionalInformationMusicContainer.append(
    artistAdditionalInformationMusicIcon,
    artistAdditionalInformationMusicText
  );

  const artistAdditionalInformationAlbumContainer = document.createElement("a");
  artistAdditionalInformationAlbumContainer.classList.add(
    "additional-information-container"
  );
  artistAdditionalInformationAlbumContainer.setAttribute("href", "/verde");
  const artistAdditionalInformationAlbumIcon = document.createElement("i");
  artistAdditionalInformationAlbumIcon.classList.add(faSolid);
  artistAdditionalInformationAlbumIcon.classList.add("fa-compact-disc");
  const artistAdditionalInformationAlbumText = document.createElement("span");
  artistAdditionalInformationAlbumText.classList.add(
    "additional-information__text"
  );
  artistAdditionalInformationAlbumText.textContent = "ÁLBUNS";

  artistAdditionalInformationAlbumContainer.append(
    artistAdditionalInformationAlbumIcon,
    artistAdditionalInformationAlbumText
  );

  artistAditionalInformationsContainer.append(
    artistAdditionalInformationMusicContainer,
    artistAdditionalInformationAlbumContainer
  );

  artistContainer.replaceChildren(
    artistName,
    artistImage,
    artistInformations,
    artistAditionalInformationsContainer
  );

  const artistAditionalInformationContainers = document.querySelectorAll(
    ".additional-information-container"
  );
  console.log(artistAditionalInformationContainers);

  artistAditionalInformationContainers.forEach((container) => {
    container.addEventListener("click", () => {
      console.log("click");
    });
    container.addEventListener("click", route);
  });
};
