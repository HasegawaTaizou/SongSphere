"use strict";

export const getHeaderTitleResponsiveStyle = function () {
  return `
    @media (max-width: 750px) {
      .songsphere__title-container {
        display: none;
      }
    }
    `;
};
