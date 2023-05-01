"use strict";

export const getFooterCopyrightResponsiveStyle = function () {
  return `
  @media (max-width: 750px) {
    .copyright__text {
      grid-area: copyright;
      text-align: center;
    }
}
  `;
};
