"use strict";

export const getHeaderNavigationResponsiveStyle = function () {
  return `
  @media (max-width: 375px) {
    .navigations {
      gap: 8px;
    }
    
    .navigation {
      font-size: 1rem;
    }
  }
    `;
};
