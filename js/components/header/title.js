"use strict";

import { getResetStyle } from "../components-style/get-reset-style.js";
import { getFontAwesomeStyle } from "../components-style/get-font-awesome.js";

import { getHeaderTitleStyle } from "../components-style/header/header-title-style.js";
import { getHeaderTitleResponsiveStyle } from "../components-style/header/header-title-responsive-style.js";

export class title extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadow.appendChild(getFontAwesomeStyle());
    this.shadow.appendChild(this.component());
    this.shadow.appendChild(this.styles());
  }

  styles() {
    const css = document.createElement("style");
    css.textContent = `
      ${getResetStyle()}
      ${getHeaderTitleStyle()}
      ${getHeaderTitleResponsiveStyle()}
      `;

    return css;
  }

  component() {
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("songsphere__title-container");

    const titleText = document.createElement("h1");
    titleText.classList.add("title__text");
    titleText.textContent = "SongSphere";

    const titleIcon = document.createElement("i");
    titleIcon.classList.add("fa-solid");
    titleIcon.classList.add("fa-play");

    titleContainer.append(titleText, titleIcon);

    return titleContainer;
  }
}

customElements.define("title-custom", title);
