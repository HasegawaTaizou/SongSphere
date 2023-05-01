"use strict";

export const getFooterSocialMediaStyle = function () {
  return `
  .social-medias-container {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  
  .social-media {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    border: 1px solid var(--primary-color);
  }
  
  .social-media:hover {
    background-color: #ff1ea9ec;
    transition: all 0.5s;
  }
  
  .social-media > i {
    font-size: 1.375rem;
    color: var(--primary-color);
    line-height: 0;
  }
  `;
};
