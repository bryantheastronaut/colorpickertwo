import React from 'react';
import {createHexagon} from '../functions';

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
      margin: '5px',
      borderRadius: '25px',
    },
    row1: {
      display: 'flex'
    },
    row2: {
      display: 'flex',
      position: 'relative',
      left: '45px',
      top: '-20px'
    }
  }
  let {presets} = props;
  let swatches1 = presets.map((swatch, i) => {
    return (i % 2 === 0)
    ? (
      <div
        key={i}
        style={style.swatch}
        onClick={() => props.onSelectColor({hex: swatch})}>
        {createHexagon(swatch)}
      </div>
    )
    : null;
  });
  let swatches2 = presets.map((swatch, i) => {
    return (i % 2 !== 0)
    ? ( <div
        key={i}
        style={style.swatch}
        onClick={() => props.onSelectColor({hex: swatch})}>
        {createHexagon(swatch)}
    </div> )
    : null;
  });
  return (
    <div style={style.container}>
      <div style={style.row1}>{swatches1}</div>
      <div style={style.row2}>{swatches2}</div>
    </div>
  )
}
