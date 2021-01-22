import React from 'react';

export const VerticalWhiteSpace = ({ value }) => (
  <div style={{ height: `${value}` }}></div>
);

//  Bicycally tag <br /> substitude code
//  Usage:
//  <VerticalWhiteSpace value="20vh" /> with units
//  <VerticalWhiteSpace value="20" /> for pixels
