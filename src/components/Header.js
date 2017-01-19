import React from 'react';

export const Header = props => {
  let style = {
    main: {
      position: 'absolute',
      fontFamily: 'Helvetica, sans-serif',
      fontSize: '2rem',
      fontWeight: '100',
      display: 'inline',
      top: '50px',
      left: '275px'
    },
    inactive: {
      margin: '10px 60px',
      color: '#E0DFDF'
    },
    active: {
      margin: '10px 60px',
      color: '#7FB5F3'
    }
  }
  let checkActive = () => {
    return (props.swatches)
      ? (
        <div>
          <span style={style.inactive} onClick={() => props.onSwitchView('rgb')}>RGB/Hex</span>
          <span style={style.active} onClick={() => props.onSwitchView('swatches')}>Color Swatches</span>
        </div>)
      : (
        <div>
          <span style={style.active} onClick={() => props.onSwitchView('rgb')}>RGB/Hex</span>
          <span style={style.inactive} onClick={() => props.onSwitchView('swatches')}>Color Swatches</span>
        </div>)
  }
  return (
    <div style={style.main}>
    { checkActive() }
    </div>
  );
};
