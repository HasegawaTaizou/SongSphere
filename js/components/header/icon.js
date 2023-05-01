"use strict";

export class icon extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadow.appendChild(this.component());
  }

  component() {
    const link = document.createElement("a");
    link.setAttribute("href", "./index.html");

    const songsphereLogo = document.createElement("img");
    songsphereLogo.setAttribute("src", "./img/songsphere-logo.png");
    songsphereLogo.setAttribute("alt", "SongSphere Logo");

    link.append(songsphereLogo);

    return link;
  }
}

customElements.define("icon-custom", icon);
