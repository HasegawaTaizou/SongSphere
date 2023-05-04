"use strict";

"use strict";

import { searchArtist } from "../search-artist.js";
import { getFontAwesomeStyle } from "./components-style/get-font-awesome.js";

export class musicCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    this.shadow.appendChild(getFontAwesomeStyle());
    this.shadow.appendChild(await this.component());
    this.shadow.appendChild(this.styles());
  }

  styles() {
    const css = document.createElement("style");
    css.textContent = `
      ${getHeaderMenuStyle()}
      ${getHeaderMenuResponsiveStyle()}
      `;

    return css;
  }

  async component() {
    const artistData = await searchArtist();

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

    console.log("fill music art");
    return musics;
  }
}

customElements.define("music-card", musicCard);
