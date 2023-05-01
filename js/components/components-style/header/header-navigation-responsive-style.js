"use strict";

export const getHeaderNavigationResponsiveStyle = function () {
  return `
    @media (max-width: 1260px) {
      .navigations {
        display: none;
      }
    }
    `;
};
