"use strict";

import { getFontAwesomeStyle } from "../components-style/get-font-awesome.js";

import { getFooterInformationStyle } from "../components-style/footer/footer-information-style.js";
import { getFooterInformationResponsiveStyle } from "../components-style/footer/footer-information-responsive-style.js";

export class informations extends HTMLElement {
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
      ${getFooterInformationStyle()}
      ${getFooterInformationResponsiveStyle()}
      `;

    return css;
  }

  component() {
    const informationsContainer = document.createElement("ul");
    informationsContainer.classList.add("informations-container");

    const fas = "fas";

    const informationPhone = document.createElement("li");
    informationPhone.classList.add("information");
    const informationPhoneIcon = document.createElement("i");
    informationPhoneIcon.classList.add(fas);
    informationPhoneIcon.classList.add("fa-phone-alt");
    const informationPhoneText = document.createElement("span");
    informationPhoneText.classList.add("information__tex");
    informationPhoneText.textContent = "(11) 4774-4700";

    informationPhone.append(informationPhoneIcon, informationPhoneText);

    const informationEmail = document.createElement("li");
    informationEmail.classList.add("information");
    const informationEmailIcon = document.createElement("i");
    informationEmailIcon.classList.add(fas);
    informationEmailIcon.classList.add("fa-envelope");
    const informationEmailText = document.createElement("span");
    informationEmailText.classList.add("information__tex");
    informationEmailText.textContent = "songsphere@gmail.com";

    informationEmail.append(informationEmailIcon, informationEmailText);

    const informationLocation = document.createElement("li");
    informationLocation.classList.add("information");
    const informationLocationIcon = document.createElement("i");
    informationLocationIcon.classList.add(fas);
    informationLocationIcon.classList.add("fa-map-marker-alt");
    const informationLocationText = document.createElement("span");
    informationLocationText.classList.add("information__tex");
    informationLocationText.textContent = "Rua dos Cafés, Bauru";

    informationLocation.append(
      informationLocationIcon,
      informationLocationText
    );

    informationsContainer.append(
      informationPhone,
      informationEmail,
      informationLocation
    );

    return informationsContainer;
  }
}

customElements.define("informations-custom", informations);
