import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        {/* Hexagon */}
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
        {/* Outer "V" */}
        <path
          d="M25,32 
             L40,62 
             L55,32 
             L50,32 
             L40,52 
             L30,32 
             Z"
          fill="currentColor"
        />
        <path
          d="M32,32 
             L40,47 
             L48,32 
             L45,32 
             L40,42 
             L35,32 
             Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default IconLogo;
