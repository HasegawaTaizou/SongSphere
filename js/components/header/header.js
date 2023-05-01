"use strict";

import { icon } from "./icon.js";
import { title } from "./title.js";
import { navigation } from "./navigation.js";
import { menu } from "./menu.js";

import { getResetStyle } from "../components-style/get-reset-style.js";

import { getHeaderStyle } from "../components-style/header/header-style.js";

const iconObject = new icon();
const titleObject = new title();
const navigationObject = new navigation();
const menuObject = new menu();

export class headerCustom extends HTMLElement {
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
    ${getResetStyle()}
    ${getHeaderStyle()}
      `;

    return css;
  }

  component() {
    const header = document.createElement("header");

    header.append(iconObject);
    header.append(titleObject);
    header.append(navigationObject);

    return header;
  }
}

customElements.define("header-custom", headerCustom);
