import React from 'react';

export const ColorSwatches = props => {
  let style = {
    container: {
      display: 'flex',
      flexFlow: 'row wrap',
      position: 'relative',
      top: '-485px',
      left: '165px',
      width: '700px'
    },
    swatch: {
      height: '75px',
      width: '75px',
      margin: '10px',
      border: '1px solid #666',
      borderRadius: '25px',
    }
  }
  let {presets} = props;
  let swatches = presets.map(swatch => {
    let newStyle = {...style.swatch};
    newStyle.backgroundColor = swatch;
    return ( <div
      key={swatch}
      style={newStyle}
      onClick={() => props.onSelectColor({hex: swatch})}></div>)
  });
  return (
    <div style={style.container}>
      {swatches}
    </div>
  )
}
