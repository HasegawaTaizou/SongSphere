"use strict";

import { getFontAwesomeStyle } from "../components-style/get-font-awesome.js";

import { getHeaderMenuStyle } from "../components-style/header/header-menu-style.js";
import { getHeaderMenuResponsiveStyle } from "../components-style/header/header-menu-responsive-style.js";

export class menu extends HTMLElement {
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
      ${getHeaderMenuStyle()}
      ${getHeaderMenuResponsiveStyle()}
      `;

    return css;
  }

  component() {
    const menu = document.createElement("i");
    menu.classList.add("fa-solid");
    menu.classList.add("fa-bars");

    menu.setAttribute("id", "menu");

    return menu;
  }
}

customElements.define("menu-custom", menu);
