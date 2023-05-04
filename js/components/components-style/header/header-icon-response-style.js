"use strict";

export const getHeaderIconResponsiveStyle = function () {
  return `
  @media (max-width: 375px) {
    .songsphere__logo {
      width: 48px;
      height: 48px;
    }
  }
    `;
};
