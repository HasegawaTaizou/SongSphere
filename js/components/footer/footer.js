"use strict";

"use strict";

import { getResetStyle } from "../components-style/get-reset-style.js";

import { getFooterStyle } from "../components-style/footer/footer-style.js";
import { getFooterResponsiveStyle } from "../components-style/footer/footer-responsive-style.js";

import { informations } from "./informations.js";
import { copyright } from "./copyright.js";
import { socialMedia } from "./social-media.js";

const informationsObject = new informations();
const copyrightObject = new copyright();
const socialMediaObject = new socialMedia();

export class footerCustom extends HTMLElement {
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
    ${getFooterStyle()}
    ${getFooterResponsiveStyle()}
      `;

    return css;
  }

  component() {
    const footer = document.createElement("footer");

    footer.append(informationsObject);
    footer.append(copyrightObject);
    footer.append(socialMediaObject);

    return footer;
  }
}

customElements.define("footer-custom", footerCustom);
