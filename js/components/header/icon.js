"use strict";

import { getHeaderIconResponsiveStyle } from '../components-style/header/header-icon-response-style.js'

export class icon extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadow.appendChild(this.component());
    this.shadow.appendChild(this.styles());
  }

  styles() {
    const css = document.createElement("style");
    css.textContent = `
      ${getHeaderIconResponsiveStyle()}
      `;

    return css;
  }

  component() {
    const link = document.createElement("a");
    link.setAttribute("href", "./index.html");

    const songsphereLogo = document.createElement("img");
    songsphereLogo.classList.add('songsphere__logo')
    songsphereLogo.setAttribute("src", "./img/songsphere-logo.png");
    songsphereLogo.setAttribute("alt", "SongSphere Logo");

    link.append(songsphereLogo);

    return link;
  }
}

customElements.define("icon-custom", icon);
