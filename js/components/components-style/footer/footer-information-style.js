"use strict";

export const getFooterInformationStyle = function () {
  return `
  .informations-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  }
  
  .information {
    display: flex;
    gap: 24px;
    user-select: none;
  }
  `;
};
