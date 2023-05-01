"use strict";

export const getResetStyle = function () {
  return `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: white;
  }
  
  ol,
  li,
  ul {
    list-style: none;
  }
    `;
};
