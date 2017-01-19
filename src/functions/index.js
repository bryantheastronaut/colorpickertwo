import React from 'react';

export const validateHex = colorCode => (
  /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(colorCode)
);

export const createHexagon = color => (
  <svg version='1.1' id='hex' width='75'height='75' viewBox='0 0 173.20508075688772 200'>
    <path fill={color} stroke='#333' d='M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z'></path>
  </svg>
)
