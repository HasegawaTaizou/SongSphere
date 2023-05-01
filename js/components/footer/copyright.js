"use strict";

import { getFooterCopyrightStyle } from "../components-style/footer/footer-copyright-style.js";
import { getFooterCopyrightResponsiveStyle } from "../components-style/footer/footer-copyright-responsive-style.js";

export class copyright extends HTMLElement {
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
      ${getFooterCopyrightStyle()}
      ${getFooterCopyrightResponsiveStyle()}
      `;

    return css;
  }

  component() {
    const copyright = document.createElement("p");
    copyright.classList.add("copyright__text");
    copyright.textContent = "Copyright © 2022 | Caio Palermo";

    return copyright;
  }
}

customElements.define("copyright-custom", copyright);
