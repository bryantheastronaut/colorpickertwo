import React from 'react';

export const RGBHex = props => {
  let style = {
    main: {
      height: '250px',
      width: '650px',
      position: 'relative',
      top: '-500px',
      left: '190px'
    },
    currentColor: {
      backgroundColor: props.currentColor,
      height: '250px',
      width: '250px',
      margin: '0 25px',
      borderRadius: '15px'
    },
    inputContainer: {
      float: 'right',
      display: 'flex',
      width: '300px',
      backgroundColor: '#EEE',
      padding: '18px',
      borderRadius: '20px',
      flexDirection: 'column',
      position: 'relative',
      top: '-250px'
    },
    inputs: {
      height: '25px',
      width: '200px',
      borderRadius: '10px',
      textAlign: 'center',
      position: 'relative',
      top: '-5px',
      border: 'none'
    },
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'Helvetica',
      fontSize: '1.25rem',
      color: '#333',
      margin: '5px'
    }
  }
  return (
    <div style={style.main}>
      <div style={style.currentColor} />
      <div style={style.inputContainer}>
        <div style={style.item}>Red: <input name='r' style={style.inputs} value={props.colors.r} onChange={props.onChangeValue} placeholder='0-255'/></div>
        <div style={style.item}>Green: <input name='g' style={style.inputs} value={props.colors.g} onChange={props.onChangeValue} placeholder='0-255'/></div>
        <div style={style.item}>Blue: <input name='b' style={style.inputs} value={props.colors.b} onChange={props.onChangeValue} placeholder='0-255'/></div>
        <div style={style.item}>Alpha(%): <input name='a' style={style.inputs} value={props.colors.a} onChange={props.onChangeValue} placeholder='0-100'/></div>
        <br /><br />
        <div style={style.item}>Hex: <input name='hex' style={style.inputs} value={props.colors.hex} onChange={props.onChangeValue} placeholder='#123456'/></div>
      </div>
    </div>
  );
};
