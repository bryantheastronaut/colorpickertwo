import React from 'react';
import {Header} from './Header';
import {ColorSwatches} from './ColorSwatches';

export const ColorPicker = props => {
  let style = {
    main: {
      width: '80vw',
      height: 'auto'
    },
    box : {
      width: '75vw',
      display: 'block',
      margin: '0 auto'
    }
  }
  return (
    <div style={style.main}>
        <img src='assets/box.svg' style={style.box} />
        <Header
          onSwitchView={props.onSwitchView}
          swatches={props.swatches}
        />
        { (props.swatches)
            ? <ColorSwatches
                presets={props.presets}
                onSelectColor={props.onSelectColor}/>
            : null
        }
    </div>
  )
}
