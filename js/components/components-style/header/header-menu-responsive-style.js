"use strict";

export const getHeaderMenuResponsiveStyle = function () {
  return `
    @media (max-width: 1260px) {
      #menu {
        display: block;
        font-size: 3rem;
      }
    }
    
    @media (max-width: 520px) {
      #menu {
        font-size: 2rem;
      }
    }
    `;
};
