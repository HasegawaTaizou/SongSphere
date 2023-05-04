"use strict";

import { getResetStyle } from "../components-style/get-reset-style.js";

import { getHeaderNavigationStyle } from "../components-style/header/header-navigation-style.js";
import { getHeaderNavigationResponsiveStyle } from "../components-style/header/header-navigation-responsive-style.js";
// import { menu } from "./menu.js";

// const menuObject = new menu();

export class navigation extends HTMLElement {
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
      ${getHeaderNavigationStyle()}
      ${getHeaderNavigationResponsiveStyle()}
      `;

    return css;
  }

  component() {
    const navigationContainer = document.createElement("nav");
    navigationContainer.classList.add("songsphere__navigation-container");

    const navigations = document.createElement("ul");
    navigations.classList.add("navigations");

    const navigationAbout = document.createElement("li");
    navigationAbout.classList.add("navigation");
    const navigationAboutLink = document.createElement("a");
    navigationAboutLink.classList.add("navigation__link");
    navigationAboutLink.setAttribute("href", "#");
    navigationAboutLink.textContent = "Sobre";

    navigationAbout.append(navigationAboutLink);

    const navigationCopyright = document.createElement("li");
    navigationCopyright.classList.add("navigation");
    const navigationCopyrightLink = document.createElement("a");
    navigationCopyrightLink.classList.add("navigation__link");
    navigationCopyrightLink.setAttribute("href", "/about");
    navigationCopyrightLink.setAttribute("onclick", "route()");
    navigationCopyrightLink.textContent = "Copyright";

    navigationCopyright.append(navigationCopyrightLink);

    navigations.append(navigationAbout, navigationCopyright);

    // navigationContainer.append(navigations, menuObject);
    navigationContainer.append(navigations);

    return navigationContainer;
  }
}

customElements.define("navigation-custom", navigation);
