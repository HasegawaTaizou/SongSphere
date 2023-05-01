"use strict";

export const getFooterSocialMediaResponsiveStyle = function () {
  return `
  @media (max-width: 1260px) {
    .social-medias-container {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      align-content: center;
      gap: 12px;
    }
  }
  
  @media (max-width: 750px) {
    .social-medias-container {
      grid-area: social;
      display: flex;
      justify-content: center;
      gap: 12px;
    }
  }
  `;
};
