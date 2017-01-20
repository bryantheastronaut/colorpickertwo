import React from 'react';

export const SetColorButtons = props => {
  let style = {
    container: {
      position: 'absolute',
      top: '350px',
      left: '275px'
    },
    button: {
      height: '35px',
      borderRadius: '5px',
      boxShadow: '1px 1px 1px #333',
      color: '#fafafa',
      border: 'none',
      width: '200px',
      margin: '20px',
      padding: '10px',
      textAlign: 'right'
    }
  }
  return (
    <div style={style.container}>
      <button style={Object.assign({}, style.button, {backgroundColor: '#598FF6'})} onClick={() => props.onSetColor('primaryColor')}>Set primary color</button>
      <button style={Object.assign({}, style.button, {backgroundColor: '#D47777'})} onClick={() => props.onSetColor('secondaryColor')}>Set secondary color</button>
    </div>
  );
};
