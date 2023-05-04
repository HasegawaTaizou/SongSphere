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
    // const menu = document.createElement("i");
    // menu.classList.add("fa-solid");
    // menu.classList.add("fa-bars");

    // const sidenav = document.createElement("ul");
    // sidenav.setAttribute("id", "mySidenav");
    // sidenav.classList.add("sidenav");

    // const liMenu = document.createElement("li");

    // const closeButton = document.createElement("a");
    // closeButton.classList.add("closebtn");
    // closeButton.setAttribute('onclick', 'closeNav()')

    // const closeButtonIcon = document.createElement("i");
    // closeButtonIcon.classList.add("fas");
    // closeButtonIcon.classList.add("fa-times");

    // closeButton.append(closeButtonIcon);

    // liMenu.append(closeButton);

    // const liAbout = document.createElement("li");

    // const linkAbout = document.createElement("a");
    // linkAbout.classList.add("navigation");
    // linkAbout.setAttribute("href", "#");
    // linkAbout.textContent = "Sobre";

    // liAbout.append(linkAbout);

    // const liImages = document.createElement("li");

    // const linkImages = document.createElement("a");
    // linkImages.classList.add("navigation");
    // linkImages.setAttribute("href", "#");
    // linkImages.textContent = "Sobre";

    // liImages.append(linkImages);

    // sidenav.append(liMenu, linkAbout, linkImages)

    // return sidenav
    // return menu;

    // <i onclick="openNavHalf()" id="icon-half-menu" class="fas fa-bars"></i>
    //     <ul id="mySidenav" class="sidenav">
    //       <li>
    //         <a href="#" class="closebtn" onclick="closeNav()"
    //           ><i class="fas fa-times"></i
    //         ></a>
    //       </li>
    //       <li><a href="#about" class="navigation">Sobre</a></li>
    //       <li><a href="#section-images" class="navigation">Imagens</a></li>
    //     </ul>
  }
}

customElements.define("menu-custom", menu);
