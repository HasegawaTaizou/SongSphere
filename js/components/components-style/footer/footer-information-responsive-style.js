"use strict";

export const getFooterInformationResponsiveStyle = function () {
  return `
  @media (max-width: 750px) {
    .informations-container {
      grid-area: informations;
      align-items: center;
    }
  }
  `;
};
