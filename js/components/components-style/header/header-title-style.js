"use strict";

export const getHeaderTitleStyle = function () {
  return `
  .songsphere__title-container {
    display: flex;
    gap: 14px;
    align-items: center;
    justify-content: center;
    user-select: none;
  }
  
  .songsphere__title-container > i {
    font-size: 1.5rem;
  }
  
  .title__text {
    font-size: 3rem;
    font-weight: normal;
  }
  `;
};
