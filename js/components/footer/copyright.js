"use strict";

class copyright extends HTMLElement {
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
      .copyright__text {
        display: flex;
        align-items: center;
        user-select: none;
        font-size: 1.25rem;
      }
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
