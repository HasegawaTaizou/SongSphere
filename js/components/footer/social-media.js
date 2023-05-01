"use strict";

import { getResetStyle } from "../components-style/get-reset-style.js";
import { getFontAwesomeStyle } from "../components-style/get-font-awesome.js";

import { getFooterSocialMediaStyle } from "../components-style/footer/footer-social-media-style.js";
import { getFooterSocialMediaResponsiveStyle } from "../components-style/footer/footer-social-media-responsive-style.js";

export class socialMedia extends HTMLElement {
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
      ${getFooterSocialMediaStyle()}
      ${getFooterSocialMediaResponsiveStyle()}
      `;

    return css;
  }

  component() {
    const socialMediasContainer = document.createElement("nav");
    socialMediasContainer.classList.add("social-medias-container");

    const fab = "fab";

    const socialMediaYoutube = document.createElement("a");
    socialMediaYoutube.classList.add("social-media");
    socialMediaYoutube.setAttribute("href", "#");
    const socialMediaYoutubeIcon = document.createElement("i");
    socialMediaYoutubeIcon.classList.add(fab);
    socialMediaYoutubeIcon.classList.add("fa-youtube");

    socialMediaYoutube.append(socialMediaYoutubeIcon);

    const socialMediaTwitter = document.createElement("a");
    socialMediaTwitter.classList.add("social-media");
    socialMediaTwitter.setAttribute("href", "#");
    const socialMediaTwitterIcon = document.createElement("i");
    socialMediaTwitterIcon.classList.add(fab);
    socialMediaTwitterIcon.classList.add("fa-twitter");

    socialMediaTwitter.append(socialMediaTwitterIcon);

    const socialMediaInstagram = document.createElement("a");
    socialMediaInstagram.classList.add("social-media");
    socialMediaInstagram.setAttribute("href", "#");
    const socialMediaInstagramIcon = document.createElement("i");
    socialMediaInstagramIcon.classList.add(fab);
    socialMediaInstagramIcon.classList.add("fa-instagram");

    socialMediaInstagram.append(socialMediaInstagramIcon);

    const socialMediaFacebook = document.createElement("a");
    socialMediaFacebook.classList.add("social-media");
    socialMediaFacebook.setAttribute("href", "#");
    const socialMediaFacebookIcon = document.createElement("i");
    socialMediaFacebookIcon.classList.add(fab);
    socialMediaFacebookIcon.classList.add("fa-facebook-f");

    socialMediaFacebook.append(socialMediaFacebookIcon);

    socialMediasContainer.append(
      socialMediaYoutube,
      socialMediaTwitter,
      socialMediaInstagram,
      socialMediaFacebook
    );

    return socialMediasContainer;
  }
}

customElements.define("social-media", socialMedia);
